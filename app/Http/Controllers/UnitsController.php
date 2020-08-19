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

    // public function getBase()
    // {
    //     $this->data['base'] = Base::all();
    //     $this->data['selectedBase'] = $this->data['base']->first();
    //     return response()->json($this->data);
    // }

    // public function getBaseById(Request $request)
    // {
    //     $this->data['base'] = Base::findOrFail($request->id);
    //     return response()->json($this->data);
    // }

    // public function getConvertByBase(Request $request)
    // {
    //     $this->data['convert'] = Convert::with('base')->where('base_id', $request->id)->get();
    //     return response()->json($this->data);
    // }
}
