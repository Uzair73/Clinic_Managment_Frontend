import { useContext, useState, useEffect } from 'react';
import userContext from '../../context/user_context';
import { NavLink, useNavigate } from 'react-router-dom';

const User_login_form = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt-token") !== null) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const { signin_form } = useContext(userContext);
  const [input, setInput] = useState({
    User_Name: "",
    Password: ""
  });

  const handle_submit = (e) => {
    e.preventDefault();
    signin_form(input.User_Name, input.Password);
    localStorage.setItem("username", input.User_Name);
  };

  const handle_Change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="container flex flex-col lg:flex-row gap-3">
      <div className="box bg-[#53B78133] lg:h-[105vh] lg:w-[58vw] w-full md:w-[100vw] max-sm:absolute max-sm:top-[71vh] max-sm:left-[2vw] max-sm:bg-white flex justify-center items-center">
        <span>
          <img src="/Images/pana.png" alt="signin" className="py-7 lg:mx-auto" />
        </span>
      </div>
      <div className="box w-full lg:w-auto flex justify-center items-center max-sm:mx-auto">
        <section className="text-gray-600 body-font relative w-full">
          <div className="container px-5 py-10 lg:py-[90px] mx-auto">
            <img src="/Images/Frame 15.png" alt="logo" className="mx-auto lg:mx-0 lg:-mt-[10px]" />
            <div className="mx-auto lg:ml-[31px] py-4 mt-[46px] w-full lg:w-[33vw] border-solid shadow-dark_shadow bg-white rounded-lg">
              <div className="text-center lg:text-left">
                <h1 className="text-[#000000] text-2xl font-bold mx-4 leading-[12vh] font-[Lato]">Login</h1>
              </div>
              <div>
                <form onSubmit={handle_submit}>
                  <div className="flex flex-wrap m-2">
                    <input type="text" placeholder="Username" name='User_Name' id='User_Name' value={input.User_Name} onChange={handle_Change} className="mb-2 p-[0.7rem] mx-2 w-full bg-[whitesmoke] rounded" />
                    <input type="password" placeholder="Password" name='Password' id='Password' value={input.Password} onChange={handle_Change} className="mb-2 p-[0.7rem] mx-2 w-full bg-[whitesmoke] rounded" />
                  </div>
                  <button className="text-center text-white m-[8px] p-[13px] w-[93%] font-bold bg-green-600 rounded-lg">Login<span className="text-xl px-2 font-bold">&rarr;</span></button>
                </form>
              </div>
            </div>
            <div className="flex justify-center py-[12px]">
              <h3 className="mx-1">Not here?</h3>
              <NavLink className="text-green_dark" to="/signup" role="button">Register with us</NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default User_login_form;
