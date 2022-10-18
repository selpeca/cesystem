import React, { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from 'react-select';

export default function Register(tipos) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        tipoidentificacion_id: '',
        identificacion: '',
        nombre: '',
        apellido: '',
        fechanacimiento: '',
        sexo_id: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('register'));
    };

    
    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>

                <div>
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
                  {tipos.tipo_documentos.map(documento => <option  key={documento.id} value={documento.id}>{documento.name}</option>)}
                  </select>
                    <InputError message={errors.tipoidentificacion_id} className="mt-2" />
                </div> 
                

                <div>
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

                 <div>
                    <InputLabel forInput="nombre" value="Nombre" />

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

                <div>
                    <InputLabel forInput="apellido" value="Apellido" />

                    <TextInput
                        type="text"
                        name="apellido"
                        value={data.apellido}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        // isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
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
                  {tipos.tipo_sexos.map(sexo => <option  key={sexo.id} value={sexo.id}>{sexo.name}</option>)}
                  </select>
                    <InputError message={errors.sexo_id} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="name" value="Name" />

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


                <div className="mt-4">
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

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
