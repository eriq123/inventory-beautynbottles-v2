<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $table = 'logs';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function raw()
    {
        return $this->belongsTo(Raw::class);
    }

    public function getQuantityAttribute($value)
    {
        return $value / 100;
    }
    public function setQuantityAttribute($value)
    {
        $this->attributes['quantity'] = $value * 100;
    }
}
