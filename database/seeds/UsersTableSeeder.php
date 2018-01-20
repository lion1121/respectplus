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
            'name'=>'Sergey',
            'email'=>'bayduzh89@gmail.com',
            'role_id'=>'1',
            'is_active'=>'1',
            'password' => bcrypt('123')
        ]);
        DB::table('users')->insert([
            'name'=>'test',
            'email'=>'test@i.ua',
            'role_id'=>'1',
            'is_active'=>'1',
            'password' => bcrypt('123')
        ]);
    }
}
