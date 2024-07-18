import React, { useState, useContext } from 'react';
import userContext from '../../context/user_context';

const Edit_appointment = ({ id, Appointment_Date, Appointment_Time, Issue }) => {
  const { update_appointment } = useContext(userContext);

  const [update, setUpdate] = useState({
    id: id,
    update_appointment_date: Appointment_Date,
    update_appointment_time: Appointment_Time,
    update_issue: Issue,
  });

  const handle_submit = (e) => {
    e.preventDefault();
    update_appointment(id, update.update_appointment_date, update.update_appointment_time, update.update_issue);
    toggleModal();
  };

  const handle_change = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
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
        className="mx-4 mt-8 sm:mt-[1.5rem] sm:relative sm:left-10 p-3 bg-[#1E9AF1] hover:bg-blue-700 rounded font-lg font-[Mulish] font-bold text-white max-sm:w-[43vw]"
        type="button"
        onClick={toggleModal}
      >
        &#x270E; Edit Appointment
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
                  Edit Appointment
                </h3>
              </div>
              {/* Modal body */}
              <form onSubmit={handle_submit} className="p-4">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="update_appointment_date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      name="update_appointment_date"
                      id="update_appointment_date"
                      value={update.update_appointment_date}
                      onChange={handle_change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="update_appointment_time_to"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Appointment Time To
                    </label>
                    <input
                      type="time"
                      name="update_appointment_time"
                      id="update_appointment_time_to"
                      value={update.update_appointment_time}
                      onChange={handle_change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="update_appointment_time_from"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Appointment Time From
                    </label>
                    <input
                      type="time"
                      name="update_appointment_time"
                      id="update_appointment_time_from"
                      value={update.update_appointment_time}
                      onChange={handle_change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="update_issue"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      What&#39;s the Issue?
                    </label>
                    <textarea
                      name="update_issue"
                      id="update_issue"
                      value={update.update_issue}
                      onChange={handle_change}
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
                    className="text-button_text bg-cancel_bg_light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-11 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Booking &#8594;
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

export default Edit_appointment;
