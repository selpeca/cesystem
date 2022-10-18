import React, { useState, useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectControl from '@/Components/SelectControl';
import Select from 'react-select'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlus,
    faPen
} from '@fortawesome/free-solid-svg-icons'


export default function Index({ auth, padres }) {
    
    const [tipos, setTipos] = useState([]);
    const [parent, setParent] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    
    const { data, setData, post, processing, errors, reset, progress } = useForm({
        id:null,
        key:null,
        name:'',
        parent_id: parent,
        value:'',
        hierarchy_id:'',
        hierarchy_second_id:'',
        description:'',
        is_active:''
    });

    useEffect(() => {
        if (parent === 0) return;
        verListado(parent)
    }, [parent])

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route('api.maestra.store'),{
        //     preserveScroll: true,
        //     onSuccess: () => setShowModal(false) && verListado(parent),
        // });
    };

    useEffect(() => {
        if (!showModal) reset()
    }, [showModal])
    
    const verListado = (id) =>{
        setIsLoading(true);
        fetch(route('api.maestra.index',id))
        .then(response => response.json())
        .then(datos => {
            setTipos(datos);
            setIsLoading(false);
        });
    }

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
                                <Link href={route('maestra.index')} className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                    Maestra 
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>
            }>
            <Head title="Maestra" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="md:flex md:pt-3">
                            <div className="md:basis-1/4 max-h-screen overflow-auto overscroll-contain p-4 space-y-4 max-w-md rounded divide-y divide-gray-200 shadow dark:divide-gray-700 md:p-6 dark:border-gray-700">
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon 
                                    icon={faPlus} 
                                    className='text-gray-700 cursor-pointer'
                                    onClick={() => setShowModal(true)}
                                    />
                                </div>
                                {
                                    padres.map((padre,index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                onClick={e => setParent(padre.id)}
                                                className={
                                                    parent === padre.id ?
                                                    "flex justify-between items-center pt-4 cursor-pointer font-bold":
                                                    "flex justify-between items-center pt-4 hover:text-gray-800 cursor-pointer hover:font-semibold"
                                                }>
                                                <div>{padre.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:basis-3/4 mx-3">
                                {
                                    isLoading ? 
                                        <div role="status" className='flex justify-center'>
                                            <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    :
                                        tipos.length === 0 ?
                                        <div className='flex justify-center'>
                                            <h1 className='text-2xl'>🥺</h1>
                                            <h5>Nada por aquí</h5>
                                        </div>:
                                        <div className='overflow-x-auto relative'>
                                        <table className="w-full py-3 text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">Nombre</th>
                                                    <th scope="col" className="py-3 px-6">Clave</th>
                                                    <th scope="col" className="py-3 px-6">Valor</th>
                                                    <th scope="col" className="py-3 px-6">Jerarquía</th>
                                                    <th scope="col" className="py-3 px-6">Jerarquía secundaria</th>
                                                    <th scope="col" className="py-3 px-6">Descripción</th>                                                
                                                    <th scope="col" className="py-3 px-3">...</th>                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                tipos.map((item,index) => (
                                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th className="py-4 px-3">{item.name}</th>
                                                        <td className="py-4 px-3">{item.key}</td>
                                                        <td className="py-4 px-3">{item.value}</td>
                                                        <td className="py-4 px-3">{item.hierarchy_id}</td>
                                                        <td className="py-4 px-3">{item.hierarchy_second_id}</td>
                                                        <td className="py-4 px-3">{item.description}</td>
                                                        <td className="py-4 px-3 text-right">
                                                            <FontAwesomeIcon 
                                                                icon={faPen} 
                                                                className='text-gray-700 cursor-pointer'
                                                                onClick={() => {
                                                                        setData({
                                                                            id: item.id,
                                                                            key: item.key,
                                                                            name: item.name,
                                                                            value: item.value,
                                                                            hierarchy_id: item.hierarchy_id,
                                                                            hierarchy_second_id: item.hierarchy_second_id,
                                                                            description: item.description,
                                                                            is_active: item.is_active,
                                                                        })
                                                                        setShowModal(true);
                                                                    }
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal 
                showModal={showModal} 
                setShowModal={setShowModal} 
                title="Agregar categoría"
                width="7xl"
                >
                    <form className='p-4' onSubmit={submit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                            <div>
                                <InputLabel forInput="parent_id" value="Padre" />
                                <SelectControl
                                    name="parent_id"
                                    value={parent}
                                    className="mt-1 block w-full"
                                    isDisabled={true}
                                    handleChange={onHandleChange}
                                    options={padres.map((padre) => (
                                            {
                                                value : padre.id,
                                                text : padre.name,
                                            }
                                        ))
                                    }
                                />
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
                            </div>
                            <div>
                                <InputLabel forInput="hierarchy_id" value="Jerarquia" />
                                <Select 
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable={true}
                                name="hierarchy_id"
                                options={
                                    [
                                        { value:1, label:"primero"},
                                        { value:2, label:"segundo"},
                                        { value:3, label:"tercero"},
                                    ]
                                }
                                />

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
                </Modal>
            </div>
        </AuthenticatedLayout>
    );
}