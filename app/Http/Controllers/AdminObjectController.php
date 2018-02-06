<?php

namespace App\Http\Controllers;

use App\Http\Requests\ObjectCreteRequest;
use App\Object;
use App\ObjectOperation;
use App\ObjectPhoto;
use App\ObjectPlace;
use App\ObjectType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;

class AdminObjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $s = str_replace('0', '', $request->s);
        $objects = Object::latest()->search($s)->paginate(5);
//        dd($request);
        return view('admin.objects.index', compact('objects', 's'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $objectType = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperation = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlace = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();

        return view('admin.objects.create', compact('objectType', 'objectOperation', 'objectPlace'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ObjectCreteRequest $request)
    {
        //

        $input = $request->all();

        if ($request->is_urgent == 'on') {
            $input['is_urgent'] = 1;
        } else {
            $input['is_urgent'] = 0;
        }
        if ($request->is_active == 'on') {
            $input['is_active'] = 1;
        } else {
            $input['is_active'] = 0;
        }
        $object = Object::create($input);

        $log = new Logger('objectLogger');
        $log->pushHandler(new StreamHandler(storage_path() . '/logs/object_logs.log', Logger::INFO));
        $log->info("New object: $object->id has been created by user: " . mb_convert_encoding(Auth::user()->surname . ' ' . Auth::user()->name, "UTF-8"));


        $objectId = $object->id;
        $files = $request->fileMulti;

        if (isset($files)) {

            if(isset($request->optimize)){
                foreach ($files as $file) {
                    $name = time() . $file->getClientOriginalName();
                    try {
                        \Tinify\setKey("XowL11f_dDnSmqabicWf2YWRq9d9ZnZT");
                        \Tinify\validate();
                    } catch (\Tinify\Exception $e) {
                        $compressionsThisMonth = \Tinify\compressionCount();
                        Session::flash('tinypng_error',"Не удалось оптимизировать изображение. Использовано $compressionsThisMonth из 500");
                        return redirect('/admin/objects/create');
                    }
                    move_uploaded_file($file, public_path() . '/img/uncompressed/' . $name);
                    $img = Image::make(public_path() . '/img/uncompressed/' . $name);
                    $img->resize(1500, null, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $img->insert(public_path() . '/img/' . 'water_mark.png', 'bottom-right', 10, 10);

                    $img->save(public_path() . '/img/uncompressed/' . $name);
                    $source = \Tinify\fromFile(public_path() . "/img/uncompressed/" . $name);
                    $source->toFile(public_path() . "/img/objects/" . 'optimized_' . $name);
                    ObjectPhoto::insert(['file' => 'optimized_' . $name, 'object_id' => $objectId]);
                    unlink(public_path() . '/img/uncompressed/' . $name);
                }
            } else {
                foreach ($files as $file) {
                    $name = time() . $file->getClientOriginalName();
                    move_uploaded_file($file, public_path() . '/img/objects/' . $name);
                    $img = Image::make(public_path() . '/img/objects/' . $name);
                    $img->resize(1500, null, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $img->insert(public_path() . '/img/' . 'water_mark.png', 'bottom-right', 10, 10);

                    $img->save(public_path() . '/img/objects/' . $name);
                    ObjectPhoto::insert(['file' =>  $name, 'object_id' => $objectId]);
                }
            }

        }


        return redirect('/admin/objects');

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
        $object = Object::findOrFail($id);
        $objectType = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperation = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlace = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();

        return view('admin.objects.edit', compact('object', 'objectOperation', 'objectPlace', 'objectType'));
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
        $object = Object::findOrFail($id);
        $input = $request->all();

        if ($request->is_urgent == 'on') {
            $input['is_urgent'] = 1;
        } else {
            $input['is_urgent'] = 0;
        }
        if ($request->is_active == 'on') {
            $input['is_active'] = 1;
        } else {
            $input['is_active'] = 0;
        }
        $objectId = $object->id;
        $files = $request->fileMulti;
        if (isset($files)) {
            foreach ($files as $file) {
                $name = time() . $file->getClientOriginalName();
                move_uploaded_file($file, public_path() . '/img/objects/' . $name);
                ObjectPhoto::insert(['file' => $name, 'object_id' => $objectId]);
            }
        }
        $object->update($input);
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
        $object = Object::findOrFail($id);
        $object->delete();

        $log = new Logger('objectLogger');
        $log->pushHandler(new StreamHandler(storage_path() . '/logs/object_logs.log', Logger::INFO));
        $log->info("Object: $id has been deleted by user : " . mb_convert_encoding(Auth::user()->surname . ' ' . Auth::user()->name, "UTF-8"));

        return redirect('/admin/objects');

    }

    public function removeImage(Request $request)
    {
        if ($request->imageId) {
            $imageId = $request->imageId;
            $photo = ObjectPhoto::findOrFail($imageId);
            unlink(public_path() . '/img/objects/' . $photo->file);
            $photo->delete();
        }

    }

    /**Display all objects attributes (operations, types,places)
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function settings()
    {
        $operationList = ObjectOperation::all();
        $typeList = ObjectType::orderBy('type')->get();
        $placeList = ObjectPlace::all();

        return view('admin.objects.settings', compact('operationList', 'typeList', 'placeList'));
    }

}
