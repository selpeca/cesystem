<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            
            $table->string('identificacion',50)->unique()->comment('Identificacion');
            $table->string('lugarexpedicion',50)->comment('lugar de expedición')->nullable();
            $table->date('fechaexpedicion')->comment('Fehca de expedición')->nullable();
  
            $table->string('direccion',150)->comment('Direccion')->nullable();
            $table->string('telefono',50)->comment('Telefono fijo')->nullable();
            $table->string('telefonomovil',50)->comment('Telefono movil')->nullable();
            $table->boolean('sendsms')->default(false)->comment('Enviar sms')->nullable();
            $table->string('email',50)->comment('Email')->nullable();
            $table->boolean('sendemail')->default(false)->comment('Enviar email')->nullable();
            $table->date('fechanacimiento')->comment('Fecha nacmiento');
            
            $table->string('nombre',50)->comment('nombre');
            $table->string('segundonombre',50)->nullable()->comment('segundo nombre');
            $table->string('apellido',50)->comment('apellido');
            $table->string('segundoapellido',50)->nullable()->comment('segundo apellido');

            $table->text('foto')->nullable();
            $table->text('firma')->nullable();
            
            $table->unsignedBigInteger('pais_id')->nullable();
            $table->unsignedBigInteger('departamento_id')->nullable();
            $table->unsignedBigInteger('ciudad_id')->nullable();
            $table->unsignedBigInteger('zona_id')->nullable();
            $table->string('barrio',100)->nullable();
            
            $table->unsignedBigInteger('tipoidentificacion_id');
            $table->unsignedBigInteger('sexo_id');
            $table->unsignedBigInteger('estadocivil_id')->nullable();
            $table->unsignedBigInteger('niveleducacion_id')->nullable();

            $table->unsignedBigInteger('ocupacion_id')->nullable();
            $table->text('observaciones')->nullable();
            

            $table->timestamp('created_at', $precision = 0)->useCurrent();
            $table->unsignedBigInteger('created_by')->default(1);
            $table->timestamp('updated_at', $precision = 0)->useCurrentOnUpdate()->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at', $precision = 0)->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();

            $table->foreign('pais_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 

            $table->foreign('departamento_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade');  

            $table->foreign('ciudad_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 

            $table->foreign('zona_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 


            $table->foreign('tipoidentificacion_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 

            $table->foreign('estadocivil_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade');  

            $table->foreign('niveleducacion_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 

            $table->foreign('ocupacion_id')->references('id')
                                        ->on('masters')
                                        ->onDelete('cascade')
                                        ->onUpdate('cascade'); 

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
};
