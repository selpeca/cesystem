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
            <Head title="Cuenta" />
            <div className="py-12">
                <div>
                    <button href={route('usuario.edit', auth.user.id)} method="get" as="button"> Editar </button>
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}