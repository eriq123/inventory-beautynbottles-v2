<?php

namespace App\Http\Controllers\Units;

use App\Convert;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConvertController extends Controller
{
    public function view(Request $request)
    {
        $this->data['convert'] = Convert::where('base_id', $request->id)->get();
        return response()->json($this->data);
    }

    private function validation($request)
    {
        $request->validate([
            'name' => 'required',
            'value' => 'required',
        ]);
    }

    public function store(Request $request)
    {
        $this->validation($request);

        $this->data['convert'] = new Convert();
        $this->data['convert']->base_id = $request->base_id;
        $this->saveConverts($request->name, $request->value);

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);

        $this->data['convert'] = Convert::findorFail($request->id);
        $this->saveConverts($request->name, $request->value);

        return response()->json($this->data);
    }


    private function saveConverts($name, $value)
    {
        $this->data['convert']->name = $name;
        $this->data['convert']->value = $value;
        $this->data['convert']->save();
    }

    public function destroy(Request $request)
    {
        $this->data['convert'] = Convert::findorFail($request->id);
        $this->data['convert']->delete();

        return response()->json($this->data);
    }
}
