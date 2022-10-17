<?php

namespace App\Http\Controllers;
use App\Models\{User, Person, Master};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\{Hash,Auth,Validator,DB,Mail};


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return Inertia::render('Config/Cuenta/Index', [
            'usuario' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $sql = "SELECT DISTINCTROW
        p.*,
        u.`name` as 'user_name',
        u.email as 'user_email',
        u.persona_id as 'user_personaid',
        u.id as 'user_id'
        FROM  users u
        INNER JOIN  persons p ON (u.persona_id = p.id)
        INNER JOIN  masters ti ON (p.tipoidentificacion_id = ti.id)
        INNER JOIN  masters sx ON (p.sexo_id = sx.id)
        WHERE u.id = '$id'";

        $persona =  DB::select($sql);
        $tipo_documentos = Master::where('parent_id', 1)->get();
        $tipo_sexos      = Master::where('parent_id', 8)->get();

        // return $user;
        return Inertia::render('Config/Cuenta/Edit', [
            'persona' => $persona[0],
            'tipo_documentos' => $tipo_documentos,
            'tipo_sexos' => $tipo_sexos,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user =  User::find($id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        $user->persona()->update([
            'identificacion' => $request->identificacion,
            'tipoidentificacion_id' => $request->tipoidentificacion_id,
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'fechanacimiento' => $request->fechanacimiento,
            'sexo_id' => $request->sexo_id,
        ]);

        // return json_encode($user);

        return Inertia::render('Config/Cuenta/Index', [
            'usuario' => $user,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
