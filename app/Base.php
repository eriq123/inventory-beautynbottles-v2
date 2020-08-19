<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    public function raws()
    {
        return $this->hasMany(Raws::class);
    }

    public function converts()
    {
        return $this->hasMany(Convert::class);
    }
}
