import React, { useState, useContext, useEffect } from 'react';
import userContext from '../../context/user_context';

const Edit_user_info = () => {
  const { update_user_info, updates, fetch_user_info } = useContext(userContext);
  const [update, setUpdate] = useState({
    id: '',
    First_name: '',
    Last_name: '',
    username: '',
    Number: '',
    Password: '',
    Gender: '',
    Age: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      let res = await fetch_user_info();
      setUpdate({
        id: res._id,
        First_name: res.First_Name,
        Last_name: res.Last_Name,
        username: res.User_Name,
        Number: res.Phone_Number,
        Password: res.Password,
        Gender: res.Gender,
        Age: res.Age,
      });
      console.log(setUpdate.id);
    }
    if (isModalOpen) {
      getUser();
    }
  }, [isModalOpen]);

  useEffect(() => {
    setUpdate((prevState) => ({
      ...prevState,
      First_name: updates.First_name,
      Last_name: updates.Last_name,
      username: updates.username,
      Number: updates.Number,
      Password: updates.Password,
      Gender: updates.Gender,
      Age: updates.Age,
    }));
  }, [updates]);

  const handle_Change = (e) => {
    setUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await update_user_info(
      update.id,
      update.First_name,
      update.Last_name,
      update.username,
      update.Number,
      update.Password,
      update.Age,
      update.Gender
    );
    console.log(update_user_info);
    toggleModal();
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        type="button"
        onClick={toggleModal}
        className="flex items-center justify-center"
      >
        <img className="w-6 sm:w-8" src="/Images/Vector@2x.png" alt="profile" />
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mx-auto">
                  Edit Info
                </h3>
                <button type="button" onClick={toggleModal} className="text-gray-900 dark:text-white">
                  &#10060;
                </button>
              </div>
              {/* Modal body */}
              <form onSubmit={handleUpdateSubmit} className="p-4">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-2 bg-gray-100 rounded"
                      name="First_name"
                      id="First_name"
                      value={update.First_name}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-2 bg-gray-100 rounded"
                      name="Last_name"
                      id="Last_name"
                      value={update.Last_name}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full p-2 bg-gray-200 rounded"
                      name="username"
                      id="username"
                      value={update.username}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full p-2 bg-gray-100 rounded"
                      name="Number"
                      id="Number"
                      value={update.Number}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-2 bg-gray-100 rounded"
                      name="Password"
                      id="Password"
                      value={update.Password}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="number"
                      placeholder="Age"
                      className="w-full p-2 bg-gray-100 rounded"
                      name="Age"
                      id="Age"
                      value={update.Age}
                      onChange={handle_Change}
                    />
                  </div>
                  <div className="w-full p-2">
                    <fieldset className="flex">
                      <legend className="text-lg text-gray-900 dark:text-white">Gender</legend>
                      <div className="flex items-center mx-3">
                        <input
                          type="radio"
                          id="Male"
                          name="Gender"
                          value="Male"
                          checked={update.Gender === "Male"}
                          onChange={handle_Change}
                          className="mr-2"
                        />
                        <label htmlFor="Male" className="text-gray-900 dark:text-white">Male</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="Female"
                          name="Gender"
                          value="Female"
                          checked={update.Gender === "Female"}
                          onChange={handle_Change}
                          className="mr-2"
                        />
                        <label htmlFor="Female" className="text-gray-900 dark:text-white">Female</label>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-gray-900 bg-gray-200 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    Update Info &#8594;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit_user_info;