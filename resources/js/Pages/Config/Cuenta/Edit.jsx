import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState, useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useNavigate, useParams } from "react-router-dom";
import GuestLayout from '@/Layouts/GuestLayout';
import TextInput from '@/Components/TextInput';
import axios from "axios";
import '../../../../css/user.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGears,
    faUser
} from '@fortawesome/free-solid-svg-icons'


export default function Edit({ auth, persona, tipo_documentos, tipo_sexos, tipo_estados }) {
    // const navigate = useNavigate() 

    const [disabled, setDisabled] = useState(false);
    
    const { data, setData, put, processing, errors, reset, progress } = useForm({
        id:persona.user_id,
        identificacion: persona.identificacion,
        tipoidentificacion_id:persona.tipoidentificacion_id,
        telefonomovil: persona.telefonomovil,
        fechanacimiento: persona.fechanacimiento,
        nombre: persona.nombre,
        segundonombre: persona.segundonombre,
        apellido: persona.apellido,
        segundoapellido: persona.segundoapellido,
        sexo_id: persona.sexo_id,
        name: persona.user_name,
        email: persona.user_email,
        estado_id: persona.user_estadoid,
    });

    

     const submit = async (e) => {
        e.preventDefault()

        await axios.put(route('usuario.update', data.id),{
            identificacion: data.identificacion,
            tipoidentificacion_id: data.tipoidentificacion_id,
            telefonomovil: data.telefonomovil,
            fechanacimiento: data.fechanacimiento,
            nombre: data.nombre,
            segundonombre: data.segundonombre,
            apellido: data.apellido,
            segundoapellido: data.segundoapellido,
            sexo_id: data.sexo_id,
            name: data.name,
            email: data.email,
            estado_id: data.estado_id,})
        };



    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    
    return (
        
        <AuthenticatedLayout auth={auth}
        header={
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href={route('generales')} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Generales
                        </Link>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <Link href={route('usuario.show', persona.user_id)} className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Cuenta
                            </Link>
                        </div>
                    </li>
                </ol>
            </nav>
        }>
             <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-3/4 mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <Head title="Editar Usuario" />

            <form onSubmit={submit}>
            <label className='mt-4'> <b> Datos Personales </b></label>
                <div className='columnas mt-4 sm:justify-center items-center'>
                <div className='columna mr-2'>
                    <InputLabel forInput="tipoidentificacion_id" value="Tipo Identificacion" />
                    <select
                        name="tipoidentificacion_id"
                        id="tipoidentificacion_id"
                        value={data.tipoidentificacion_id}
                        className="mt-1 block w-full"
                        autoComplete="tipoidentificacion_id"
                        onChange={(e) => onHandleChange(e)}
                        required
                    >
                  <option value="-----">----</option>
                  {tipo_documentos.map(documento => <option  key={documento.id} value={documento.id}>{documento.name}</option>)}
                  </select>
                    <InputError message={errors.tipoidentificacion_id} className="mt-2" />
                </div> 
                <div className='columna mr-2'>
                    <InputLabel forInput="identificacion" value="Identificacion" />
                    <TextInput
                        type="number"
                        name="identificacion"
                        value={data.identificacion}
                        className="mt-1 block w-full"
                        autoComplete="identificacion"
                        // isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.identificacion} className="mt-2" />
                </div>
                <div className='columna'>
                    <InputLabel  forInput="nombre" value="Nombre" />
                    <TextInput
                        type="text"
                        name="nombre"
                        value={data.nombre}
                        className="mt-1 block w-full"
                        autoComplete="nombre"
                        // isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.nombre} className="mt-2" />
                </div>
                </div>
                <div className='columnas mt-4 sm:justify-center items-center'>
                <div className='columna'>
                    <InputLabel forInput="segundonombre" value="Segundo Nombre" />
                    <TextInput
                        type="text"
                        name="segundonombre"
                        value={data.segundonombre}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.segundonombre} className="mt-2" />
                </div>
                <div className='columna ml-2'>
                    <InputLabel forInput="apellido" value="Apellido" />
                    <TextInput
                        type="text"
                        name="apellido"
                        value={data.apellido}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className='columna ml-2'>
                    <InputLabel forInput="segundoapellido" value="Segundo Apellido" />
                    <TextInput
                        type="text"
                        name="segundoapellido"
                        value={data.segundoapellido}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                </div>
                <div className='columnas mt-4 sm:justify-center items-center'>
                <div className='columna mr-2'>
                    <InputLabel forInput="telefonomovil" value="Telefono Movil" />
                    <TextInput
                        type="number"
                        name="telefonomovil"
                        value={data.telefonomovil}
                        className="mt-1 block w-full"
                        autoComplete="identificacion"
                        // isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.identificacion} className="mt-2" />
                </div>
                <div className='columna mr-2'>
                <div >
                     <InputLabel forInput="fechanacimiento" value="Fecha de nacimiento" />
                     <input type="date"
                     name="fechanacimiento"
                     id="fechanacimiento"
                     className="mt-1 block w-full"
                     autoComplete="fechanacimiento"
                     value={data.fechanacimiento}
                     onChange={(e) => onHandleChange(e)}
                     required
                     ></input>

                </div>
                </div>
                <div className='columna'>
                <div>
                    <InputLabel forInput="sexo_id" value="Sexo" />
                    <select
                        name="sexo_id"
                        id="sexo_id"
                        value={data.sexo_id}
                        className="mt-1 block w-full"
                        autoComplete="sexo_id"
                        onChange={(e) => onHandleChange(e)}
                        required
                    >
                  <option value=""></option>
                  {tipo_sexos.map(sexo => <option  key={sexo.id} value={sexo.id}>{sexo.name}</option>)}
                  </select>
                    <InputError message={errors.sexo_id} className="mt-2" />
                </div>
                </div>
                </div>
                <br/>
                <label className='mt-4'> <b> Datos Usuario </b></label>
                <div className='columnas mt-4 sm:justify-center items-center'> 
                <div className='columna mr-2 '>
                    <InputLabel forInput="name" value="Usuario" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="columna mr-2 ">
                    <InputLabel forInput="email" value="Email" />
                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className='columna'>
                    <InputLabel forInput="estado_id" value="Estado" />
                    <select
                        name="estado_id"
                        id="estado_id"
                        value={data.estado_id}
                        className="mt-1 block w-full"
                        autoComplete="estado_id"
                        onChange={(e) => onHandleChange(e)}
                        required
                    >
                  <option value="-----">----</option>
                  {tipo_estados.map(estado => <option  key={estado.id} value={estado.id}>{estado.name}</option>)}
                  </select>
                    <InputError message={errors.estado_id} className="mt-2" />
                </div> 
                </div>
                
                {/* <div className='columnas mt-4'> 
                <div className='columna mr-2'>
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        // required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="columna">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />
                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        // required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                </div> */}

                <div className="flex items-center justify-end mt-4">

                    <PrimaryButton className="ml-4" processing={processing}>
                        Guardar
                    </PrimaryButton>
                </div>
            </form>
            </div>
            </div>
                
            {/* </GuestLayout> */}
        </AuthenticatedLayout>
    );
}