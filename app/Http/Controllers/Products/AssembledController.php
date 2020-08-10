<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Product;
use App\Raw;
use Illuminate\Http\Request;

class AssembledController extends Controller
{
    public function view(Request $request)
    {
        if ($request->id) {
            $this->data['raw'] = Product::find($request->id)->raws()->orderBy('name')->get();
        } else {
            $this->data['raw'] = [];
            // $this->data['raw'] = Product::with('raws')->get();
            // $products = Product::has('raws')->get(); //i might not want this becuase i need to list all probably
            // $this->data['items'] = $products->map(function ($v, $k) {
            //     $v->raws = $v->raws()->orderBy('name')->get();
            //     return $v;
            // });
            // $this->data['items']->all();
        }
        return response()->json($this->data);
    }

    private function validateAndFindProduct($request)
    {
        $request->validate([
            'raw_id' => 'required',
            'product_id' => 'required',
        ]);
        $this->data['product'] = Product::findorFail($request->product_id);
    }

    public function attach(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->data['product']->raws()->attach($request->raw_id, [
            'quantity' => $request->quantity
        ]);

        $this->data['product'] = Product::find($this->data['product']->id)->raws()->get();

        return response()->json($this->data);
    }


    public function detach(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->data['product']->raws()->detach($request->raw_id);

        $this->data['product'] = Product::find($this->data['product']->id)->raws()->get();

        return response()->json($this->data);
    }
}
