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
//        dd($request->all());

        if ($request->ajax()) {

            $input['user_phone'] = Sanitize::CheckInt($request->userPhone);

            if ($request->userEmail !== '') {

                $input['email'] = Sanitize::CheckEmail($request->userEmail);
            }

            if ($request->userName  !== '') {
                $input['name'] = Sanitize::CheckStr($request->userName);
            }
            if ($request->objOperation !== '') {
                $typeOperation = Sanitize::CheckStr($request->objOperation);
            }
            if ($request->objType !== '') {
                $typeObject = Sanitize::CheckStr($request->objType);
            }
            if ($request->extraInfo !== '') {
                $extratext = Sanitize::CheckStr($request->extraInfo);
            }
            $input['text'] = 'Меня зовут ' . $input['name'] . ' хочу ' . $typeOperation . ' ' . $typeObject
                . ".  " . $extratext;

            $message = new Message();

            $message->create($input);
            echo json_decode('Ваше сообщение успешно отправлено');
        }


    }
}
