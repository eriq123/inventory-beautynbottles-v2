<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Raw extends Model
{
    use SoftDeletes;

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity')->withTimestamps();
    }
}
