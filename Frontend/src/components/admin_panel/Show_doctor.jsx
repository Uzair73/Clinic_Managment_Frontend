import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import doctor_context from "../../context/Admin_context";
import Update_info from "./Update_info";
import Book_appointment from "../user_comp/Book_appointment";
import Remove_doctor from "../user_comp/Cancel_appointment";

const Show_doctor = ({ searchQuery,change }) => {
  const location = useLocation();
  const Admin_dashboard = location.pathname.includes("admin");
  const { doctor, fetch_doctors, fetchImage } = useContext(doctor_context);

  useEffect(() => {
    if (fetch_doctors) {
      fetch_doctors();
    }
  }, []);

  // Logic for showing the image
  const [imageUrls, setImageUrls] = useState({});
  useEffect(() => {
    const fetchImages = async () => {
      const urls = {};
      for (const doc of doctor) {
        const src = await fetchImage(doc.Image);
        urls[doc._id] = src;
      }
      setImageUrls(urls);
    };
    if (doctor.length > 0) {
      fetchImages();
    }
  }, [doctor, fetchImage]);

  const filteredDoctors = doctor.filter((doc) => 
    doc.First_Name.toLowerCase().includes(searchQuery?.toLowerCase()) ||
    doc.Last_Name.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="container flex flex-wrap mx-12 max-sm:mx-0">
      {filteredDoctors.length === 0 ? (
        <div className="w-full text-center mt-10">
          <h2 className="text-2xl font-bold">Nothing to show</h2>
        </div>
      ) : (
        filteredDoctors.map((doc) => (
          <div
            key={doc._id}
            className="box flex my-2 justify-between mx-5 max-sm:mx-0 max-sm:w-full max-sm:flex-col"
          >
            <img className="max-sm:mx-1 w-[32vh]" src={imageUrls[doc._id]} alt="doctor-img"/>
            <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw] p-[40px] max-sm:w-full">
              <div className="flex justify-end -mt-[12vh]">{Admin_dashboard && <Remove_doctor id={doc._id} text_change="admin"/>}</div>
              <h1 className="text-[2rem] my-2 font-[Lato]">
                {doc.First_Name}
                {localStorage.setItem("doctor_name", doc.First_Name)}
                <span className="text-[2rem] mx-2 my-2 font-[Lato]">
                  {doc.Last_Name}
                </span>
              </h1>
              <h3 className="font-[Lato] flex">
                <img className="h-5 mx-3" src="/Images/img.png" alt="" />
                {doc.Schedule}
              </h3>
              <h3 className="font-[Lato] flex">
                <img className="h-3 my-2 mx-4" src={doc.Status === "Available" ? "/Images/Ellipse 1.png" : "Images/gray-img-circle.jpeg"} alt="status-img"/>
                <div className="mx-0">{doc.Status}</div>
              </h3>
              <div>
                {Admin_dashboard  ? (
                  <Update_info doc_data={doc} id={doc._id}/>
                ) : (
                  <Book_appointment change={change}/>
                )}
              </div>
            </div>
          </div>
        ))
      )}</div>
  );
};

export default Show_doctor;
