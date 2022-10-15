import React, { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from 'react-select';

export default function Register(tipos) {

    // console.log(tipo_documentos);
    // console.log(tipos.tipo_documentos);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        tipo_identificacion: '',
    });

    
    const [date, setDate] = useState();

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

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    
    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
            {/* <Select value={data.tipo_identificacion} options={options} /> */}

                <div>
                    <InputLabel forInput="tipo_identificacion" value="Tipo Identificacion" />
                    <select
                        name="tipo_identificacion"
                        id="tipo_identificacion"
                        value={data.tipo_identificacion}
                        className="mt-1 block w-full"
                        autoComplete="tipo_identificacion"
                        onChange={(e) => onHandleChange(e)}
                        required
                    >
                  <option value="-----">----</option>
                  {tipos.tipo_documentos.map(documento => <option  key={documento.id} value={documento.id}>{documento.name}</option>)}
                  </select>
                    <InputError message={errors.tipo_identificacion} className="mt-2" />
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
                       
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                     <InputLabel forInput="fecha_nacimiento" value="Fecha de nacimiento" />
                     <input type="date"
                     name="fecha_nacimiento"
                     className="mt-1 block w-full"
                     autoComplete="fecha_nacimiento"
                     value={data.fecha}
                     handleChange={onHandleChange}
                    
                     ></input>
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
                    
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="tipo_sexo" value="Sexo" />
                     {/* <Select options={options} />   */}
                    <select
                        name="tipo_sexo"
                        id="tipo_sexo"
                        value={data.tipo_identificacion}
                        className="mt-1 block w-full"
                        autoComplete="identificacion"
                        // isFocused={true}
                        // handleChange={onHandleChange}
                        
                    >
                  <option value="-----">----</option>
                  {tipos.tipo_sexos.map(profile => <option  key={profile.id} value={profile.id}>{profile.name}</option>)}
                  </select>
                    <InputError message={errors.tipo_identificacion} className="mt-2" />
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
