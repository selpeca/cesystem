import React from 'react'

{/* 
    TAMAÑOS (width)
    md  Pequeño
    lg  Normal (Por defecto)
    4xl Largo
    7xl Extra Largo
*/}
export default function  Modal ({
    showModal, 
    setShowModal, 
    title,
    width = 'lg',
    handleOnClick,
    children
}) {
    if (!showModal) {
        return null;
    }
    return (
        <div tabIndex="-1" className={`${showModal ?? 'hidden'} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-20`}>
            <div className={`relative p-4 w-full max-w-${width} h-full md:h-auto`}>
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex justify-between items-start p-4 rounded-t border-b">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h3>
                        <button 
                            type="button" 
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" 
                            onClick={() => setShowModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {children ?? <div className="h-20"></div>}
                </div>
            </div>
        </div>
    )
}
