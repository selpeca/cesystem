import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '@inertiajs/inertia-react';
import { 
    faPlus,
    faPen,
    faCheck
} from '@fortawesome/free-solid-svg-icons'
import { Link, Head } from '@inertiajs/inertia-react';

export default function Index({ auth, padres }) {
    
    const [tipos, setTipos] = useState([]);
    const [parent, setParent] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (parent === 0) return;
        verListado(parent)
    }, [parent])
    
    const verListado = (id) =>{
        setIsLoading(true);
        fetch(route('api.maestra.index',id))
        .then(response => response.json())
        .then(data => {
            setTipos(data);
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
                                                    <th scope="col" className="py-3 px-6">...</th>                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tipos.map((item,index) =>{
                                                        return <TrTipo key={index} datos={item} />
                                                        {/* (
                                                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {item.name}
                                                                </th>
                                                                <td className="py-4 px-6">{item.key}</td>
                                                                <td className="py-4 px-6">{item.value}</td>
                                                                <td className="py-4 px-6">{item.hierarchy_id}</td>
                                                                <td className="py-4 px-6">{item.hierarchy_second_id}</td>
                                                                <td className="py-4 px-6">{item.description}</td>
                                                                <td className="py-4 px-6">
                                                                    <FontAwesomeIcon 
                                                                    icon={faPen} 
                                                                    className='text-gray-700 cursor-pointer'
                                                                    // onClick={() => setShowModal(true)}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ) */}
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} title="Agregar categoría">
                    
                </Modal>
            </div>
        </AuthenticatedLayout>
    );
}

const TrTipo = ({datos}) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState(datos);
    const onHandleChange = (event) => {
        setValues(event.target.name, event.target.value);
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {
            Object.entries(values).map( ([key, value]) => {
                return (
                    <td key={key} scope="row" className="py-3 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {
                        editing ?
                        <TextInput
                            name={value}
                            value={value}
                            className="block text-sm"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        :
                        value
                    }
                </td>)
                
            })
        }
            {/* <td className="py-3 px-1">
                {
                    editing ?
                    <TextInput
                        name="key"
                        value={values.key}
                        className="block text-sm"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    :
                    values.key
                }
            </td>
            <td className="py-3 px-1">
                {
                    editing ?
                    <TextInput
                        name="value"
                        value={values.value}
                        className="block text-sm"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    :
                    values.value
                }
            </td>
            <td className="py-3 px-1">
                {
                    editing ?
                    <TextInput
                        name="key"
                        value={values.key}
                        className="block text-sm"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    :
                    values.key
                }
            </td>
            <td className="py-3 px-1">
                {
                    editing ?
                    <TextInput
                        name="hierarchy_id"
                        value={values.hierarchy_id}
                        className="block text-sm"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    :
                    values.hierarchy_id
                }
            </td>
            <td className="py-3 px-1">
                {
                    editing ?
                    <TextInput
                        name="hierarchy_second_id"
                        value={values.hierarchy_second_id}
                        className="block text-sm"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    :
                    values.hierarchy_second_id
                }
            </td> */}
            <td className="py-3 px-1">
                {
                    editing ?
                    <FontAwesomeIcon 
                    icon={faCheck} 
                    className='text-gray-700 cursor-pointer'
                    onClick={() => setEditing(false)}
                    />
                    :
                    <FontAwesomeIcon 
                    icon={faPen} 
                    className='text-gray-700 cursor-pointer'
                    onClick={() => setEditing(true)}
                    />
                }
            </td>
        </tr>
    )
}