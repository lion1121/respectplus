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
            'place'=>'днепр',
        ]);
        DB::table('object_places')->insert([
            'place'=>'Каменское',
        ]);
        DB::table('object_places')->insert([
            'place'=>'кривой рог',
        ]);
    }
}
