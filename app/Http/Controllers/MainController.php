<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
    public function index()
    {
        $this->data['route'] = json_encode("/products/raw");
        $this->data['user'] = Auth::user();
        return view('pages.products.raw', $this->data);
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
}
