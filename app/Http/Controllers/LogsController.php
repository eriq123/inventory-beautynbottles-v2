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

        $this->data['log']->map(function ($item) {
            $item->full_name = $item->user->first_name . " " . $item->user->last_name;
            $item->custom_quantity = $item->quantity . " " . $item->raw->base->name;
            $item->custom_id = "RI - " . str_pad($item->raw->id, 4, 0, STR_PAD_LEFT);
            return $item;
        });


        return response()->json($this->data);
    }
}
