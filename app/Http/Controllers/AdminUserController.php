<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserEditRequest;
use App\Http\Requests\UserRequest;
use App\Phone;
use App\Photo;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = User::all();

        return view('admin.users.index', compact('users'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        //

        $input = $request->except('password');
        $input['name'] = $request->name;
        $input['surname'] = $request->surname;
        $input['patronymic'] = $request->patronymic;
        $input['email'] = $request->email;
        $input['role_id'] = $request->role;
        $input['username'] = $request->username;
        $input['password'] = bcrypt($request->password);

        $user = User::create($input);

        if ($request->file('croppedImage')) {
            $file = $request->file('croppedImage');
            $name = time() . $file->getClientOriginalName() . '.png';
            Photo::insert(['file' => $name, 'user_id' => $user->id]);
        }


        if ($request->phone) {

            foreach ($request->all() as $key => $value) {
                if (preg_match('~phone~', $key)) {
                    $userPhones[] = array('user_id' => $user->id, 'number' => $value);
                }
            }

            Phone::insert($userPhones);


        }

        return redirect('admin/users');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::findOrFail($id);
        $phones = Phone::where('user_id', $user->id)->get();
        $roles = Role::pluck('name', 'id')->all();
        $userPhoto = Photo::all()->where('user_id', $user->id)->first();
        return view('admin.users.edit', compact('user', 'phones', 'roles', 'userPhoto'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserEditRequest $request, $id)
    {
        //
        $user = User::findOrFail($id);
        if (trim($request->password) == '') {
            $input = $request->except('password');
        } else {
            $input = $request->all();
            $input['password'] = bcrypt($request->password);
        }

        if ($request->role) {
            $input['role_id'] = $request->role;
        }
        if (isset($request->newphone1)) {
            $userExtraPhone = array('user_id' => $user->id, 'number' => $request->newphone1);
            Phone::insert($userExtraPhone);

        }

        if (isset($request->newphone2)) {
            $userExtraPhone = array('user_id' => $user->id, 'number' => $request->newphone2);
            Phone::insert($userExtraPhone);
        }

        if ($request->phone) {
            $updateMainPhone = Phone::all()->where('user_id', $user->id)->first();
            $updateMainPhone->number = $request->phone;
            $updateMainPhone->update();
        }
        if ($request->extraphone1) {
            $updateMainPhone = Phone::all()->where('user_id', $user->id)->get(1);
            $updateMainPhone->number = $request->extraphone1;
            $updateMainPhone->update();
        }
        if ($request->extraphone2) {
            $updateMainPhone = Phone::all()->where('user_id', $user->id)->get(2);
            $updateMainPhone->number = $request->extraphone2;
            $updateMainPhone->update();
        }

        $user->update($input);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $userForMessage = User::findOrFail($id)->name;
        $user = User::findOrFail($id);
        /*
         * Delete users photo
         * путь к папке images автоматически вставляется с помошью
         * геттера модели Photo
         *
         * */
        if ($user->photo) {
            unlink(public_path() . $user->photo->file);

        }
        $user->delete();
        return redirect('/admin/users');

    }

    /** Remove phone call from AJSX
     * @param Request $request
     */
    public function removePhone(Request $request)
    {

        if ($request->ajax()) {
            $phoneId = $request->phoneId;
            $test = Phone::findOrFail($phoneId);
            $test->delete();
        }

    }

    /** GET data from AJAX (username and filename)
     *
     * @param Request $request
     */
    public function userLogo(Request $request)
    {
        if ($request->username) {
            $username = $request->username;
            $user = User::all()->where('username', $username)->first();
            $userPhoto = Photo::all()->where('user_id', $user->id)->first();
            // if userphoto doesn't exist save file and add to db
            if (is_null($userPhoto)) {
                $file = $request->file('croppedImage');
                $name = time() . $file->getClientOriginalName() . '.png';
                $file->move('img', $name);
                Photo::insert(['file' => $name, 'user_id' => $user->id]);
            } else {
                //remove file from /img and rewrite in folder and db
                unlink(public_path() . $userPhoto->file);
                $userPhoto->delete();
                $file = $request->file('croppedImage');
                $name = time() . $file->getClientOriginalName() . '.png';
                $file->move('img', $name);
                Photo::insert(['file' => $name, 'user_id' => $user->id]);
            }
        }

    }
}
