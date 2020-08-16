<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $table = 'logs';

    public function getQuantityAttribute($value)
    {
        return $value / 100;
    }
    public function setQuantityAttribute($value)
    {
        $this->attributes['quantity'] = $value * 100;
    }
}
