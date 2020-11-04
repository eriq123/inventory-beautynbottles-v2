<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Log;
use App\Raw;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function download(Request $request)
    {
        $from = new Carbon($request->from);
        $to = new Carbon($request->to);
        $this->data['log'] = Log::whereBetween('created_at', [$from->startOfDay(), $to->endOfDay()])->with(['raw' => function ($q) {
            $q->withTrashed()->with(['base' => function ($q) {
                $q->withTrashed();
            }]);
        }])->get();

        return response()->json($this->data);
    }
}
