import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ id: 1, input: '', select: '' }]);
    const [nextId, setNextId] = useState(2);
    const [error, setError] = useState([]);

    const handleAdd = () => {
        setFields([...fields, { id: nextId, input: '', select: '' }]);
        setNextId(nextId + 1);
    };
    const handleDelete = (id) => {
        setFields(fields.filter((field) => field.id !== id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.gender.value);

    }
    const handleChange = (id, name, value) => {
        setFields(fields.map(field => {
            if (field.id === id) {
                return { ...field, [name]: value };
            }
            return field;
        }));
    };


    return (
        <div>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                name='name'
                                className='input'
                                type="text"
                                onChange={e => handleChange(field.id, 'input', e.target.value)}
                            />

                            <select className="select"
                                name='gender'
                                onChange={e => handleChange(field.id, 'select', e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Option1">Option 1</option>
                                <option value="Option2">Option 2</option>
                            </select>
                            <button onClick={() => handleDelete(field.id)} className='btn btn-error text-white'>Delete</button>
                        </div>
                    ))}
                    <button className='btn' onClick={handleAdd}>+ Add more</button>
                    <button className='btn btn-primary'>submit</button>
                </form>
            </div>
            <div className='mt-5'>
                <h3>Form State</h3>
                {fields.map(field => (
                    <h4 key={field.id}>Input: {field.input} | Select: {field.select}</h4>
                ))}
            </div>
        </div>
    );
};

export default DynamicForm;