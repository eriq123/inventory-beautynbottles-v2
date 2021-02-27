<?php

namespace App\Http\Controllers;

use App\Product;
use App\Raw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QRController extends Controller
{
    private $chunk = 20;
    private $column = ['id', 'name', 'qr_code'];

    public function raw_items()
    {
        $this->data['items'] = Raw::with('category')->select('category_id')->distinct()->get();
        foreach ($this->data['items'] as $value) {
            $value->items = Raw::where('category_id', $value->category_id)
                ->orderBy('name')
                ->get($this->column)
                ->chunk($this->chunk);
        }

        return view('pages.qr', $this->data);
    }

    public function products()
    {
        $this->data['items'] = Product::with('category')->select('category_id')->distinct()->get();
        foreach ($this->data['items'] as $value) {
            $value->items = Product::where('category_id', $value->category_id)
                ->orderBy('name')
                ->get($this->column)
                ->chunk($this->chunk);
        }

        return view('pages.qr', $this->data);
    }
}
