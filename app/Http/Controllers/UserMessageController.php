<?php

namespace App\Http\Controllers;

use App\Helper\Sanitize;
use App\Message;
use Illuminate\Http\Request;

class UserMessageController extends Controller
{
    /**
     * Call from JS AJAX main.js
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeMessage(Request $request)
    {
        //
        if ($request->ajax()) {

            $input['user_phone'] = Sanitize::CheckInt($request->phone);

            if ($request->email !== '') {

                $input['email'] = Sanitize::CheckEmail($request->email);
            }

            if ($request->name  !== '') {
                $input['name'] = Sanitize::CheckStr($request->name);
            }
            if ($request->typeOperation) {
                $typeOpeartion = Sanitize::CheckStr($request->typeOperation);
            }
            if ($request->typeObject) {
                $typeObject = Sanitize::CheckStr($request->typeObject);
            }
            if ($request->extratext !== '') {
                $extratext = Sanitize::CheckStr($request->extratext);
            }
            $input['text'] = 'Меня зовут ' . $input['name'] . ' хочу ' . $typeOpeartion . ' ' . $typeObject
                . ".  " . $extratext;


            $message = new Message();

            $message->create($input);
            echo 'Ваше сообщение успешно отправлено';
        }

    }
}
