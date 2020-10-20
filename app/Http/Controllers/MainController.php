<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
    public function user()
    {
        return response()->json(Auth::user());
    }

    public function units()
    {
        $this->data['route'] = json_encode("/units");
        return view('pages.units', $this->data);
    }

    public function account()
    {
        $this->data['route'] = json_encode("/account");
        return view('pages.account', $this->data);
    }

    public function index()
    {
        return redirect('/inventory/report');
    }


    public function raw()
    {
        $this->data['route'] = json_encode("/products/raw");
        return view('pages.products.raw', $this->data);
    }

    public function assembled()
    {
        $this->data['route'] = json_encode("/products/assembled");
        return view('pages.products.assembled', $this->data);
    }

    public function flow()
    {
        $this->data['route'] = json_encode("/inventory/flow");
        return view('pages.inventory.flow', $this->data);
    }

    public function report()
    {
        $this->data['route'] = json_encode("/inventory/report");
        return view('pages.inventory.report', $this->data);
    }
}
