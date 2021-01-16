<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    // public function view()
    // {
    //     // $this->data['product']  = Product::all();
    //     $products = Product::all();

    //     $products->map(function ($item) {
    //         $item->code =  $this->formatCode($item->id);
    //         return $item;
    //     });
    //     $sort = $products->sortBy('name');
    //     $this->data['products'] = $sort->values()->all();

    //     return response()->json($this->data);
    // }

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
        $this->data['product']->category_id = $request->category_id;
        $this->data['product']->qr_code = "eshopbnb-AP-";
        $this->saveProductName($request->name);

        $this->data['product']->update(['qr_code' => 'eshopbnb-AP-' . $this->data['product']->id]);
        $this->addCode();

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);

        $this->data['product'] = Product::findorFail($request->id);
        $this->saveProductName($request->name);
        $this->addCode();

        return response()->json($this->data);
    }

    private function saveProductName($name)
    {
        $this->data['product']->name = $name;
        $this->data['product']->save();
    }

    private function formatCode($id)
    {
        return "AP - " . str_pad($id, 4, 0, STR_PAD_LEFT);
    }

    private function addCode()
    {
        $this->data['product']->code = $this->formatCode($this->data['product']->id);
    }

    public function destroy(Request $request)
    {
        $this->data['product'] = Product::findorFail($request->id);
        $this->data['product']->delete();

        return response()->json($this->data);
    }
}
