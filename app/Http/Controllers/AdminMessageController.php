<?php

namespace App\Http\Controllers;

use App\Message;
use App\EstateObject;
use Illuminate\Http\Request;

class AdminMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $messages = Message::orderBy('id', 'desc')->get();

        return view('admin.messages.index', compact('messages'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
//        $input = $request->all();
//        if ($request->phone){
//            $input['user_phone'] = $request->phone;
//        }
//        if ($request->email){
//            $input['email'] = $request->email;
//        }
//        if ($request->text){
//            $input['text'] .= "Я $request->name ? $request->name : '', телефон($request->phone) хочу $request->operation ? $request->operation : '' $request->type ? $request->type : ''.
//             $request->text ? $request->text : ''" . $request->extratext ? $request->extratext : '';
//        }
//
//        $message = new Message();
//        $message->create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $message = Message::findOrFail($id);
        Message::where('id', $id)->update(array('is_active' => 0));
        return view('admin.messages.show', compact('message'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $message = Message::findOrFail($id);
        $message->delete();
        return redirect('/admin/messages');
    }

}
