<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('news')->insert([
            'title'=>'test news title',
            'body'=>'body news',
            'author'=> 1,
            'slug' => 'test-news-title'
        ]);
    }
}
