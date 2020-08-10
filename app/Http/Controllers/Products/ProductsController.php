<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
        ]);
    }

    public function store(Request $request)
    {
        $this->validation($request);

        $this->data['product'] = new Product();
        $this->saveProductName($request->name);

        return response()->json($this->data);
    }

    public function search(Request $request)
    {
        $products = Product::where('name', 'LIKE', $request->name . '%')
            ->orderBy('name')
            ->limit(5)
            ->get();

        $this->data['product'] = $products->map(function ($v, $k) {
            $v->raws = $v->raws()->get();
            return $v;
        });

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);

        $this->data['product'] = Product::findorFail($request->id);
        $this->saveProductName($request->name);

        return response()->json($this->data);
    }

    private function saveProductName($name)
    {
        $this->data['product']->name = $name;
        $this->data['product']->save();
    }

    public function destroy(Request $request)
    {
        $this->data['product'] = Product::findorFail($request->id);
        $this->data['product']->delete();

        return response()->json($this->data);
    }
}
