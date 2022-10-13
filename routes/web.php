<?php
use App\Http\Controllers\{
    MasterController
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::withoutMiddleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');
    Route::get('/generales', function () {return Inertia::render('Config/Index');})->name('generales');
    Route::resource('master', MasterController::class)->only(['index', 'store']);
});

require __DIR__.'/auth.php';
