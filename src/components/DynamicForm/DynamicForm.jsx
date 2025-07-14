import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ id: 1, input: '', select: '', errors: {} }]);
    const [nextId, setNextId] = useState(2);
    // const [error, setError] = useState([]);
    const [submitted, setSubmitted] = useState(false);

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
                                    placeholder='Enter name'
                                    onChange={e => handleChange(field.id, 'input', e.target.value)}
                                />
                                {field.errors.input && <div className='text-red-500'>{field.errors.input}</div>}
                            </div>

                            <div>
                                <select className="select"
                                    name='gender'
                                    onChange={e => handleChange(field.id, 'select', e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {field.errors.select && <div className='text-red-500'>{field.errors.select}</div>}
                            </div>
                            <button onClick={() => handleDelete(field.id)} className='btn btn-error text-white'>Delete</button>
                        </div>
                    ))}
                    <button type='button' className='btn btn-success text-white mr-2' onClick={handleAdd}>+ Add more</button>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </form>
            </div>
            {/* Display state in h3 tags */}
            <div className='mt-5'>
                <h3>Form State</h3>
                {fields.map(field => (
                    <h3 key={field.id}>Input: {field.input} | Select: {field.select}</h3>
                ))}
            </div>
            {/* Display table if submitted */}
            {submitted && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Submitted Table:</h2>
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">#</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((field, index) => (
                                <tr key={field.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{field.input}</td>
                                    <td className="border p-2">{field.select}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DynamicForm;