<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::withoutMiddleware(['auth', 'verified'])->group(function () {
    Route::get('/user', function (Request $request) {return $request->user();})->name('api.user');
    Route::get('/maestra/{parent_id}','App\Http\Controllers\Api\MasterController@index')->name('api.maestra.index');
    Route::post('/maestra','App\Http\Controllers\Api\MasterController@store')->name('api.maestra.store');
});
