import React, {useState}from 'react';
import User_context from './user_context';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const User_state = ({children}) => {
  const navigate = useNavigate();

  const host = 'http://localhost:5000';

  //Functionality and API calling for signup form
  const submit_form = async (First_Name, Last_Name, User_Name, Phone_Number, Password, Age, Gender) => {

    const res = await fetch(`${host}/auth/user-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('jwt-token')
      },
      body: JSON.stringify({ First_Name, Last_Name, User_Name, Phone_Number, Password, Age, Gender }),
    });
    const json = await res.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('jwt-token', json.authtoken);
      navigate("/dashboard")
      alert('Signup success');
    } else {
      alert("Incorrect details");
    }
  }


// Functionality and API calling for signin form
    const signin_form = async (User_Name, Password) => {
    const res = await fetch(`${host}/auth/user-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({User_Name:User_Name, Password:Password}),
  });
  const json = await res.json();
  console.log(json);
  if (json.success) {
    localStorage.setItem('jwt-token', json.authtoken);
    navigate("/dashboard")
    alert('Signup success');
  } else {
    alert("Incorrect details");
  }
}


// Functionality and API calling for add appointment
const all_appointments = []
const [appointment, setappointment] = useState(all_appointments)
const add_appointment = async (Appointment_Date, Appointment_Time, Issue) => {
  const res = await fetch(`${host}/user/add-appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('jwt-token')
    },
    body: JSON.stringify({Appointment_Date:Appointment_Date, Appointment_Time:Appointment_Time, Issue:Issue}),
  });
  const json = await res.json();
  setappointment(appointment.concat(json));
}

 // // Functionality and API calling for fetch appointment
 const fetch_appointments = async () => {

  const response = await fetch(`${host}/user/fetch-appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("jwt-token"),
    },
  });
  const json = await response.json();
  setappointment(json);
};

// Functionality and API calling for update appointment
const update_appointment = async (id,Appointment_Date, Appointment_Time, Issue ) => {
  const response = await fetch(`${host}/user/update-appointment/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("jwt-token"),
    },
    body: JSON.stringify({Appointment_Date,Appointment_Time,Issue}),
  });
  await response.json();

  // logic for the client
  let new_appointment = JSON.parse(JSON.stringify(appointment));
  for (let index = 0; index < new_appointment.length; index++) {
    const element = new_appointment[index];
    if (element._id === id) {
      console.log(id)
      new_appointment[index].Appointment_Date = Appointment_Date;
      new_appointment[index].Appointment_Time = Appointment_Time;
      new_appointment[index].Issue = Issue;
      break;
    }
  }
  setappointment(new_appointment);
};

//Functionality and API calling for deleting appointment
const delete_appointment = async (id) => {
  const response = await fetch(`${host}/user/delete-appointment/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("jwt-token"),
    },
  });
  await response.json();
  const appoint = appointment.filter((appoint) => {
    return appoint._id !== id;
  });
  setappointment(appoint);
};


//Functionality and API calling for upload the user-profile image
const [file, setFile] = useState(null);
const upload_image = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  console.log({formData})
  const response = await fetch(`${host}/user/upload-img`, {
    method: "POST",
    headers: {
      "auth-token": localStorage.getItem("jwt-token"),
    },
    body: formData,
  });
  const data = await response.json();
  // console.log(data);
  setFile(data);
};

//Functionality and API calling for get the user-profile image

const fetchImage = async () => {

  const token = localStorage.getItem("jwt-token");
    const decoded = jwtDecode(token);
   let id = decoded.img.id;
  try {
    const response = await fetch(`${host}/user/image/${id}`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("jwt-token"),
      },
    });
    if (response.ok) {
      const response1 = await response;
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      // console.log(blob, response1);
      return response1.url;
    } else {
      console.error("Failed to fetch image");
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};


//Functionality and API calling for getting the user info
const fetch_user_info = async () => {
  const response = await fetch(`${host}/auth/fetch-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("jwt-token"),
    },
  });
  const res = await response.json();
  setappointment(res);
  console.log('in api',res)
  return res;
};


// Functionality and API calling for update user_info
const update_info = []
const [updates, setupdate] = useState(update_info)
const update_user_info = async (id,First_Name,Last_Name,User_Name,Phone_Number,Password,Age,Gender) => {
  const response = await fetch(`${host}/auth/update-info/6655628f7697ba7efdbf9960`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("jwt-token"),
    },
    body: JSON.stringify({First_Name,Last_Name,User_Name,Phone_Number,Password,Age,Gender}),
  });
  const res = await response.json();
  // console.log(res)

  // logic for the client
  let new_info = JSON.parse(JSON.stringify(updates));
  for (let index = 0; index < new_info.length; index++) {
    const element = new_info[index];
    if (element._id === id) {
      console.log(id)
      new_info[index].First_Name = First_Name;
      new_info[index].Last_Name = Last_Name;
      new_info[index].User_Name = User_Name;
      new_info[index].Phone_Number = Phone_Number;
      new_info[index].Password = Password;
      new_info[index].Age = Age;
      new_info[index].Gender = Gender;
      break;
    }
  }
  setupdate(new_info);
};



  return (
    <User_context.Provider value={{ submit_form , signin_form ,appointment, add_appointment , fetch_appointments, update_appointment, delete_appointment, upload_image, fetchImage, updates, fetch_user_info, update_user_info}}>
      {children}
    </User_context.Provider>
  );
}

export default User_state;
