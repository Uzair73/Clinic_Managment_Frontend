import React, { useState, useContext } from 'react'
import userContext from '../../context/user_context'
import doctor_context from '../../context/Admin_context';

const Cancel_appointment = ({id, text_change}) => {
  const {delete_appointment} = useContext(userContext);
  const {delete_doctor} = useContext(doctor_context)
  // const [edit, setEdit] = useState(false);
  const handle_click = ()=>{
    console.log(id)
    delete_appointment(id)
    delete_doctor(id)
    toggleModal()
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className={`mx-4 mt-[30px] ${!text_change === 'admin' ? 'lg:relative ' : ''} ${text_change === 'admin' ? 'max-sm:hidden' : ''} lg:left-10 ${text_change === 'admin' ? '' : 'lg:p-[12px]'} text-button_text ${text_change === 'admin' ? 'bg-none' : 'bg-cancel_bg_light'} ${text_change === 'admin' ? '' : 'hover:bg-blue-300'} rounded font-lg font-[Mulish] font-bold max-sm:p-4 max-sm:mx-4`} 
        type="button"
        onClick={toggleModal}
      >
        {text_change === 'admin' ? '❌' : 'Cancle'}
      </button>

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-filter backdrop-blur-sm"
        >
          <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModal}
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{`${text_change === 'admin' ? 'Are you sure you want to delete this doctor?': 'Are you sure you want to delete this appointment?'} `}</h3>

                <button
                  type="button"
                  className="text-cancel_text bg-cancel_bg_light focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={handle_click}
                  data-modal-hide="popup-modal"
                >
                  Yes, I&#39;m sure
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={toggleModal}
                  data-modal-hide="popup-modal"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cancel_appointment