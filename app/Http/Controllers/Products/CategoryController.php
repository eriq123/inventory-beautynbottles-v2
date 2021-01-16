<?php

namespace App\Http\Controllers\Products;

use App\Category;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    private function formatCode($id, $code)
    {
        return $code . " - " . str_pad($id, 4, 0, STR_PAD_LEFT);
    }

    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
        ]);
    }

    private $tempCollection;
    private $tempCode;

    private function prepareData()
    {
        $this->tempCollection->map(function ($item) {
            $item->code =  $this->formatCode($item->id, $this->tempCode);
            return $item;
        });
        $sort = $this->tempCollection->sortBy('name');
        if ($this->tempCode == 'AP') {
            $this->data['products'] = $sort->values()->all();
        } else {
            $this->data['category'] = $sort->values()->all();
        }
    }

    public function findProductsByCategoryId($id)
    {
        $this->tempCollection = Product::where('category_id', $id)->get();
        $this->tempCode = 'AP';
        $this->prepareData();

        return response()->json($this->data);
    }

    public function view(Request $request)
    {
        $this->tempCollection  = Category::where('type', $request->type)->get();
        $this->tempCode = 'CI';
        $this->prepareData();

        return response()->json($this->data);
    }

    public function store(Request $request)
    {
        $this->validation($request);

        $this->data['category'] = new Category();
        $this->data['category']->type = $request->type;
        $this->saveCategoryName($request->name);

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);

        $this->data['category'] = Category::findorFail($request->id);
        $this->saveCategoryName($request->name);

        return response()->json($this->data);
    }

    private function saveCategoryName($name)
    {
        $this->data['category']->name = $name;
        $this->data['category']->save();
        $this->data['category']->code = $this->formatCode($this->data['category']->id, 'CI');
    }

    public function destroy(Request $request)
    {
        $this->data['category'] = Category::findorFail($request->id);
        $this->data['category']->delete();

        return response()->json($this->data);
    }
}
