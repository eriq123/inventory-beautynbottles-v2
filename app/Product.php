<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    public function raws()
    {
        return $this->belongsToMany(Raw::class)->withPivot('quantity')->withTimestamps();
    }

    public function getQuantityAttribute($value)
    {
        return $value / 100;
    }
    public function setQuantityAttribute($value)
    {
        $this->attributes['quantity'] = $value * 100;
    }

    public function getReorderPointAttribute($value)
    {
        return $value / 100;
    }
    public function setReorderPointAttribute($value)
    {
        $this->attributes['reorder_point'] = $value * 100;
    }

    public function getPurchaseAttribute($value)
    {
        return $value / 100;
    }
    public function setPurchaseAttribute($value)
    {
        $this->attributes['purchase'] = $value * 100;
    }

    public function getRtsAttribute($value)
    {
        return $value / 100;
    }
    public function setRtsAttribute($value)
    {
        $this->attributes['rts'] = $value * 100;
    }

    public function getSoldAttribute($value)
    {
        return $value / 100;
    }
    public function setSoldAttribute($value)
    {
        $this->attributes['sold'] = $value * 100;
    }

    public function getLossAttribute($value)
    {
        return $value / 100;
    }
    public function setLossAttribute($value)
    {
        $this->attributes['loss'] = $value * 100;
    }
}
