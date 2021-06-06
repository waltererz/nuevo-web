<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdvisorController;

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
Route::middleware('auth:sanctum')->post('/auth/signout', [AuthController::class, 'signout']);
Route::middleware('auth:sanctum')->post('/auth/check', [AuthController::class, 'check']);

Route::middleware('auth:sanctum')->post('/advisor/list', [AdvisorController::class, 'list']);
