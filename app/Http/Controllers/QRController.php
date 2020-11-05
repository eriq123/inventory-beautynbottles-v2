<?php

namespace App\Http\Controllers;

use App\Product;
use App\Raw;
use Illuminate\Http\Request;

class QRController extends Controller
{
    public function raw_items()
    {
        $this->data['items'] = Raw::all();

        return view('pages.qr', $this->data);
    }

    public function products()
    {
        $this->data['items'] = Product::all();
        return view('pages.qr', $this->data);
    }
}
