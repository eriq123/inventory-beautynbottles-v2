<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')->insert(
            [
                [
                    'id' => 1,
                    'first_name' => 'Normal',
                    'last_name' => 'Admin',
                    'username' => 'admin',
                    'password' => bcrypt('qweasd'),
                    'active' => 1,
                    'is_admin' => 1,
                ],
                [
                    'id' => 2,
                    'first_name' => 'Eriq John',
                    'last_name' => 'Mendoza',
                    'username' => 'eriq',
                    'password' => bcrypt('qweasd'),
                    'active' => 1,
                    'is_admin' => 0,
                ],
            ]
        );
        DB::table('bases')->insert(
            [

                [
                    'id' => 1,
                    'name' => "ml",
                ],
                [
                    'id' => 2,
                    'name' => "g",
                ],
            ]
        );

        DB::table('converts')->insert(
            [

                [
                    'id' => 1,
                    'base_id' => 1,
                    'name' => "ml",
                    'value' => 100,
                ],
                [
                    'id' => 2,
                    'base_id' => 1,
                    'name' => "l",
                    'value' => 100000,
                ],
                [
                    'id' => 3,
                    'base_id' => 2,
                    'name' => "g",
                    'value' => 100,
                ],
                [
                    'id' => 4,
                    'base_id' => 2,
                    'name' => "kg",
                    'value' => 100000,
                ],
            ]
        );
    }
}
