<?php

use Illuminate\Database\Seeder;

class ObjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('objects')->insert([
            'title'=>'title test',
            'body'=>'body test',
            'object_type_id'=> 3,
            'object_operation_id'=> 2,
            'object_place_id'=> 1,
            'area'=> 55,
            'flat_count' => 2,
            'bathroom_count'=> 1,
        ]);
    }
}
