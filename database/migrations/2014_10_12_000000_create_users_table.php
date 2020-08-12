<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        // Schema::create('roles', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->timestamps();
        // });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('username')->unique();
            $table->integer('active');
            // $table->unsignedBigInteger('role_id');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();

            $table->softDeletes();
            $table->timestamps();

            // $table->foreign('role_id')
            //     ->references('id')->on('roles')
            //     ->onDelete('cascade');
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');

            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('raws', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name');
            $table->integer('quantity');
            $table->integer('reorder_point');

            $table->integer('purchase')->default(0);
            $table->integer('rts')->default(0);
            $table->integer('sold')->default(0);
            $table->integer('loss')->default(0);

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')->on('categories')
                ->onDelete('cascade');
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');

            $table->integer('purchase')->default(0);
            $table->integer('rts')->default(0);
            $table->integer('sold')->default(0);
            $table->integer('loss')->default(0);

            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('product_raw', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('raw_id');
            $table->integer('quantity');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('product_id')
                ->references('id')->on('products')
                ->onDelete('cascade');

            $table->foreign('raw_id')
                ->references('id')->on('raws')
                ->onDelete('cascade');
        });

        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->BigInteger('item_id');
            $table->integer('quantity');
            $table->string('status');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        // Schema::dropIfExists('roles');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('raws');
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_raw');
        Schema::dropIfExists('reports');
    }
}