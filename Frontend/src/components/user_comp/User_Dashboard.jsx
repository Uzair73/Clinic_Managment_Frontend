import { useEffect, useState, useContext } from "react";
import Show_appointment from "./Show_appointment";
import Edit_user_info from "./Edit_user_info";
import { useNavigate } from "react-router-dom";
import userContext from '../../context/user_context';
import Show_doctor from "../admin_panel/Show_doctor";

const User_Dashboard = ({ update_name }) => {
  const { upload_image, fetchImage } = useContext(userContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [content, setContent] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("jwt-token") == null) {
      navigate("/");
    } else {
      setUsername(localStorage.getItem("username"));
    }
  }, [navigate]);

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
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("username");
    navigate('/');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-[#53B781]">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-auto md:h-[12vh] py-4 md:py-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <img className="mx-2 h-8 md:h-12" src="/Images/Random Symboles 8.png" alt="header" />
            <h1 className="font-bold text-2xl text-white">Wah International</h1>
            <div className="md:hidden">
              <img onClick={handle_click} className="cursor-pointer h-6 w-6 ml-2" src="/Images/Vector.png" alt="logout" />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <Edit_user_info update_name={update_name} />
            <h1 className="text-gray_light">{username}</h1>
            <div className="image-upload">
              <label htmlFor="file-input" onClick={submitImg}>
                {imgSrc ? (
                  <img className="h-12 w-12 rounded-full cursor-pointer" src={imgSrc} alt="profile" />
                ) : (
                  <span className="cursor-pointer text-white">Choose the image</span>
                )}
              </label>
              <input className="hidden" id="file-input" type="file" onChange={handleFileChange} />
            </div>
            <img onClick={handle_click} className="hidden md:block cursor-pointer h-6 w-6" src="/Images/Vector.png" alt="logout" />
          </div>
        </div>
      </header>
      <section className="py-4">
        <div className="container mx-auto flex md:flex-row items-center px-5">
          <div className={`box bg-[#FBF8F8] hover:text-[#1E9AF1] cursor-pointer m-2 px-3 py-2 ${content ? 'text-blue-500' : ''}`} onClick={() => setContent(true)}>
            <h1>Doctor</h1>
          </div>
          <div className={`box bg-[#FBF8F8] hover:text-[#1E9AF1] cursor-pointer m-2 px-3 py-2 ${!content ? 'text-blue-500' : ''}`} onClick={() => setContent(false)}>
            <h1>Appointment</h1>
          </div>
          <div className="flex-grow">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="🔍 Search Doctor"
              value={searchQuery}
              onChange={handleSearch}
              className="px-3 pl-5 py-2 w-full md:w-1/3 ml-auto rounded-[55px] border"
            />
          </div>
        </div>
        {content ? (
          <Show_doctor/>
        ) : (
          <div className="container mx-auto"><Show_appointment /></div>
        )}
      </section>
    </>
  );
};

export default User_Dashboard;
