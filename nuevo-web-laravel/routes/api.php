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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::post('/auth/signin', function (Request $request) {
    if (auth()->attempt([
        'email' => $request->email,
        'password' => $request->password,
    ])) {
        return response()->json(['result' => auth()->user()]);
    } else {
        return response()->json(['result' => false]);
    }
});

Route::post('/auth/signout', function (Request $request) {
    auth()->logout();
    return response()->json(['result' => !auth()->check()]);
});

Route::post('/auth/check', function (Request $request) {
    if (auth()->check()) {
        return response()->json(['result' => auth()->user()]);
    } else {
        return response()->json(['result' => false]);
    }
});