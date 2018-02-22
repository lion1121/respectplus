<?php

use Illuminate\Database\Seeder;

class ObjectTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('object_types')->insert([
            'type'=>'1-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'2-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'3-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'4-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'5-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'6-к квартира',
        ]);
        DB::table('object_types')->insert([
            'type'=>'дом',
        ]);
        DB::table('object_types')->insert([
            'type'=>'гараж',
        ]);
        DB::table('object_types')->insert([
            'type'=>'участок',
        ]);
        DB::table('object_types')->insert([
            'type'=>'ком. недвижимость',
        ]);
    }
}
