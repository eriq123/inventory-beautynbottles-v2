<?php

namespace App\Http\Controllers;

use App\Product;
use App\Raw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QRController extends Controller
{

    private function getUser()
    {
        $this->data['user'] = json_encode(Auth::user());
    }

    public function raw_items()
    {
        $this->getUser();
        $this->data['route'] = json_encode("/qr/raw_items");
        $items = Raw::all();
        $this->data['items'] = $items->chunk(24);

        return view('pages.qr', $this->data);
    }

    public function products()
    {
        $this->getUser();
        $this->data['route'] = json_encode("/qr/products");
        $items = Product::all();
        $this->data['items'] = $items->chunk(24);

        return view('pages.qr', $this->data);
    }
}
