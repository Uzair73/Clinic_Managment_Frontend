import React, {useState} from 'react'
import Admin_context from './Admin_context'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Admin_state = ({children}) => {
    // const [admin, setAdmin] = useState(null)
    const host = 'http://localhost:5000';
    const navigate = useNavigate();

//Functionality and API calling for signup form
const submit_form = async (Email, Password) => {

    const res = await fetch(`${host}/admin-auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Email,Password}),
    });
    const json = await res.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('admin-token', json.authtoken);
      navigate("/admin-dashboard")
      alert('Signup success');
    } else {
      alert("Incorrect details");
    }
  }


  // Functionality and API calling for signin form
  const signin_form = async (Email, Password) => {
    const res = await fetch(`${host}/admin-auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({Email:Email, Password:Password}),
  });
  const json = await res.json();
  console.log(json);
  if (json.success) {
    localStorage.setItem('admin-token', json.authtoken);
    navigate("/admin-dashboard")
    alert('Signin success');
  } else {
    alert("Incorrect details");
  }
}


// Functionality and API calling for adding doctor
const all_doctors = [];
const [doctor, setdoctor] = useState(all_doctors);

const Add_doctor = async (formData) => {
  const res = await fetch(`${host}/admin/add-doctor`, {
    method: "POST",
    headers: {
      // "Content-Type": "form-data",
      "auth-token": localStorage.getItem('jwt-token')
    },
    body: formData,
  });

  const json = await res.json();
  console.log('upload-data',{json})
  setdoctor(doctor.concat(json));
};

// Functionality and API calling for fetching doctors
const fetch_doctors = async () => {

  const response = await fetch(`${host}/admin/fetch-doctors`, {
    method: "GET",
    headers: {
      "auth-token": localStorage.getItem("jwt-token"),
    }
  });
  const json = await response.json();
  console.log('Doctor list',json)
  setdoctor(json);
};

// Functionality and API calling for update doctor info
const update_doc_info = async (id,First_Name, Last_Name, Schedule, Status ) => {
  const response = await fetch(`${host}/admin/update-doctor-info/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("admin-token"),
    },
    body: JSON.stringify({First_Name, Last_Name, Schedule, Status}),
  });
  await response.json();

  // logic for the client
  let new_doc = JSON.parse(JSON.stringify(doctor));
  for (let i = 0; i < new_doc.length; i++) {
    const element = new_doc[i];
    if (element._id === id) {
      console.log(id)
      new_doc[i].First_Name = First_Name;
      new_doc[i].Last_Name = Last_Name;
      new_doc[i].Schedule = Schedule;
      new_doc[i].Status = Status;
      break;
    }
  }
  setdoctor(new_doc)
};

//Functionality and API calling for deleting appointment
const delete_doctor = async (id) => {
  const response = await fetch(`${host}/admin/delete-doctor/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("admin-token"),
    },
  });
  await response.json();
  const del_dco = doctor.filter((e) => {
    return e._id !== id;
  });
  setdoctor(del_dco)
};

// //Functionality and API calling for upload the doctor image
// const upload_image = async (file) => {
//   const formData = new FormData();
//   formData.append('image', file);
//   console.log({formData})
//   const response = await fetch(`${host}/admin/upload-img`, {
//     method: "POST",
//     headers: {
//       "auth-token": localStorage.getItem("jwt-token"),
//     },
//     body: formData,
//   });
//   const data = await response.json();
//   // console.log(data);
//  return data;
// };

//Functionality and API calling for get the doctor image
const fetchImage = async (id) => {
  try {
    const response = await fetch(`${host}/admin/image/${id}`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("admin-token"),
        },
      });
      // console.log(response)
      return response.url;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

    return (
        <Admin_context.Provider value={{submit_form,signin_form, doctor, Add_doctor,fetch_doctors, update_doc_info,delete_doctor,fetchImage}}>
          {children}
        </Admin_context.Provider>
      );
}

export default Admin_state