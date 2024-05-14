// import React from 'react'

const User_signup_form = () => {
  return (
    <>
      <div className="container flex gap-3">
        <div className="box bg-[#53B78133] h-[105vh] w-[58vw]">
          <span>
            <img src="/Images/bro.png" alt="signin" className="py-7"/>
          </span>
        </div>
        <div className="box">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-4">
              <img src="/Images/Frame 15.png" alt="logo" className="-mt-[10px]"/>
              <div className="ml-[31px] mt-[14px] w-[33vw] border-solid shadow-lg ">
              <div className="-mr-[4rem]">
                  <h1 className="text-[#000000] text-2xl font-[700] title-font mx-4 leading-[12vh] font-[Lato]">Register Yourself</h1>
                </div>
                <div>
                  <form action="">
                    <div className="flex flex-wrap m-2">
                      <div className="flex"><input type="text" placeholder="First_Name" className="p-[0.7rem] m-[8px] bg-[whitesmoke] rounded" />
                      <input type="text" placeholder="Last_Name" className="pl-1 m-[8px] bg-[whitesmoke] rounded" />
                      </div>
                      <input type="text" placeholder="Username" className="mb-2 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                      <input type="number" placeholder="Phone Number" className="mb-2 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                      <input type="password" placeholder="Password" className="mb-2 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                      <input type="number" placeholder="Age" className="mb-3 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                      <div>
                        <fieldset>
                          <legend className="text-lg text-black">Gender</legend>
                         <div className="flex">
                          <div className="mx-3">
                            <input type="radio" id="huey" name="drone" value="huey" checked />
                            <label htmlFor="huey" className="mx-2">Male</label>
                          </div>
                          <div>
                            <input type="radio" id="dewey" name="drone" value="dewey" />
                            <label htmlFor="dewey">Female</label>
                          </div>
                          </div>
                        </fieldset>
                        </div>
                    </div>
                        <button className="text-center text-white m-[8px] p-[13px] w-[424px] font-bold bg-green-600" >Signup<span className="text-xl px-2 font-bold">&rarr;</span></button>
                  </form>
                </div>
                <div className="flex justify-center">
                  <h3 className="mx-3">Have been you here</h3>
              <button>Login</button>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default User_signup_form