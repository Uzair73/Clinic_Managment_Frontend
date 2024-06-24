import React ,{useContext,useEffect} from 'react'
import Book_appointment from './Book_appointment'
import Edit_appointment from './Edit_appointment copy'
import Cancel_appointment from './Cancel_appointment'
import userContext from '../../context/user_context'

const Show_appointment = () => {
  const { appointment, fetch_appointments } = useContext(userContext);

  useEffect(() => {
    if (fetch_appointments) {
      fetch_appointments();
    }
  }, []);
  const user_name = localStorage.getItem('username')
  
  return (
    <>
     <section>
      <div className="container flex flex-wrap mx-12 max-sm:mx-0">
        {appointment.map((appointment) => (
          <div key={appointment._id} className="box flex my-2 justify-between mx-5 max-sm:mx-2">
            <div className="inner-box flex flex-col bg-[#FBF8F8] w-[40vw] lg:md:p-[40px] max-sm:w-full">
            <h1 className="text-[2rem] font-[Lato] max-sm:mx-3">{user_name}</h1>
              <h1 className="font-[Lato] max-sm:mx-3">Appointment On <span>{appointment.Appointment_Date}</span> at <span>{appointment.Appointment_Time}</span></h1>
              <h1 className="font-[Lato] max-sm:mx-3">Description: {appointment.Issue}</h1>
              <div className="flex">
              <div className="mx-4 max-sm:mx-3"><Cancel_appointment id={appointment._id} /></div>
              <div className="mx-4"><Edit_appointment id={appointment._id} Appointment_Date={appointment.Appointment_Date} Appointment_Time={appointment.Appointment_Time} Issue={appointment.Issue}/>
              </div>
            </div>

            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Show_appointment