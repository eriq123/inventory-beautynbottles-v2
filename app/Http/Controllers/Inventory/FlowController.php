<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Log;
use App\Product;
use App\Raw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FlowController extends Controller
{
    public function toggle(Request $request)
    {
        $this->data['toggle'] = $request->toggle;
        if ($request->toggle) {
            // products
            $products = Product::has('raws')->get();
            $this->data['items'] = $products->map(function ($v, $k) {
                $v->raws = $v->raws()->orderBy('name')->get();
                return $v;
            });
            $this->data['items']->all();
        } else {
            // raw
            $this->data['items'] = Raw::with('category')->with('base')->get();
        }
        return response()->json($this->data);
    }

    public function store(Request $request)
    {
        if ($request->type == 'Products') {
            $raws = Product::find($request->id)->raws()->get();

            if ($request->action !== 'add') {
                foreach ($raws as $raw) {
                    $singleRaw = Raw::findorFail($raw->id);
                    if ($singleRaw->quantity < ($raw->pivot->quantity * $request->quantity)) {
                        return response()->json(['error_message' => 'Action was unsuccessful due to insufficient stocks.'], 419);
                    }
                }
            }

            foreach ($raws as $raw) {
                $singleRaw = Raw::findorFail($raw->id);

                if ($request->action == 'add') {
                    $singleRaw->quantity += $raw->pivot->quantity * $request->quantity;
                } else {
                    $singleRaw->quantity -= $raw->pivot->quantity * $request->quantity;
                }

                if ($request->status == "Purchase") {
                    $singleRaw->purchase += $raw->pivot->quantity * $request->quantity;
                } elseif ($request->status == "RTS") {
                    $singleRaw->rts += $raw->pivot->quantity * $request->quantity;
                } elseif ($request->status == "Sold") {
                    $singleRaw->sold += $raw->pivot->quantity * $request->quantity;
                } elseif ($request->status == "Loss") {
                    $singleRaw->loss += $raw->pivot->quantity * $request->quantity;
                }

                $singleRaw->save();
            }

            if ($request->action !== 'add') {
                $product = Product::find($request->id);
                $product->purchase += $request->quantity;
                $product->save();
            }

            $this->saveReport($request);

            return;
        } else {
            $this->data['raw'] = Raw::where('id', $request->id)->with('category')->with('base')->first();

            if ($request->action == 'add') {
                $this->data['raw']->quantity += $request->quantity;

                if ($request->status == "Purchase") {
                    $this->data['raw']->purchase += $request->quantity;
                } elseif ($request->status == "RTS") {
                    $this->data['raw']->rts += $request->quantity;
                }
            } else {
                if ($this->data['raw']->quantity < $request->quantity) {
                    return response()->json(['error_message' => 'Action was unsuccessful due to insufficient stocks.'], 419);
                }

                $this->data['raw']->quantity -= $request->quantity;

                if ($request->status == "Sold") {
                    $this->data['raw']->sold += $request->quantity;
                } elseif ($request->status == "Loss") {
                    $this->data['raw']->loss += $request->quantity;
                }
            }
            $this->data['raw']->save();
            $this->saveReport($request);

            return response()->json($this->data);
        }
    }

    private function saveReport($request)
    {
        $report = new Log();
        $report->user_id = Auth::id();
        $report->raw_id = $request->id;
        $report->quantity = $request->quantity;
        $report->status = $request->status;
        $report->save();
    }
}
