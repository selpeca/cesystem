import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGears,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Generales</h2>}>
            <Head title="Configuraciones generales" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <ul className='col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8'>
                            <li>
                                <Link href={ route('master.index') }>
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