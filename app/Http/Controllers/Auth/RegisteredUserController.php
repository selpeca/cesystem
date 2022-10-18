<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\{User, Person, Master};
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {

        $tipo_documentos = Master::where('parent_id', 1)->get();
        $tipo_sexos      = Master::where('parent_id', 8)->get();
        

        return Inertia::render('Auth/Register', [
            'tipo_documentos' => $tipo_documentos,
            'tipo_sexos' => $tipo_sexos,
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


        $person = Person::create([
            'identificacion' => $request->identificacion,
            'tipoidentificacion_id' => $request->tipoidentificacion_id,
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'fechanacimiento' => $request->fechanacimiento,
            'sexo_id' => $request->sexo_id,
        ]);

        
        $person->user()->create([
            'name' => $request->name,
            'email' => $request->email,
            'estado_id' => 12,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($person->user));

        Auth::login($person->user);

        return redirect(RouteServiceProvider::HOME);
    }
}
