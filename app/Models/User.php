<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Facades\{Hash,Auth,Validator,DB,Mail};

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'estado_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function persona()
    {
        return $this->hasOne('App\Models\Person', 'id', 'persona_id');
    }

    public function persona_id(){
        return 'hola';
    }

    public function UserFind($id){
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
        return DB::select($sql);
    }




}
