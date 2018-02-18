<?php

use Illuminate\Database\Seeder;

class SettinsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('settings')->insert([
            'parameter' => 'facebook',
            'data' => 'facebook.com'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'email',
            'data' => 'an.respectplus@gmail.com'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'phone_kyiv',
            'data' => '0985579292'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'phone_mts',
            'data' => '0505579292'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'phone_life',
            'data' => '0635579292'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'skype',
            'data' => 'an.respectplus@gmail.com'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'skype',
            'data' => 'an.respectplus@gmail.com'
        ]);
        DB::table('settings')->insert([
            'parameter' => 'tinyPNG',
            'data' => 'XowL11f_dDnSmqabicWf2YWRq9d9ZnZT'
        ]);


    }
}
