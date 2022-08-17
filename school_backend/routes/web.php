<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get("/", [UserController::class, "home"]);
Route::get('/', function () {
    return "j'ai mal a tete bouceaux";
});
Route::get("/login", function () {
    return view("login");
});
