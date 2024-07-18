import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/user_context';
import admin_context from '../../context/Admin_context';
import Add_doctor from './Add_doctor';
import Show_doctor from './Show_doctor';
import { useNavigate } from "react-router-dom";

const Admin_dashboard = () => {
  const navigate = useNavigate();
  const { appointment, fetch_appointments } = useContext(userContext);
  const { doctor, fetch_doctors } = useContext(admin_context);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (fetch_appointments) {
      fetch_appointments();
    }
    if (fetch_doctors) {
      fetch_doctors();
    }
  }, []);

  const handle_click = () => {
    localStorage.removeItem("admin-token");
    navigate('/admin-login');
  };

  if (localStorage.getItem('admin-token') == null) {
    navigate('/admin-login');
  }

  const user_name = localStorage.getItem('username');

  const format_date = (date) => {
    const cal = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, cal);
  };

  return (
    <>
      <div className="container-fluid px-2">
        <header className="flex md:flex-row justify-between items-center w-full py-4 px-4 bg-white border-solid border-b-2 border-black sticky top-0">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-16 md:h-20 mr-3 md:mr-5" src="/Images/doctor.png" alt="Logo" />
            <h1 className="text-lg md:text-2xl font-bold">Clinic Management System</h1>
          </div>
          <div className="flex items-center max-sm:hidden">
            <div className="mr-4">
              <Add_doctor />
            </div>
            <div className="w-5 cursor-pointer bg-black" onClick={handle_click}>
              <img className="h-5" src="/Images/Vector.png" alt="profile" />
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={toggle}
              className="text-gray-800 p-3 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-20 left-0 right-0 mt-2 w-full bg-white rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out`}
            >
              <div className="flex flex-col items-center p-4">
                <div className="mb-4">
                  <Add_doctor />
                </div>
                <div className="w-5 cursor-pointer bg-black" onClick={handle_click}>
                  <img className="h-5" src="/Images/Vector.png" alt="profile" />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
        </header>
        <section>
          <div className="flex md:flex-row justify-around mx-2 md:mx-12 my-4 md:my-9 gap-4 md:gap-20 text-lg font-bold text-doc_black">
            <h1 className={`${activeSection === 'dashboard' ? 'text-blue-600' : ''}`} role="button" onClick={() => setActiveSection('dashboard')}>Dashboard</h1>
            <h1 className='hover:text-blue-600' role="button" onClick={() => setActiveSection('appointments')}>{`Appointments${appointment.length > 0 ? ` (${appointment.length})` : ''}`}</h1>
            <h1 className='hover:text-blue-600' role="button" onClick={() => setActiveSection('doctors')}>{`Doctors${doctor.length > 0 ? ` (${doctor.length})` : ''}`}</h1>
          </div>
          {activeSection === 'dashboard' && (
            <div className="mx-2 md:mx-11 text-doc_black">
              <div className="font-bold text-2xl mb-4">Our Doctors</div>
              <div>
                <Show_doctor searchQuery={searchQuery}/>
              </div>
              <div className="font-bold text-2xl my-6">Appointments</div>
              {appointment.length === 0 ?  <div className="text-2xl font-bold text-center pl-[7.5vw]">No Appointments</div> : 
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-[#FAFAFA] text-left">
                      <th className="py-2 px-4">Patient Name</th>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Visit Time</th>
                      <th className="py-2 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment) => (
                      <tr key={appointment._id}>
                        <td className="py-2 px-4">{user_name}</td>
                        <td className="py-2 px-4">{format_date(appointment.Appointment_Date)}</td>
                        <td className="py-2 px-4">{appointment.Appointment_Time}</td>
                        <td className="py-2 px-4">{appointment.Issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>}
            </div>
          )}
          {activeSection === 'appointments' && (
            <div className="mx-2 md:mx-11">
              <div className="font-bold text-2xl my-6">Appointments</div>
              {appointment.length === 0 ?  <div className="text-2xl font-bold text-center pl-[7.5vw]">No Appointments</div> :
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-[#FAFAFA] text-left">
                      <th className="py-2 px-4">Patient Name</th>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Visit Time</th>
                      <th className="py-2 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment) => (
                      <tr key={appointment._id}>
                        <td className="py-2 px-4">{user_name}</td>
                        <td className="py-2 px-4">{format_date(appointment.Appointment_Date)}</td>
                        <td className="py-2 px-4">{appointment.Appointment_Time}</td>
                        <td className="py-2 px-4">{appointment.Issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                }
            </div>
          )}
          {activeSection === 'doctors' && (
            <div className="mx-2 md:mx-11">
              <div className="font-bold text-2xl mb-4">Our Doctors</div>
              <Show_doctor searchQuery={searchQuery} />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Admin_dashboard;
