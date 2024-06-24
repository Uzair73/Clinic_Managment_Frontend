import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/user_context';
import Add_doctor from './Add_doctor';
import Show_doctor from './Show_doctor';
import { useNavigate } from "react-router-dom";

const Admin_dashboard = () => {
  const navigate = useNavigate()
  const { appointment, fetch_appointments } = useContext(userContext);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    if (fetch_appointments) {
      fetch_appointments();
    }
  }, []);

  const handle_click = () => {
    localStorage.removeItem("admin-token")
    navigate('/admin-login')
  }

  const user_name = localStorage.getItem('username');

  return (
    <>
      <div className="container mx-auto px-4">
        <header className="flex flex-col md:flex-row justify-between items-center w-full py-4 px-4 bg-white">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-16 md:h-20 mr-3 md:mr-5" src="/Images/doctor.png" alt="Logo" />
            <h1 className="text-lg md:text-2xl font-bold">Clinic Management System</h1>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <Add_doctor />
            </div>
            <div className="w-10 cursor-pointer bg-black" onClick={handle_click}>
              <img className="h-10" src="/Images/Vector.png" alt="profile" />
            </div>
          </div>
        </header>
        <section>
          <div className="flex md:flex-row justify-around mx-2 md:mx-12 my-4 md:my-9 gap-4 md:gap-20 text-lg font-bold text-doc_black">
            <h1 role="button" onClick={() => setActiveSection('dashboard')}>Dashboard</h1>
            <h1 role="button" onClick={() => setActiveSection('appointments')}>Appointments</h1>
            <h1 role="button" onClick={() => setActiveSection('doctors')}>Doctors</h1>
          </div>
          {activeSection === 'dashboard' && (
            <div className="mx-2 md:mx-11 text-doc_black">
              <div className="font-bold text-2xl mb-4">Our Doctors</div>
              <Show_doctor />
              <div className="font-bold text-2xl my-6">Appointments</div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-[#FAFAFA]">
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Date</th>
                      <th className="py-2 px-4 border-b">Visit Time</th>
                      <th className="py-2 px-4 border-b">Description</th>
                      <th className="py-2 px-4 border-b">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment) => (
                      <tr key={appointment._id}>
                        <td className="py-2 px-4 border-b border-r">{user_name}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Appointment_Date}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Appointment_Time}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Issue}</td>
                        <td className="py-2 px-4 border-b border-r">
                          <button className="text-blue-500 hover:text-blue-700">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeSection === 'appointments' && (
            <div className="mx-2 md:mx-11">
              <div className="font-bold text-2xl my-6">Appointments</div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-[#FAFAFA]">
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Date</th>
                      <th className="py-2 px-4 border-b">Visit Time</th>
                      <th className="py-2 px-4 border-b">Description</th>
                      <th className="py-2 px-4 border-b">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment) => (
                      <tr key={appointment._id}>
                        <td className="py-2 px-4 border-b border-r">{user_name}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Appointment_Date}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Appointment_Time}</td>
                        <td className="py-2 px-4 border-b border-r">{appointment.Issue}</td>
                        <td className="py-2 px-4 border-b border-r">
                          <button className="text-blue-500 hover:text-blue-700">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeSection === 'doctors' && (
            <div className="mx-2 md:mx-11">
              <div className="font-bold text-2xl mb-4">Our Doctors</div>
              <Show_doctor />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Admin_dashboard;
