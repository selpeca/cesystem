<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    static $rules = [
		'identificacion' => 'required',
		'fechanacimiento' => 'required',
		'nombre' => 'required',
		'apellido' => 'required',
		'tipoidentificacion_id' => 'required',
		'sexo_id' => 'required',
    ];


    protected $casts = [
		'fechanacimiento'  => 'date:Y-m-d',
	];

    protected $fillable = ['identificacion','lugarexpedicion','fechaexpedicion','direccion','telefono','telefonomovil','telefonowhatsapp','sendsms','email','sendemail','fechanacimiento','nombre','segundonombre','apellido','segundoapellido','foto','firma','pais_id','departamento_id','ciudad_id','zona_id','barrio','tipoidentificacion_id','sexo_id','ocupacion_id','discapacidad_id','observaciones','created_by','updated_by','deleted_by'];

    public function getNombreCompletoAttribute()
    {
        return "{$this->nombre} {$this->segundonombre} {$this->apellido} {$this->segundoapellido}";
    }

    public function getNombresAttribute()
    {
        return "{$this->nombre} {$this->segundonombre}";
    }

    public function getApellidosAttribute()
    {
        return "{$this->apellido} {$this->segundoapellido}";
    }
    
    public function getEdadAttribute()
    {
        return Carbon::parse($this->fechanacimiento)->diff(Carbon::now())->format('%y años, %m meses y %d dias');
    }

    public function getEdadAniosAttribute()
    {
        return Carbon::parse($this->fechanacimiento)->diff(Carbon::now())->format('%y');
    }
    
    public function getEdadMesesAttribute()
    {
        $actual = Carbon::now();
        return $actual->diffInMonths($this->fechanacimiento);
    }


    public function user()
    {
        return $this->hasOne('App\Models\User', 'persona_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function tipoidentificacion()
    {
        return $this->hasOne('App\Models\Master', 'id', 'tipoidentificacion_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function sexo()
    {
        return $this->hasOne('App\Models\Master', 'id', 'sexo_id');
    }

    public function ocupacion()
    {
        return $this->hasOne('App\Models\Master', 'id', 'ocupacion_id');
    }

    public function departamento()
    {
        return $this->hasOne('App\Models\Master', 'id', 'departamento_id');
    }

    public function ciudad()
    {
        return $this->hasOne('App\Models\Master', 'id', 'ciudad_id');
    }

}
