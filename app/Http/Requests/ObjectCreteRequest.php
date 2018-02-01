<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ObjectCreteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'object_operation_id' => 'required',
            'object_type_id' => 'required',
            'object_place_id' => 'required',
            'title' => 'required',
            'body' => 'required',
            'flat_count' => 'max:2',
            'area' => 'max:3',
            'floor' => 'max:2',

        ];
    }
}
