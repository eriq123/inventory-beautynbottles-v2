<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Product;
use App\Raw;
use Illuminate\Http\Request;

class FlowController extends Controller
{
    public function toggle(Request $request)
    {
        $this->data['toggle'] = $request->toggle;
        if ($request->toggle) {
            // products
            $products = Product::has('raws')->get();
            $this->data['items'] = $products->map(function ($v, $k) {
                $v->raws = $v->raws()->orderBy('name')->get();
                return $v;
            });
            $this->data['items']->all();
        } else {
            // raw
            $this->data['items'] = Raw::with('category')->get();
        }
        return response()->json($this->data);
    }
}
