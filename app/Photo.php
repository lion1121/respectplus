<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    //
    protected $uploads = '/img/';

    protected $fillable = [
        'file','id'
    ];

    public function getFileAttribute($photo)
    {
        return $this->uploads . $photo;

    }
}
