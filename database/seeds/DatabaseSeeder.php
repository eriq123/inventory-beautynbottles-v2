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
                    'first_name' => 'Super',
                    'last_name' => 'Admin',
                    'username' => 'sadmin',
                    'password' => bcrypt('qweasd'),
                    'active' => 1,
                    // 'role_id' => 1,
                    // 'role_name' => 'Super Admin',
                ],
                [
                    'id' => 2,
                    'first_name' => 'Normal',
                    'last_name' => 'Admin',
                    'username' => 'admin',
                    'password' => bcrypt('qweasd'),
                    'active' => 1,
                    // 'role_id' => 2,
                    // 'role_name' => 'Admin',
                ],
                [
                    'id' => 3,
                    'first_name' => 'Eriq John',
                    'last_name' => 'Mendoza',
                    'username' => 'eriq',
                    'password' => bcrypt('qweasd'),
                    'active' => 1,
                    // 'role_id' => 2,
                    // 'role_name' => 'Admin',
                ],
            ]
        );
        // DB::table('roles')->insert(
        //     [

        //         [
        //             'id' => 1,
        //             'name' => "Super Admin",
        //         ],
        //         [
        //             'id' => 2,
        //             'name' => "Admin",
        //         ],
        //         [
        //             'id' => 3,
        //             'name' => "Employee",
        //         ],
        //     ]
        // );
    }
}
