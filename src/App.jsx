import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';

function App() {
  const [inputFields, setInputFields] = useState([
    { id: Date.now(), firstName: "", lastName: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputFields.some(field => !field.firstName || !field.lastName)) {
      alert("Please fill out all fields.");
      return;
    }
    console.log("Input Fields:", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((field) => {
      if (field.id === id) {
        field[event.target.name] = event.target.value;
      }
      return field;
    });
    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: Date.now(), firstName: "", lastName: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const handleClearFields = () => {
    setInputFields([{ id: Date.now(), firstName: "", lastName: "" }]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        DYNAMIC FORM
        </h1>
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Add New Member
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {inputFields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={`First Name ${index + 1}`}
                    value={field.firstName}
                    onChange={(event) => handleChangeInput(field.id, event)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder={`Last Name ${index + 1}`}
                    value={field.lastName}
                    onChange={(event) => handleChangeInput(field.id, event)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFields(field.id)}
                  className={`bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-red-600 transition duration-300 ${
                    inputFields.length === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button><button
                type="button"
                onClick={handleClearFields}
                className="bg-gray-500 text-white px-8 py-3 font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleAddFields}
                className="bg-green-500 text-white px-8 py-3 font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
