<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Log;
use App\Raw;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function today()
    {
        return Carbon::now()->format('Y-m-d');
    }

    public function download(Request $request)
    {
        $from = new Carbon($request->from);
        $to = new Carbon($request->to);
        $log = Log::whereBetween('created_at', [$from->startOfDay(), $to->endOfDay()])
            ->with(['raw' => function ($q) {
                $q->withTrashed()
                    ->with(['base' => function ($q) {
                        $q->withTrashed();
                    }])
                    ->with(['category' => function ($q) {
                        $q->withTrashed();
                    }]);
            }])->groupBy('raw_id')
            ->select(
                DB::raw(
                    "SUM(IF(status='Purchase',quantity,0)) as purchase,\n
                        SUM(IF(status='Sold',quantity,0)) as sold,\n 
                        SUM(IF(status='RTS',quantity,0)) as rts, \n
                        SUM(IF(status='Loss',quantity,0)) as loss"
                ),
                'raw_id'
            )
            ->get();

        $log->map(function ($item) {
            $item->code = "RI - " . str_pad($item->raw->id, 4, 0, STR_PAD_LEFT);
            $item->name = $item->raw->category->name . " - " . $item->raw->name;
            $item->custom_purchase = $item->purchase / 100;
            $item->custom_rts = $item->rts / 100;
            $item->custom_sold = "(" . ($item->sold / 100) . ")";
            $item->custom_loss = "(" . ($item->loss / 100) . ")";
            $item->units = $item->raw->quantity . " " . $item->raw->base->name;
            return $item;
        });

        $sortLogs = $log->sortBy('name');
        $this->data['log'] = $sortLogs->values()->all();

        return response()->json($this->data);
    }
}
