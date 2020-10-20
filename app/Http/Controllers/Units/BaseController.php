<?php

namespace App\Http\Controllers\Units;

use App\Base;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function view(Request $request)
    {
        $this->data['base'] = Base::all();
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

        $this->data['base'] = new Base();
        $this->saveBaseName($request->name);

        return response()->json($this->data);
    }

    public function update(Request $request)
    {
        $this->validation($request);

        $this->data['base'] = Base::findorFail($request->id);
        $this->saveBaseName($request->name);

        return response()->json($this->data);
    }


    private function saveBaseName($name)
    {
        $this->data['base']->name = $name;
        $this->data['base']->save();
    }

    public function destroy(Request $request)
    {
        $this->data['base'] = Base::findorFail($request->id);
        $this->data['base']->delete();

        return response()->json($this->data);
    }
}
