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
    Route::get('/user', 'MainController@user');
    Route::get('/logs', 'MainController@logs');

    Route::prefix('qr')->group(function () {
        Route::get('/raw_items', 'QRController@raw_items');
        Route::get('/products', 'QRController@products');
    });

    Route::prefix('home')->group(function () {
        Route::post('/raw', 'HomeController@raw');
        Route::post('/product', 'HomeController@product');
    });

    Route::prefix('units')->group(function () {
        Route::get('/', 'MainController@units');

        Route::post('all', 'UnitsController@all');
        Route::post('convertsByBase', 'UnitsController@getConvertByBase');

        Route::prefix('base')->group(function () {
            Route::post('view', 'Units\BaseController@view');
            Route::post('add', 'Units\BaseController@store');
            Route::post('update', 'Units\BaseController@update');
            Route::post('delete', 'Units\BaseController@destroy');
        });

        Route::prefix('convert')->group(function () {
            Route::post('view', 'Units\ConvertController@view');
            Route::post('add', 'Units\ConvertController@store');
            Route::post('update', 'Units\ConvertController@update');
            Route::post('delete', 'Units\ConvertController@destroy');
        });
    });

    Route::prefix('account')->group(function () {
        Route::get('/', 'MainController@account');
        Route::post('update', 'AccountController@update');
        Route::post('password', 'AccountController@updatePassword');
    });


    Route::prefix('products')->group(function () {
        Route::prefix('category')->group(function () {
            Route::post('view', 'Products\CategoryController@view');
            Route::post('add', 'Products\CategoryController@store');
            Route::post('update', 'Products\CategoryController@update');
            Route::post('delete', 'Products\CategoryController@destroy');
        });

        Route::prefix('raw')->group(function () {
            Route::get('/', 'MainController@raw');
            Route::post('view', 'Products\RawController@view');
            Route::post('add', 'Products\RawController@store');
            Route::post('update', 'Products\RawController@update');
            Route::post('delete', 'Products\RawController@destroy');
        });

        Route::prefix('assembled')->group(function () {
            Route::get('/', 'MainController@assembled');
            Route::post('attach', 'Products\AssembledController@attach');
            Route::post('update', 'Products\AssembledController@update');
            Route::post('detach', 'Products\AssembledController@detach');
            Route::post('view', 'Products\AssembledController@view');
        });
        Route::post('view', 'Products\ProductsController@view');
        Route::post('add', 'Products\ProductsController@store');
        Route::post('update', 'Products\ProductsController@update');
        Route::post('delete', 'Products\ProductsController@destroy');
    });

    Route::prefix('inventory')->group(function () {
        Route::post('toggle', 'Inventory\FlowController@toggle');
        Route::prefix('flow')->group(function () {
            Route::get('/', 'MainController@flow');
            Route::post('store', 'Inventory\FlowController@store');
        });
        Route::middleware(['admin'])->group(function () {
            Route::prefix('report')->group(function () {
                Route::get('/', 'MainController@report');
                Route::post('download', 'Inventory\ReportController@download');
            });
        });
    });
});
