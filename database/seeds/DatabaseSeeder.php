<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ObjectsTableSeeder::class);
        $this->call(ObjectOperationsTableSeeder::class);
        $this->call(ObjectTypesTableSeeder::class);
        $this->call(ObjectPlacesTableSeeder::class);
        $this->call(NewsTableSeeder::class);
        $this->call(SettinsTableSeeder::class);
    }
}
