<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    public static function boot()
    {
        parent::boot();

        self::deleting(function (Category $category) {

            foreach ($category->raws as $raws) {
                $raws->delete();
            }
        });
    }

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    public function raws()
    {
        return $this->hasMany(Raw::class);
    }
}
