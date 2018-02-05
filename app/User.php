<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;


    public function isAdmin()
    {
        if ($this->role->name == 'Администратор') {
            return true;
        }
        return false;
    }


/**
 * The attributes that are mass assignable.
 *
 * @var array
 */
protected
$fillable = [
    'name', 'email', 'password', 'photo_id', 'phone_id', 'surname', 'patronymic', 'is_active', 'role_id', 'username'
];

/**
 * The attributes that should be hidden for arrays.
 *
 * @var array
 */
protected
$hidden = [
    'password', 'remember_token',
];
public
function role()
{
    return $this->belongsTo('App\Role');
}

public
function photo()
{
    return $this->belongsTo('App\Photo');
}

public
function phone()
{
    return $this->belongsToMany('App\Phone');
}

public
function getId()
{
    return $this->id;
}
}
