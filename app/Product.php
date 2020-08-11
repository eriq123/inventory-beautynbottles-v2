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
}
