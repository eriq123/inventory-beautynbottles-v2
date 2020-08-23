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
        $this->data['raw'] = Product::find($request->id)->raws()->with('base')->with('category')->orderBy('name')->get();

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

        $this->data['product'] = Product::find($this->data['product']->id)->raws()->with('base')->with('category')->get();

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->data['product']->raws()->updateExistingPivot($request->raw_id, [
            'quantity' => $request->quantity
        ]);

        $this->data['product'] = Product::find($this->data['product']->id)->raws()->with('base')->with('category')->get();

        return response()->json($this->data);
    }


    public function detach(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->data['product']->raws()->detach($request->raw_id);

        $this->data['product'] = Product::find($this->data['product']->id)->raws()->with('base')->with('category')->get();

        return response()->json($this->data);
    }
}
