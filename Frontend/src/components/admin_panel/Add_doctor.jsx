import React, { useState, useContext, useEffect } from 'react';
import doctor_context from '../../context/Admin_context';

const Add_doctor = ({ doc_data }) => {
  const { Add_doctor, update_doc_info } = useContext(doctor_context);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    First_name: "",
    Last_name: "",
    Schedule: "",
    Status: "Available",
    image: ""
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (doc_data) {
      setInput({
        First_name: doc_data.First_Name,
        Last_name: doc_data.Last_Name,
        Schedule: doc_data.Schedule,
        Status: doc_data.Status,
      });
      setEdit(true);
    }
  }, [doc_data]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  const handle_sumbit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('First_Name', input.First_name);
    formData.append('Last_Name', input.Last_name);
    formData.append('Schedule', input.Schedule);
    formData.append('Status', input.Status);
    if (file) {
      formData.append('image', file);
    }
console.log(input.First_name,input.Last_name,input.Schedule,input.Status,input.image)
    if (edit) {
      update_doc_info(doc_data._id, formData);
    } else {
      Add_doctor(formData);
      setInput({
      First_name: "",
      Last_name: "",
      Schedule: "",
      Status: "",
      image: ""
      })
    }
    toggleModal();
  };

  return (
    <>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        onClick={toggleModal}
        className={`text-white ${edit ? 'bg-blue-500' : 'bg-blue-600'} ${!edit ? 'hover:bg-blue-700' : ''} ${edit ? 'ml-[20vh]' : ''} ${!edit ? 'w-[12vw]' : ''} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        {edit ? 'Edit Doctor' : 'Add Doctor'}
      </button>

      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mx-auto">
                {edit ? 'Edit Doctor' : 'Add Doctor'}
              </h3>
              <button type="button" onClick={toggleModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                &#10060;
              </button>
            </div>
            <form onSubmit={handle_sumbit}>
              <div className="flex flex-wrap p-4 text-black">
                <div className="w-full sm:w-1/2 px-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 bg-gray-100 rounded"
                    name="First_name"
                    id="First_name"
                    value={input.First_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 bg-gray-100 rounded"
                    name="Last_name"
                    id="Last_name"
                    value={input.Last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-2 mt-4">
                  <input
                    type="text"
                    placeholder="Monday - Saturday"
                    className="w-full p-2 bg-gray-100 rounded"
                    name="Schedule"
                    id="Schedule"
                    value={input.Schedule}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-2 mt-4">
                  <label htmlFor="Status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Status
                  </label>
                  <select
                    id="Status"
                    name="Status"
                    value={input.Status}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
                <div className="w-full px-2 mt-4">
                  <label htmlFor="file-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Choose Image
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="w-full flex justify-between px-2 mt-4">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                  >
                    {edit ? 'Update Doctor' : 'Add Doctor'} &#8594;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Add_doctor;
