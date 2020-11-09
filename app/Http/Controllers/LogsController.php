<?php

namespace App\Http\Controllers;

use App\Log;
use Illuminate\Http\Request;

class LogsController extends Controller
{
    public function view()
    {
        $this->data['log'] = Log::with(['user' => function ($q) {
            $q->withTrashed();
        }])->with(['raw' => function ($q) {
            $q->withTrashed()->with(['base' => function ($q) {
                $q->withTrashed();
            }]);
        }])->get();

        // $this->data['log'] = Log::with('user')->with('raw')->get();

        return response()->json($this->data);
    }
}
