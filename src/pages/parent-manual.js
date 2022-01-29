import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const ParentsManual = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <Header />
                <div className="h-screen max-w-6xl mx-auto text-gray-800">
                    <img 
                        src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/headers/ParentsSurvivalManual.png'
                        alt='faqs'
                        className='w-1/2 flex mx-auto rounded-xl my-6'
                    />
                    <div className="text-center mt-8">
                    <p>If you have any questions or concerns about your child's summer camp adventures please read the information packets linked below. If it does not answer your question(s) than please feel free to contact us.</p>
                        <a 
                            href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Parent_Manual_Summer_Camp.pdf" 
                            className="text-green-200 hover:underline hover:text-indigo-400 rounded-md"
                        >Parent's Manual</a>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default ParentsManual;