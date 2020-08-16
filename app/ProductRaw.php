<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductRaw extends Model
{
    protected $table = 'product_raw';

    public function getQuantityAttribute($value)
    {
        return $value / 100;
    }
    public function setQuantityAttribute($value)
    {
        $this->attributes['quantity'] = $value * 100;
    }
}
