<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Raw;
use Illuminate\Http\Request;

class RawController extends Controller
{
    public function view(Request $request)
    {
        if ($request->id) {
            $this->data['raw'] = Raw::with('category')->where('category_id', $request->id)->get();
        } else {
            $this->data['raw'] = Raw::with('category')->get();
        }
        return response()->json($this->data);
    }

    public function search(Request $request)
    {
        $this->data['raw'] = Raw::where('name', 'LIKE', $request->name . '%')
            ->orderBy('name')
            ->limit(5)
            ->get();

        return response()->json($this->data);
    }

    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
            'quantity' => 'required|integer',
            'reorder_point' => 'required|integer',
            'category_id' => 'required'
        ]);
    }

    public function store(Request $request)
    {
        $this->validation($request);
        $this->data['raw'] = new Raw();
        $this->saveRawInformation($request);

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);
        $this->data['raw'] = Raw::findorFail($request->id);
        $this->saveRawInformation($request);

        return response()->json($this->data);
    }

    public function destroy(Request $request)
    {
        $this->data['raw'] = Raw::findorFail($request->id);
        $this->data['raw']->delete();

        return response()->json($this->data);
    }

    private function saveRawInformation($request)
    {
        $this->data['raw']->name = $request->name;
        $this->data['raw']->category_id = $request->category_id;
        $this->data['raw']->quantity = $request->quantity;
        $this->data['raw']->reorder_point = $request->reorder_point;
        $this->data['raw']->save();
        $this->data['raw'] = Raw::with('category')->where('id', $this->data['raw']->id)->first();
    }
}
