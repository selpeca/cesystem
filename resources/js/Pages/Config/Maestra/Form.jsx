import React, { useEffect } from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import Textarea from '@/Components/Textarea';
import Checkbox from '@/Components/Checkbox';
import Select from 'react-select'

function Form({parent, padres, verListado, setShowModal, datos}) {
    const options = padres.map((padre) => (
        {
            value : padre.id,
            label : padre.name
        }
    ));
    const { data, setData, post, put, processing, errors, reset, progress } = useForm(datos);
    
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }
    useEffect(() => {
        reset()
    }, [])

    const submit = (e) => {
        e.preventDefault();
        if (!data.id) {
            post(route('maestra.store'), data,{
                preserveScroll: true,
                onSuccess: () => setShowModal(false) && verListado(parent),
                onError: (errors) => {
                    console.log(errors);
                }
            });
        } else {
            put(route('maestra.update',data.id),data,{
                preserveScroll: true,
                onSuccess: () => setShowModal(false) && verListado(parent),
                onError: (errors) => {
                    console.log(errors);
                }
            });
        }
    };

    return (
        <form className='p-4' onSubmit={submit} autoComplete='off'>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <InputLabel forInput="parent_id" value="Padre" />
                    <Select 
                    placeholder="Padre"
                    name="parent_id"
                    defaultValue={options.filter( padre => padre.value === data.parent_id )}
                    onChange={(option) => setData({... data,'parent_id':option.value})}
                    options={options}
                    />
                    <InputError message={errors.parent_id} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="name" value="Nombre" />
                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="key" value="Clave" />
                    <TextInput
                        type="text"
                        name="key"
                        value={data.key}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.key} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="hierarchy_id" value="Jerarquia" />
                    <Select 
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    name="hierarchy_id"
                    options={options}
                    onChange={(option) =>setData({... data,'hierarchy_id':option.value})}
                    />
                    <InputError message={errors.hierarchy_id} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="hierarchy_second_id" value="Jerarquia secundaria" />
                    <Select 
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    name="hierarchy_second_id"
                    options={options}
                    onChange={(option) => setData({... data,'hierarchy_second_id':option.value})}
                    />
                    <InputError message={errors.hierarchy_second_id} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="description" value="Jerarquia secundaria" />
                    <Textarea
                        name='description'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <label className="flex items-center">
                        <Checkbox name="is_active" value={ data.is_active } handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Activo</span>
                    </label>
                </div>
                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                <PrimaryButton 
                    processing={processing}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Aceptar
                </PrimaryButton>
                <button 
                    type="button" 
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
        </form>
    )
}

export default Form