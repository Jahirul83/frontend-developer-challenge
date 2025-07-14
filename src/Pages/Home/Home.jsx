import React from 'react';
import DynamicForm from '../../components/DynamicForm/DynamicForm';

const Home = () => {
    return (
        <div className='text-center p-5'>
            <h1 className='mb-3 text-3xl font-bold'>Forntend developer Challenge</h1>
            <DynamicForm></DynamicForm>
        </div>
    );
};

export default Home;