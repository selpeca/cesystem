import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGears,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth, usuario }) {

    console.log(usuario);
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
                            <Link href={route('usuario.show', auth.user.id)} className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Cuenta
                            </Link>
                        </div>
                    </li>
                </ol>
            </nav>
        }>
            <Head title="Configuraciones generales" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <ul className='col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8'>
                            <li>
                                <Link href={ route('maestra.index') }>
                                    <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100 p-4'>
                                        <div className='relative overflow-hidden flex justify-center items-center'>
                                            <FontAwesomeIcon icon={faGears} className='text-2xl font-bold' />
                                        </div>
                                        <h4 className='relative mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                            
                                                <span className='relative'>
                                                    Maestra
                                                </span>
                                            
                                        </h4>
                                        <p className='relative mt-1.5 text-xs font-medium text-slate-500'>
                                            Configuración de la tabla maestra
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100 cursor-pointer p-4'>
                                    <div className='relative overflow-hidden flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faUser} className='text-2xl font-bold' />
                                    </div>
                                    <h4 className='relative mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                        Cuenta
                                    </h4>
                                    <p className='relative mt-1.5 text-xs font-medium text-slate-500'>
                                        Configuración de la cuenta
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}