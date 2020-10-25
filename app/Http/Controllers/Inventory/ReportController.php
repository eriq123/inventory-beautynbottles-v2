<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Log;
use App\Raw;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function download(Request $request)
    {
        $from = date($request->from);
        $to = date($request->to);
        $log = Log::whereBetween('created_at', [$from . " 00:00:00", $to . " 23:59:59"])->get();

        $this->data['raw'] = collect();
        foreach ($log as $value) {
            $raw = Raw::where('id', $value->raw_id)->with('category')->with('base')->first();
            $this->data['raw']->push($raw);
        }

        return response()->json($this->data);
    }
}
