import React, { useContext, useState, useEffect } from 'react';
import userContext from '../../context/user_context';
import { NavLink, useNavigate } from 'react-router-dom';
import Edit_user_info from './Edit_user_info';

const User_signup_form = () => {
  const navigate = useNavigate();  

  const { submit_form } = useContext(userContext);

  const [input, setInput] = useState({
    First_Name: "",
    Last_Name: "",
    User_Name: "",
    Phone_Number: "",
    Password: "",
    Age: "",
    Gender: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit_form(
       input.First_Name, 
       input.Last_Name,
       input.User_Name, 
       input.Phone_Number, 
       input.Password, 
       input.Age, 
       input.Gender);
       localStorage.setItem('Patient_name',input.First_Name,input.Last_Name)
    };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="container flex flex-col lg:flex-row gap-3 mx-auto">
      <div className="box bg-[#53B78133] lg:w-[58vw] w-full flex justify-center items-center">
        <span>
          <img src="/Images/bro.png" alt="signin" className="py-7 mx-auto" />
        </span>
      </div>
      <div className="box w-full lg:w-auto flex justify-center items-center">
        <section className="text-gray-600 body-font relative w-full">
          <div className="container px-5 py-10 lg:py-[90px] mx-auto">
            <img src="/Images/Frame 15.png" alt="logo" className="mx-auto lg:mx-0 lg:-mt-[10px]" />
            <div className="mx-auto lg:ml-[31px] py-4 mt-[46px] w-full lg:w-[33vw] border-solid shadow-dark_shadow bg-white rounded-lg">
              <div className="text-center lg:text-left">
                <h1 className="text-[#000000] text-2xl font-bold mx-4 leading-[12vh] font-[Lato]">Register Yourself</h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap m-2">
                    <div className="w-full lg:w-1/2 px-2">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="p-[0.7rem] mb-2 w-full bg-[whitesmoke] rounded" 
                        name="First_Name" 
                        id="First_Name" 
                        value={input.First_Name} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full lg:w-1/2 px-2">
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="p-[0.7rem] mb-2 w-full bg-[whitesmoke] rounded" 
                        name="Last_Name" 
                        id="Last_Name" 
                        value={input.Last_Name} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full px-2">
                      <input 
                        type="text" 
                        placeholder="Username" 
                        className="p-[0.7rem] mb-2 w-full bg-[whitesmoke] rounded" 
                        name="User_Name" 
                        id="User_Name" 
                        value={input.User_Name} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full px-2">
                      <input 
                        type="number" 
                        placeholder="Phone Number" 
                        className="p-[0.7rem] mb-2 w-full bg-[whitesmoke] rounded" 
                        name="Phone_Number" 
                        id="Phone_Number" 
                        value={input.Phone_Number} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full px-2">
                      <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-[0.7rem] mb-2 w-full bg-[whitesmoke] rounded" 
                        name="Password" 
                        id="Password" 
                        value={input.Password} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full px-2">
                      <input 
                        type="number" 
                        placeholder="Age" 
                        className="p-[0.7rem] mb-3 w-full bg-[whitesmoke] rounded" 
                        name="Age" 
                        id="Age" 
                        value={input.Age} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="w-full px-2">
                      <fieldset className="mb-4" onChange={handleChange}>
                        <legend className="text-lg text-black mb-2">Gender</legend>
                        <div className="flex">
                          <div className="mr-4">
                            <input 
                              type="radio" 
                              name="Gender" 
                              value="Male" 
                              onChange={handleChange} 
                              checked={input.Gender === "Male"} 
                            />
                            <label htmlFor="Male" className="ml-2">Male</label>
                          </div>
                          <div>
                            <input 
                              type="radio" 
                              name="Gender" 
                              value="Female" 
                              onChange={handleChange} 
                              checked={input.Gender === "Female"} 
                            />
                            <label htmlFor="Female" className="ml-2">Female</label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <button className="text-center text-white m-[8px] p-[13px] w-full lg:w-[424px] font-bold bg-green-600 rounded-lg">Signup<span className="text-xl px-2 font-bold">&rarr;</span></button>
                </form>
              </div>
              <div className="flex justify-center py-[12px]">
                <h3 className="mx-1">Have you been here?</h3>
                <NavLink className="text-green_dark" to="/" role="button">Login</NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden lg:block"><Edit_user_info/></div>
    </div>
  );
}

export default User_signup_form;
