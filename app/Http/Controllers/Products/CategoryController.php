<?php

namespace App\Http\Controllers\Products;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function view()
    {
        $this->data['category']  = Category::all();

        return response()->json($this->data);
    }

    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
        ]);
    }

    public function store(Request $request)
    {
        $this->validation($request);

        $this->data['category'] = new Category();
        $this->saveCategoryName($request->name);

        return response()->json($this->data);
    }

    public function search(Request $request)
    {
        $this->data['category'] = Category::where('name', 'LIKE', $request->name . '%')
            ->orderBy('name')
            ->limit(5)
            ->get();

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
    }

    public function destroy(Request $request)
    {
        $this->data['category'] = Category::findorFail($request->id);
        $this->data['category']->delete();

        return response()->json($this->data);
    }
}
