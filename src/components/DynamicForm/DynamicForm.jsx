import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ input: '', select: '' }]);
   
    const handleAdd = () => {
        setFields([...fields, { input: '', select: '' }]);
    };
    const handleDelete = (index) =>{
         setFields(fields.filter((item,idx) => idx!== index));
    }
    return (
        <div className='flex items-center justify-center'>
            <div>
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-4 mb-2">
                        <input
                            className='input'
                            type="text"

                        />

                        <select className="select"

                        >
                            <option value="">Select</option>
                            <option value="Option1">Option 1</option>
                            <option value="Option2">Option 2</option>
                        </select>
                        <button onClick={()=>handleDelete(index)} className='btn btn-error text-white'>Delete</button>
                    </div>
                ))}
                <button className='btn' onClick={handleAdd}>+ Add more</button>
            </div>
        </div>
    );
};

export default DynamicForm;