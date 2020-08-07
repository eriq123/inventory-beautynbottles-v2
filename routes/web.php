<?php

use Illuminate\Support\Facades\Route;


// authentication routes
Route::get('/login', 'AuthController@loginView')->name('login');
Route::get('/register', 'AuthController@registerView')->name('register');

Route::post('login', 'AuthController@login')->name('login.post');
Route::post('register', 'AuthController@register')->name('register.post');
Route::get('logout', 'AuthController@logout')->name('logout');


Route::middleware(['auth', 'web'])->group(function () {

    Route::get('/', 'MainController@index');

    Route::prefix('products')->group(function () {

        Route::prefix('category')->group(function () {
            Route::post('add', 'Products\CategoryController@store');
            Route::post('search', 'Products\CategoryController@search'); //api
            Route::post('update', 'Products\CategoryController@update');
            Route::post('delete', 'Products\CategoryController@destroy');
        });

        Route::prefix('raw')->group(function () {
            Route::get('/', 'MainController@raw');
            Route::post('view', 'Products\RawController@view'); //api
            Route::post('add', 'Products\RawController@store');
            Route::post('update', 'Products\RawController@update');
            Route::post('delete', 'Products\RawController@destroy');
        });

        Route::prefix('assembled')->group(function () {
            Route::get('/', 'MainController@assembled');
        });
        Route::post('search', 'Products\ProductsController@search'); //api
        Route::post('add', 'Products\ProductsController@store');
        Route::post('update', 'Products\ProductsController@update');
        Route::post('delete', 'Products\ProductsController@destroy');
    });
});
