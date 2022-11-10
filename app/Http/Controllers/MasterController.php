<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\{
    Request,
    Redirect
};
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
    
    public function store()
    {
        $validated = $request->validate([
            'name' => ['required','max:255'],
            'value' => ['max:255'],
            'is_active' => ['boolean'],
        ]);
        $maestra = Master::create($validated);
        return Redirect::back()->with('success', 'Organization created.');
    }

    public function show($id)
    {
        return Master::where('parent_id', $id)->latest()->get();
    }

    public function update(Master $maestra){
        
        $maestra->update(
                Request::validate([
                'name' => ['required','max:255'],
                'value' => ['max:255'],
                'is_active' => ['boolean'],
            ])
        );
        return Redirect::back()->with('success', 'Organization created.');
    }
}
