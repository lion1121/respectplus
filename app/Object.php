<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Object extends Model
{
    //
    public function getIdAttribute($value)
    {
        return str_pad($value, 6, '0', STR_PAD_LEFT);
    }
}
