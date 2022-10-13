import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import { Link, Head } from '@inertiajs/inertia-react';
// const Padres = [
//     {  
//         "id": 1,
//         "key": "tipid",
//         "value": "TIPOS DE IDENTIFICACIÓN"
//     },
//     {  
//         "id": 2,
//         "key": "tipid",
//         "value": "CIUDADES"
//     },
//     {  
//         "id": 3,
//         "key": "tipid",
//         "value": "ESTADOS"
//     },
// ]

const verListado = (id) =>{
    console.log(id);
}

export default function Index({ auth, padres }) {
    
    // const [padres, setPadres] = useState(padres);

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
                                <Link href={route('master.index')} className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
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
                        <div className="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center">
                            <div className="max-h-screen overflow-auto overscroll-contain p-4 space-y-4 max-w-md rounded divide-y divide-gray-200 shadow dark:divide-gray-700 md:p-6 dark:border-gray-700">
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faPlus} className='text-gray-700' />
                                </div>
                                {
                                    padres.map((padre,index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                onClick={e => verListado(padre.id)}
                                                className="flex justify-between items-center pt-4 hover:text-gray-800 cursor-pointer">
                                                <div>{padre.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        {/* <div className="p-6 bg-white border-b border-gray-200">Vista de la tabla maestra!</div> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}