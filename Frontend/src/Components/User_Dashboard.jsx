// import React from 'react'

const User_Dashboard = () => {
  return (
    <>
    <header className="text-gray-600 body-font bg-[#53B781]">
  <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
    <img className="mx-2" src="/Images/Random Symboles 8.png" alt="header" />
    <h1 className=" float-left font-bold text-2xl text-white">Wah International</h1>
    <span className="ml-[60vw] border-solid border-black">
      <div className="flex gap-4">
      <img src="/Images/Vector@2x.png" alt="profile" />
      <h1 className="w-[6vw]">user name</h1>
      <img className="w-[2vw]" src="/Images/Group 12@2x.png" alt="profile" />
      <img src="/Images/Vector.png" alt="profile" />
      </div>
    </span>
  </div>
</header>

<section>
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="box bg-[#FBF8F8] hover:text-[yellow] cursor-pointer m-10 pl-7">
      <h1>Doctor</h1>
    </div>
    <div className="box bg-[#FBF8F8] hover:text-[yellow] cursor-pointer m-10 pl-7">
      <h1>Appointment</h1>
    </div>
  </div>
    <div className="container flex flex-wrap m-[40px]">
      <div className="box flex my-2">
        <img src="/Images/Rectangle 8.png" alt="doctor-img" />
        <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw]">
          <h1>Dr. John Doe</h1>
          <h1>Monday - Friday</h1>
          <h1>Available</h1>
        </div>
      </div>
      <div className="box flex my-2">
        <img src="/Images/Rectangle 8.png" alt="doctor-img" />
        <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw]">
          <h1>Dr. John Doe</h1>
          <h1>Monday - Friday</h1>
          <h1>Available</h1>
        </div>
      </div>
      <div className="box flex my-2">
        <img src="/Images/Rectangle 8.png" alt="doctor-img" />
        <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw]">
          <h1>Dr. John Doe</h1>
          <h1>Monday - Friday</h1>
          <h1>Available</h1>
        </div>
      </div>
      <div className="box flex my-2">
        <img src="/Images/Rectangle 8.png" alt="doctor-img" />
        <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw]">
          <h1>Dr. John Doe</h1>
          <h1>Monday - Friday</h1>
          <h1>Available</h1>
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export default User_Dashboard