import React from 'react';

export default function Textarea({
    name,
    value,
    className,
    autoComplete,
    required,
    handleChange,
}) {

    return (
        <div className="flex flex-col items-start">
            <textarea
                id={name}
                name={name}
                className={
                    `w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            >
                {value}
            </textarea>
        </div>
    );
}
