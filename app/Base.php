<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    use SoftDeletes;

    public static function boot()
    {
        parent::boot();

        self::deleting(function (Base $base) {

            foreach ($base->converts as $converts) {
                $converts->delete();
            }

            foreach ($base->raws as $raws) {
                $raws->delete();
            }
        });
    }

    public function raws()
    {
        return $this->hasMany(Raw::class);
    }

    public function converts()
    {
        return $this->hasMany(Convert::class);
    }
}
