<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Auth::routes();
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
//Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
//Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
//Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
//Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
//Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get('/admin', function (){
    return view('admin.index');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/admin/users', 'AdminUserController@index');

Route::group(['middleware'=>'auth'], function () {

    Route::get('/admin', function (){
        return view('admin.index');
    });
    Route::post('/removePhones', 'AdminUserController@removePhone');
    Route::post('/removeImages', 'AdminObjectController@removeImage');
    Route::post('/userLogo', 'AdminUserController@userLogo');
    Route::resource('admin/operation', 'AdminOperationController');
    Route::resource('admin/type', 'AdminTypeController');
    Route::resource('admin/place', 'AdminPlaceController');



    Route::get('/admin/objects ', 'AdminObjectController@index');
    Route::get('/admin/objects/{object}/edit ', 'AdminObjectController@edit');


});


Route::group(['middleware'=>'admin'], function () {

    Route::resource('admin/objects', 'AdminObjectController');
    Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->name('logs');
    Route::get('admin/object/settings', 'AdminObjectController@settings')->name('setting');
    Route::resource('admin/users', 'AdminUserController');

});

//Route::post('/removePhones', 'AdminUserController@removePhone');