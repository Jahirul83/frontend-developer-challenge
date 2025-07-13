import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ input: '', select: '' }]);
   
    const handleAdd = () => {
        setFields([...fields, { input: '', select: '' }]);
    };
    return (
        <div className='flex items-center justify-center'>
            <div>
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-4 mb-2">
                        <input
                            placeholder='name'
                            className='input'
                            type="text"
                            value={field.input}

                        />

                        <select className="select"
                            value={field.select}

                        >
                            <option value="">Select</option>
                            <option value="Option1">Option 1</option>
                            <option value="Option2">Option 2</option>
                        </select>
                        <button className='btn btn-error text-white'>Delete</button>
                    </div>
                ))}
                <button className='btn' onClick={handleAdd}>+ Add more</button>
            </div>
        </div>
    );
};

export default DynamicForm;