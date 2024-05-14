// import React from 'react'

const User_login_form = () => {
  return (
    <>
     <div className="container flex gap-3">
        <div className="box bg-[#53B78133] h-[105vh] w-[58vw]">
          <span>
            <img src="/Images/pana.png" alt="signin" className="py-7"/>
          </span>
        </div>
        <div className="box">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-[90px]">
              <img src="/Images/Frame 15.png" alt="logo" className="-mt-[10px]"/>
              <div className="ml-[31px] py-4 mt-[46px] w-[33vw] border-solid shadow-lg ">
              <div className="-mr-[4rem]">
                  <h1 className="text-[#000000] text-2xl font-[700] title-font mx-4 leading-[12vh] font-[Lato]">Login</h1>
                </div>
                <div>
                  <form action="">
                    <div className="flex flex-wrap m-2">
                      <input type="text" placeholder="Username" className="mb-2 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                      <input type="password" placeholder="Password" className="mb-2 p-[0.7rem] mx-2 w-[45rem] bg-[whitesmoke] rounded" />
                    </div>
                        <button className="text-center text-white m-[8px] p-[13px] w-[424px] font-bold bg-green-600" >Login<span className="text-xl px-2 font-bold">&rarr;</span></button>
                  </form>
                </div>
              </div>
              <div className="flex justify-center py-[12px]">
                  <h3 className="mx-3">Not here?</h3>
              <button>Register with us</button>
                </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default User_login_form