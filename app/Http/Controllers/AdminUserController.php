<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserEditRequest;
use App\Http\Requests\UserRequest;
use App\Phone;
use App\Photo;
use App\Role;
use App\User;
use Illuminate\Http\Request;

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

        if ($file = $request->file('photo')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('img', $name);
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
        $phones = Phone::all()->where('user_id', $user->id);
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.edit', compact('user', 'phones', 'roles'));

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

        if ($file = $request->file('photo')) {
            $removeImg = Photo::all()->where('user_id', $id)->first();
            if (isset($removeImg)) {
                unlink(public_path() . $removeImg->file);
                $removeImg->delete();
            }
            $name = time() . $file->getClientOriginalName();
            $file->move('img', $name);
            Photo::insert(['file' => $name, 'user_id' => $user->id]);
        }

        if ($request->role) {
            $input['role_id'] = $request->role;

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
//
//        Session::flash('delete_user', "The user $userForMessage has been deleted");
        return redirect('/admin/users');

    }

    public function removePhone(Request $request)
    {


        $phoneId = $request->phoneId;

        $test = Phone::findOrFail($phoneId);

        $test->delete();
        echo 'asd';
    }
}
