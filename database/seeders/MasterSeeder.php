<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataMaestra=[
            ['id'=>1,'name'=>'LIS_TIPOSIDENTIFICACIONES','value'=>'TIPOSDEIDENTIFICACIONES','parent_id'=>NULL,'created_by'=>1],
            ['id'=>2,'name'=>'TI','value'=>'TAJETADEIDENTIDAD','parent_id'=>1,'created_by'=>1],
            ['id'=>3,'name'=>'CC','value'=>'CEDULADECIUDADANIA','parent_id'=>1,'created_by'=>1],
            ['id'=>4,'name'=>'NI','value'=>'NIT','parent_id'=>1,'created_by'=>1],
            ['id'=>5,'name'=>'MS','value'=>'MENORSINIDENTIFICACION','parent_id'=>1,'created_by'=>1],
            ['id'=>6,'name'=>'AS','value'=>'ADULTOSINIDENTIFICACION','parent_id'=>1,'created_by'=>1],
            ['id'=>7,'name'=>'CE','value'=>'CEDULADEEXTRANJERIA','parent_id'=>1,'created_by'=>1],
            ['id'=>8,'name'=>'LIS_TIPOSEXOS','value'=>'TIPOS DE SEXO','parent_id'=>NULL,'created_by'=>1],
            ['id'=>9,'name'=>'M','value'=>'MASCULINO','parent_id'=>8,'created_by'=>1],
            ['id'=>10,'name'=>'F','value'=>'FEMENINO','parent_id'=>8,'created_by'=>1],
            ['id'=>11,'name'=>'LIS_TIPOSESTADOS','value'=>'ESTADOS','parent_id'=>NULL,'created_by'=>1],
            ['id'=>12,'name'=>'ACT','value'=>'ACTIVO','parent_id'=>11,'created_by'=>1],
            ['id'=>13,'name'=>'INA','value'=>'INACTIVO','parent_id'=>11,'created_by'=>1],

        ];

        DB::table('masters')->insert($dataMaestra);
        
    }
}
