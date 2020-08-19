<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Raw extends Model
{
    use SoftDeletes;

    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }

    public function base()
    {
        return $this->belongsTo(Base::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity')->withTimestamps();
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
