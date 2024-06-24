import React, { useState, useContext } from 'react';
import userContext from '../../context/user_context';

const Book_appointment = (props) => {
  const { add_appointment } = useContext(userContext);

  const [set, setInput] = useState({
    Appointment_Date: "",
    Appointment_Time: "",
    Issue: ""
  });

  const handle_sumbit = (e) => {
    e.preventDefault();
    add_appointment(set.Appointment_Date, set.Appointment_Time, set.Issue);
    toggleModal();
  };

  const handle_Change = (e) => {
    setInput({ ...set, [e.target.name]: e.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="mx-4 mt-8 sm:mt-4 sm:relative sm:left-10 p-3 bg-[#1E9AF1] hover:bg-blue-700 rounded font-lg font-[Mulish] font-bold text-white max-sm:w-full"
        type="button"
        onClick={toggleModal}
      >
        &#43; Book Appointment
      </button>

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-filter backdrop-blur-sm"
        >
          <div className="relative p-4 w-full max-w-md mx-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold font-[Lato] text-gray-900 dark:text-white mx-auto">
                  Book New Appointment
                </h3>
              </div>
              {/* Modal body */}
              <form onSubmit={handle_sumbit} className="p-4">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="Appointment_Date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex"
                    >
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      name="Appointment_Date"
                      id="Appointment_Date"
                      value={set.Appointment_Date}
                      onChange={handle_Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Appointment_Time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex"
                    >
                      Appointment Time To
                    </label>
                    <input
                      type="time"
                      name="Appointment_Time"
                      id="Appointment_Time"
                      value={set.Appointment_Time}
                      onChange={handle_Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Appointment_Time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex"
                    >
                      Appointment Time From
                    </label>
                    <input
                      type="time"
                      name="Appointment_Time"
                      id="Appointment_Time"
                      value={set.Appointment_Time}
                      onChange={handle_Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="Issue"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex"
                    >
                      What&#39;s the Issue?
                    </label>
                    <textarea
                      name="Issue"
                      id="Issue"
                      value={set.Issue}
                      onChange={handle_Change}
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write about the issue"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-cancel_text bg-cancel_bg_light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-11 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Now &#8594;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book_appointment;
