<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
    $credentials = $request->only('email', 'password');
    if (Auth::attempt($credentials)) {
        return response()->json(['result' => Auth::user()]);
    } else {
        return response()->json(['result' => false]);
    }
});

Route::post('/auth/signout', function (Request $request) {
    Auth::logout();
    return response()->json(['result' => !Auth::check()]);
});

Route::post('/auth/check', function (Request $request) {
    if (Auth::check()) {
        return response()->json(['result' => Auth::user()]);
    } else {
        return response()->json(['result' => false]);
    }
});
