

const DynamicForm = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            {/* input */}
            <div className="flex justify-center items-center p-2">
                <h1 className="m-1">Name:</h1>
                <input type="text" placeholder="Name" className="input" />
            </div>
            {/* selection */}
            <div className="flex justify-between items-center p-2">
                <h1 className="m-2">Gender:</h1>
                <select defaultValue="Gender" className="select w-11/12">
                    <option disabled={true}>Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
        </div>
    );
};

export default DynamicForm;