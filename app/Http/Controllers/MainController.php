<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
    public function account()
    {
        $this->data['route'] = json_encode("/account");
        $this->data['user'] = Auth::user();
        return view('pages.account', $this->data);
    }

    public function index()
    {
        return redirect('/inventory/report');
    }


    public function raw()
    {
        $this->data['route'] = json_encode("/products/raw");
        $this->data['user'] = Auth::user();
        return view('pages.products.raw', $this->data);
    }

    public function assembled()
    {
        $this->data['route'] = json_encode("/products/assembled");
        $this->data['user'] = Auth::user();
        return view('pages.products.assembled', $this->data);
    }

    public function flow()
    {
        $this->data['route'] = json_encode("/inventory/flow");
        $this->data['user'] = Auth::user();
        return view('pages.inventory.flow', $this->data);
    }

    public function report()
    {
        $this->data['route'] = json_encode("/inventory/report");
        $this->data['user'] = Auth::user();
        return view('pages.inventory.report', $this->data);
    }
}
