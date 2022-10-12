import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Inicio" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Iniciar sesión
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Crear cuenta
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_de_la_Universidad_de_La_Guajira.svg/1200px-Logo_de_la_Universidad_de_La_Guajira.svg.png" className="h-40" alt="Logo Uniguajira"/>
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="flex">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 text-gray-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <polygon fill="var(--ci-primary-color, currentColor)" points="376 160 376 192 441.372 192 252 381.373 180 309.373 76.686 412.686 99.314 435.314 180 354.627 252 426.627 464 214.628 464 280 496 280 496 160 376 160" class="ci-primary"/>
                                        <polygon fill="var(--ci-primary-color, currentColor)" points="48 104 16 104 16 496 496 496 496 464 48 464 48 104" class="ci-primary"/>
                                    </svg>
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://www.uniguajira.edu.co/sobre-nosotros-centro-extension"
                                            className="underline text-gray-900 dark:text-white"
                                        >
                                            Sistema de cargue de bases de datos del centro de extensión y proyección social
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Un espacio diseñado para el tratamiento de los registros que se tienen del año 2022 y anteriores
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
