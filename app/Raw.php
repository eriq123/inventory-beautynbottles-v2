<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raw extends Model
{

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
