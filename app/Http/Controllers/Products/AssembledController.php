<?php

namespace App\Http\Controllers\Products;

use App\Convert;
use App\Http\Controllers\Controller;
use App\Product;
use App\Raw;
use Illuminate\Http\Request;

class AssembledController extends Controller
{
    private $validatedProduct;

    private function validateAndFindProduct($request)
    {
        $request->validate([
            'raw_id' => 'required',
            'product_id' => 'required',
        ]);
        $this->validatedProduct = Product::findorFail($request->product_id);
    }

    private function formatCode($id)
    {
        return "RI - " . str_pad($id, 4, 0, STR_PAD_LEFT);
    }

    private function prepareProduct()
    {
        $product = Product::find($this->validatedProduct->id)->raws()
            ->with(['base' => function ($q) {
                $q->withTrashed();
            }])->with('category')->get();
        $product->map(function ($item) {
            $item->code =  $this->formatCode($item->id);
            $item->units_needed = $item->pivot->quantity . " " . $item->base->name;
            return $item;
        });
        $sort = $product->sortBy('name');

        $this->data['product'] = $sort->values()->all();
    }

    public function view(Request $request)
    {
        $this->validatedProduct = Product::findorFail($request->id);
        $this->prepareProduct();
        $this->data['convert'] = Convert::with('base')->get();

        return response()->json($this->data);
    }

    public function attach(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->validatedProduct->raws()->attach($request->raw_id, [
            'quantity' => $request->quantity
        ]);

        $this->prepareProduct();

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->validatedProduct->raws()->updateExistingPivot($request->raw_id, [
            'quantity' => $request->quantity
        ]);

        $this->prepareProduct();

        return response()->json($this->data);
    }


    public function detach(Request $request)
    {
        $this->validateAndFindProduct($request);
        $this->validatedProduct->raws()->detach($request->raw_id);

        $this->prepareProduct();

        return response()->json($this->data);
    }
}
