<?php

namespace App\Http\Controllers;

use App\Base;
use App\Convert;
use Illuminate\Http\Request;

class UnitsController extends Controller
{
    public function all(Request $request)
    {
        $this->data['base'] = Base::all();
        $this->data['convert'] = Convert::with('base')->get();
        return response()->json($this->data);
    }

    public function getConvertByBase(Request $request)
    {
        $this->data['convert'] = Convert::with('base')->where('base_id', $request->id)->get();
        return response()->json($this->data);
    }
}
