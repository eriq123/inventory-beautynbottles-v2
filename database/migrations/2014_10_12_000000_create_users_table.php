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

        Schema::create('bases', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('converts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('base_id');
            $table->string('name');
            $table->integer('value')->default(0);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('base_id')
                ->references('id')->on('bases')
                ->onDelete('cascade');
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('username')->unique();
            $table->integer('active')->default(1);
            $table->integer('is_admin')->default(0);
            $table->string('password');
            $table->rememberToken();

            $table->softDeletes();
            $table->timestamps();
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
            $table->unsignedBigInteger('base_id');
            $table->string('name');
            $table->integer('quantity')->default(0);
            $table->integer('reorder_point')->default(0);
            // $table->string('unit');
            $table->string('qr_code');

            $table->integer('purchase')->default(0);
            $table->integer('rts')->default(0);
            $table->integer('sold')->default(0);
            $table->integer('loss')->default(0);

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')->on('categories')
                ->onDelete('cascade');

            $table->foreign('base_id')
                ->references('id')->on('bases')
                ->onDelete('cascade');
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('qr_code')->nullable();

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

        Schema::create('logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('raw_id');
            $table->integer('quantity')->default(0);
            $table->string('status');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->foreign('raw_id')
                ->references('id')->on('raws')
                ->onDelete('cascade');
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
        Schema::dropIfExists('categories');
        Schema::dropIfExists('raws');
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_raw');
        Schema::dropIfExists('logs');
        Schema::dropIfExists('bases');
        Schema::dropIfExists('converts');
    }
}
