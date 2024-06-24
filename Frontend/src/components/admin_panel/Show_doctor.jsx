import React, { useState, useContext, useEffect } from 'react';
import doctor_context from '../../context/Admin_context';
import Update_info from './Update_info';
import Book_appointment from '../user_comp/Book_appointment';
import { useLocation } from 'react-router-dom';

const Show_doctor = () => {
    const location = useLocation();
    const Admin_dashboard = location.pathname.includes('admin');
    const { doctor, fetch_doctors, fetchImage } = useContext(doctor_context);

    useEffect(() => {
        if (fetch_doctors) {
            fetch_doctors();
        }
    }, []);

    // Logic for showing the image
    const [imgSrc, setimgSrc] = useState(null);

    const getImage = async () => {
        const src = await fetchImage();
        setimgSrc(src);
    };

    useEffect(() => {
        if (imgSrc === null) getImage();
    }, [imgSrc]);

    return (
        <>
            <div className="container flex flex-wrap mx-12 max-sm:mx-0">
                {doctor.map((doc) => (
                    <div key={doc._id} className="box flex my-2 justify-between mx-5 max-sm:mx-0 max-sm:w-full max-sm:flex-col">
                        <div>{console.log(doc._id)}</div>
                        <img className='max-sm:mx-1' src={fetchImage(doc.Image)} alt="doctor-img" />
                        <div className="inner-box flex flex-col justify-center bg-[#FBF8F8] w-[24vw] p-[40px] max-sm:w-full">
                            <h1 className="text-[2rem] my-2 font-[Lato]">
                                {doc.First_Name} 
                                {localStorage.setItem('doctor_name', doc.First_Name)}
                                <span className="text-[2rem] my-2 font-[Lato]">{doc.Last_Name}</span>
                            </h1>
                            <h3 className="font-[Lato] flex">
                                <img className='h-5 mx-3' src="/Images/img.png" alt="" />{doc.Schedule}
                            </h3>
                            <h3 className="font-[Lato] flex">
                                <img className='h-3 my-2 mx-3' src="/Images/Ellipse 1.png" alt="" />{doc.Status}
                            </h3>
                            <div className='my-4 h-[9vh] flex text-white bg-blue_dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                {Admin_dashboard ? (
                                    <Update_info doc_data={doc} id={doc._id} />
                                ) : (
                                    <Book_appointment />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Show_doctor;
