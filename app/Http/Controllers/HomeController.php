<?php

namespace App\Http\Controllers;

use App\Convert;
use App\Product;
use App\Raw;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function raw(Request $request)
    {
        $this->data['raw'] = Raw::with('base')->with('category')->where('id', $request->id)->first();

        $this->data['convert'] = Convert::where('base_id', $this->data['raw']->base_id)->get();

        return response()->json($this->data);
    }

    public function product(Request $request)
    {
        $this->data['product'] = Product::find($request->id);

        return response()->json($this->data);
    }
}
