<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    public function raws()
    {
        return $this->hasMany(Raw::class);
    }
}
