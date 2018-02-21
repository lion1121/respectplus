<?php

use Illuminate\Database\Seeder;

class ObjectPlacesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('object_places')->insert([
            'place'=>'Днепр',
        ]);
        DB::table('object_places')->insert([
            'place'=>'Каменское',
        ]);
        DB::table('object_places')->insert([
            'place'=>'Кривой Рог',
        ]);
    }
}
