<?php

namespace App\Http\Controllers;

use App\Object;
use App\ObjectType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AdminTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $input = $request->all();

        $input['type'] = $request->type;
        ObjectType::create($input);

        return redirect()->back();
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
        $type = ObjectType::findOrFail($id);
        $input = $request->all();

        $type->update($input);
        return redirect()->back();
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
        $type = ObjectType::findOrFail($id);
        $usageObjects = Object::where('object_type_id', $id)->first();

        try {
            if (!is_null($usageObjects)) {
                throw new \Exception("Атрибут $type->type имеет взаимосвязи с объектами");

            } else {
                $type->delete();
                return redirect()->back();
            }
        }
        catch (\Exception $e) {
            $error =   $e->getMessage();
            Session::flash('remove_attr_type',"$error");
            return redirect()->back();
        }
    }
}
