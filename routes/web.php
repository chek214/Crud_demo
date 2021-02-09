<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', [MainController::class, 'index'])->name('app')->where('any', '.*');