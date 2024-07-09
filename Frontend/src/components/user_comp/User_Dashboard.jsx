import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/user_context';
import Show_doctor from '../../components/admin_panel/Show_doctor';
import SearchBar from './Search_bar'; // Import the SearchBar component
import Show_appointment from './Show_appointment'
import Edit_user_info from './Edit_user_info'
import { useNavigate } from "react-router-dom";

const User_dashboard = ({update_name}) => {
  const navigate = useNavigate()
  const { appointment, fetch_appointments,upload_image, fetchImage  } = useContext(userContext);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (fetch_appointments) {
      fetch_appointments();
    }
  }, []);

  if(localStorage.getItem('jwt-token') == null){
    navigate('/')
  }
  const getImage = async () => {
    const src = await fetchImage();
    setImgSrc(src);
  };
  useEffect(() => {
    if (imgSrc === null) getImage();
  }, [imgSrc]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const submitImg = async () => {
    if (file) {
      await upload_image(file);
    } else {
      alert("Please select a file first.");
    }
  };

  const uploadImage = async () => {
    if (file) {
      await upload_image(file);
    }
  };

  useEffect(() => {
    uploadImage();
  }, [file]);

  const handle_click = () => {
    localStorage.removeItem("jwt-token")
    navigate('/')
  }

  const user_name = localStorage.getItem('username');

  return (
    <>
      <div className='overflow-x-clip'>
      <header className="text-gray-600 body-font bg-[#53B781] sticky top-0">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-auto md:h-[12vh] py-4 md:py-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <img className="mx-2 h-8 md:h-12" src="/Images/Random Symboles 8.png" alt="header" />
            <h1 className="font-bold text-2xl text-white">Wah International</h1>
            <div className="md:hidden">
              <img onClick={handle_click} className="cursor-pointer h-6 w-6 ml-2" src="/Images/Vector.png" alt="logout" />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end mr-[17px] px-5 border-search border-white rounded-[30px]">
            <Edit_user_info update_name={update_name} />
            <h1 className="text-gray_light font-bold font-[Lato]">{user_name}</h1>
            <div className="image-upload">
              <label htmlFor="file-input" onClick={submitImg}>
                {imgSrc ? (
                  <img className="h-12 w-12 rounded-full cursor-pointer my-1" src={imgSrc} alt="profile" />
                ) : (
                  <span className="cursor-pointer text-white">Choose the image</span>
                )}
              </label>
              <input className="hidden" id="file-input" type="file" onChange={handleFileChange} />
            </div>
          </div>
            <img onClick={handle_click} className="hidden md:block cursor-pointer h-6 w-6" src="/Images/Vector.png" alt="logout" />
        </div>
      </header>
        <section>
          <div className="flex md:flex-row justify-around mx-2 md:mx-12 my-4 md:my-9 text-lg font-bold text-doc_black">
            <h1 role="button" onClick={() => setActiveSection('dashboard')}>Doctors</h1>
            <h1 role="button" onClick={() => setActiveSection('appointments')}>Appointments</h1>
            <SearchBar onSearch={setSearchQuery}/>
          </div>
          {activeSection === 'dashboard' && (
            <div className="mx-2 md:mx-11 text-doc_black">
              <Show_doctor searchQuery={searchQuery}/>
            </div>
          )}
          {activeSection === 'appointments' && (
             <div className="overflow-hidden">
             <Show_appointment/>
             </div>
          )}
          {activeSection === 'doctors' && (
            <div className="mx-2 md:mx-11">
              <Show_doctor searchQuery={searchQuery}/>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default User_dashboard;
