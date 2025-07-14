import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ id: 1, input: '', select: '', errors: {} }]);
    const [nextId, setNextId] = useState(2);
    // const [error, setError] = useState([]);
    const [submitted, setSubmitted] = useState([]);

    const handleAdd = () => {
        setFields([...fields, { id: nextId + 1, input: '', select: '', errors: {} }]);
        setNextId(nextId + 1);
    };
    const handleDelete = (id) => {
        setFields(fields.filter((field) => field.id !== id));
    }

    const handleChange = (id, name, value) => {
        setFields(fields.map(field => {
            if (field.id === id) {
                return { ...field, [name]: value, errors: { ...field.errors, [name]: '' } };
            }
            return field;
        }));
    };


    const validateFields = () => {
        let isValid = true;
        const updatedFields = fields.map(field => {
            const errors = {};
            if (field.input.trim() === '') {
                errors.input = 'Input required';
                isValid = false;
            }
            if (field.select === '') {
                errors.select = 'Select required';
                isValid = false;
            }
            return { ...field, errors };
        });
        setFields(updatedFields);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateFields();
        setSubmitted(isValid);
    }


    return (
        <div>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <div key={field.id} className="flex gap-4 mb-2">
                            <div>
                                <input
                                    name='name'
                                    className='input'
                                    type="text"
                                    onChange={e => handleChange(field.id, 'input', e.target.value)}
                                />
                                {field.errors.input && <div style={{ color: 'red' }}>{field.errors.input}</div>}
                            </div>

                            <div>
                                <select className="select"
                                    name='gender'
                                    onChange={e => handleChange(field.id, 'select', e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Option1">Option 1</option>
                                    <option value="Option2">Option 2</option>
                                </select>
                                {field.errors.select && <div style={{ color: 'red' }}>{field.errors.select}</div>}
                            </div>
                            <button onClick={() => handleDelete(field.id)} className='btn btn-error text-white'>Delete</button>
                        </div>
                    ))}
                    <button type='button' className='btn' onClick={handleAdd}>+ Add more</button>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </form>
            </div>
            <div className='mt-5'>
                <h3>Form State</h3>
                {fields.map(field => (
                    <h3 key={field.id}>Input: {field.input} | Select: {field.select}</h3>
                ))}
            </div>
        </div>
    );
};

export default DynamicForm;