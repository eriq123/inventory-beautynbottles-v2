<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Convert extends Model
{
    public function getValueAttribute($value)
    {
        return $value / 100;
    }
    public function setValueAttribute($value)
    {
        $this->attributes['value'] = $value * 100;
    }
}
