<?php

namespace App\Helper;



class Sanitize
{


    /**
     * @param $input
     * @return mixed
     */
    public static function CheckStr($input)
    {
        $data = filter_var($input, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        return $data;
    }
    public static function CheckInt($input)
    {
        $data = filter_var($input, FILTER_SANITIZE_NUMBER_INT);
        return $data;
    }

    public static function CheckEmail($input)
    {
        $data = filter_var($input, FILTER_SANITIZE_EMAIL);
        return $data;
    }

}