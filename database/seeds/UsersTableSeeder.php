<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'username'=>'lion1121',
            'name'=>'Сергей',
            'surname'=>'Байдуж',
            'patronymic'=>'Леонидович',
            'email'=>'bayduzh89@gmail.com',
            'role_id'=>'1',
            'password' => bcrypt('123')
        ]);
        DB::table('users')->insert([
            'username'=>'tanya',
            'name'=>'Татьяна',
            'surname'=>'Прошенкова',
            'patronymic'=>'Георгиевна',
            'email'=>'an.respectplus@gmail.com',
            'role_id'=>'2',
            'password' => bcrypt('123')
        ]);
        DB::table('users')->insert([
            'username'=>'test',
            'name'=>'test',
            'surname'=>'test',
            'patronymic'=>'test',
            'email'=>'test@gmail.com',
            'role_id'=>'1',
            'password' => bcrypt('123')
        ]);


    }
}
