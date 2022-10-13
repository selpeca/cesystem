<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Master;
use Inertia\Inertia;

class MasterController extends Controller
{
    public function index()
    {

        return Inertia::render('Config/Maestra/Index', [
            'padres' => Master::whereNull('parent_id')->latest()->get(),
        ]);
    }

    public function store(Request $request)

    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
        Master::create($validated);
        return redirect(route('chirps.index'));
    }
}
