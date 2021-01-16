<?php

namespace App\Http\Controllers\Products;

use App\Base;
use App\Convert;
use App\Http\Controllers\Controller;
use App\Log;
use App\Raw;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RawController extends Controller
{
    private $log;
    private function formatCode($id)
    {
        return "RI - " . str_pad($id, 4, 0, STR_PAD_LEFT);
    }

    public function view(Request $request)
    {
        if ($request->id) {
            $raw = Raw::with(['base' => function ($q) {
                $q->withTrashed();
            }])->with('category')->where('category_id', $request->id)->get();

            $raw->map(function ($item) {
                $item->code =  $this->formatCode($item->id);
                $item->units_needed = $item->quantity . " " . $item->base->name;
                $item->custom_reorder_point = $item->reorder_point . " " . $item->base->name;
                return $item;
            });

            $sort = $raw->sortBy('name');
            $this->data['raw'] = $sort->values()->all();
            $this->data['base'] = Base::all();
            $this->data['convert'] = Convert::with('base')->get();
        } else {
            $this->data['raw'] = Raw::with(['base' => function ($q) {
                $q->withTrashed();
            }])->with('category')->get(); //autocomplete need this
        }
        return response()->json($this->data);
    }

    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
            'quantity' => 'required',
            'reorder_point' => 'required',
            'category_id' => 'required',
            'base_id' => 'required'
        ]);
    }

    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {
            $this->validation($request);

            $this->data['raw'] = new Raw();
            $this->data['raw']->qr_code = "eshopbnb-RI-";
            $this->saveRawInformation($request);

            $this->data['raw']->update(['qr_code' => 'eshopbnb-RI-' . $this->data['raw']->id]);

            $this->prepareRaw();
            $this->addToLogs($request, 'store');
        });
        return response()->json($this->data);
    }

    private function addToLogs($request, $action)
    {
        $quantity = $request->quantity - $this->data['raw']->purchase;
        if ($quantity !== 0) {
            $this->log = new Log();
            $this->log->user_id = Auth::id();
            $this->log->raw_id = $this->data['raw']->id;
            if ($action == 'store') {
                $this->log->quantity = $request->quantity;
                $this->data['raw']->update(['purchase' => $request->quantity]);
            } else {
                $this->log->quantity = $quantity;
                $this->data['raw']->update(['purchase' => $this->data['raw']->purchase + $quantity]);
            }
            $this->log->status = 'Purchase';
            $this->log->save();
        }
    }

    public function update(Request $request)
    {
        DB::transaction(function () use ($request) {
            $this->validation($request);

            $this->data['raw'] = Raw::findorFail($request->id);
            $this->saveRawInformation($request);

            $this->prepareRaw();
            $this->addToLogs($request, 'update');
        });
        return response()->json($this->data);
    }

    private function prepareRaw()
    {
        $this->data['raw'] = Raw::with(['base' => function ($q) {
            $q->withTrashed();
        }])->with('category')->where('id', $this->data['raw']->id)->first();
    }

    public function destroy(Request $request)
    {
        $this->data['raw'] = Raw::findorFail($request->id);
        $this->data['raw']->delete();

        return response()->json($this->data);
    }

    private function saveRawInformation($request)
    {
        $this->data['raw']->name = $request->name;
        $this->data['raw']->category_id = $request->category_id;
        $this->data['raw']->base_id = $request->base_id;
        $this->data['raw']->quantity = $request->quantity;
        $this->data['raw']->reorder_point = $request->reorder_point;
        $this->data['raw']->save();
    }
}
