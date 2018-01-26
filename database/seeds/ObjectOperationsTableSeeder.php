<?php

use Illuminate\Database\Seeder;

class ObjectOperationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('object_operations')->insert([
            'operation'=>'продажа',
        ]);
        DB::table('object_operations')->insert([
            'operation'=>'аренда',
        ]);
        DB::table('object_operations')->insert([
            'operation'=>'покупка',
        ]);
    }
}
