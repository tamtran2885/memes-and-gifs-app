<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MemeController;
use App\Http\Controllers\CategoryController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// User
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('user/{userId}', [UserController::class, 'getUser']);

// Category
Route::post('addCategory', [CategoryController::class, 'addCategory']);
Route::get('getAllCategories', [CategoryController::class, 'getAllCategories']);

// Meme
Route::post('addMeme', [MemeController::class, 'addMeme']);
Route::get('getAllMemes', [MemeController::class, 'getAllMemes']);
Route::get('getMemesByEntertainments', [MemeController::class, 'getMemesByEntertainments']);
Route::get('getMemesBySports', [MemeController::class, 'getMemesBySports']);
Route::get('getMemesByReactions', [MemeController::class, 'getMemesByReactions']);
Route::get('getMemesByUser/{userId}', [MemeController::class, 'getMemesByUser']);
Route::get('getMemeById/{id}', [MemeController::class, 'getMemeById']);

// search all types of memes
Route::get('search/{key}', [MemeController::class, 'searchMemes']);


