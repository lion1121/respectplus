<?php

namespace App\Http\Controllers;

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
        $roles = Role::all();
//        dd($roles);
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

        if ($file = $request->file('photo')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('img/users', $name);
            $photo = Photo::create(['file' => $name]);
            $input['photo_id'] = $photo->id;
        }

        $user = User::create($input);


        if ($request->phone) {

            foreach ($request->all() as $key=>$value) {
                if (preg_match('~phone~', $key)) {
                    $userPhones[] = array('user_id' => $user->id,'number' => $value);
                }
            }

//            $userPhones = [
//                [
//                    'user_id' => $user->id,
//                    'number' => $request->phone
//                ],
//                [
//                    'user_id' => $user->id,
//                    'number' => $request->extraphone0
//                ]
//            ];

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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
    }
}
