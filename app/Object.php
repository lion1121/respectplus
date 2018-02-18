<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Object extends Model
{
    //
    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public $fillable = [
        'title','body','object_type_id','object_operation_id',
        'object_place_id','area','flat_count','is_active','is_urgent','floor','slug'
    ];
    // Get object ID in  00000X view
    public function getIdAttribute($value)
    {
        return str_pad($value, 6, '0', STR_PAD_LEFT);
    }



    public function objectoperation()
    {
        return $this->belongsTo('App\ObjectOperation', 'object_operation_id');
    }
    public function objecttype()
    {
        return $this->belongsTo('App\ObjectType', 'object_type_id');
    }
    public function objectplace()
    {
        return $this->belongsTo('App\ObjectPlace', 'object_place_id');
    }
    public function objectphotos()
    {
        return $this->hasMany('App\ObjectPhoto', 'object_id');
    }
    public function scopeSearch($query, $s  )
    {
        return $query->where('id', 'like', '%' . $s . '%');

    }
}
