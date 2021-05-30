<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\AuthController;

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

Route::post('/auth/signin', [AuthController::class, 'signin']);
Route::middleware('auth:sanctum')->post('/auth/check', [AuthController::class, 'check']);
Route::middleware('auth:sanctum')->post('/auth/signout', [AuthController::class, 'signout']);
