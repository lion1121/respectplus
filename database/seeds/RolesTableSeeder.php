<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert([
            'name' => 'Администратор'
        ]);
        DB::table('roles')->insert([
            'name' => 'Автор'
        ]);
        DB::table('roles')->insert([
            'name' => 'Подпищик'
        ]);
    }
}
