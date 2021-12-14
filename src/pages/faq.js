import React from "react"

import Header from "../components/header";
import Footer from "../components/footer";

const Faq = () => {
    return (
        <div>
        <Header />
            <div className="h-screen flex">
                <div className="max-w-4xl mx-auto mt-8 overflow-y-scroll">
                    <h1 className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">FAQs</h1>
                    <p>As a parent or guardian of a camper, you play an integral role in the success of your camper’s experience. Royal Ridges Retreat is excited to partner with you to create a memorable time for your child. If you are ready to register, head over to Summer Day Camps. You must log in or create an account at <a href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">UltraCamp</a> to finalize registration. </p>
                
                    <h2 className="text-green-200 font-bold text-xl mt-2">How do I register my child for Summer Camp?</h2>
                    <p>Log in or create an account with <a href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">UltraCamp</a>. Follow the on-screen instructions to register as many campers as you would like. Choose your week of camp and any options (Bus transportation, store card,(store cards will be available after January 1, 2022) etc.). Pay using credit or e-check. You must pay a 35% deposit to hold your registration. You will automatically receive a confirmation email, a packing list, and the Parent Handbook.  If you don’t receive your confirmation email, please call the office at 360.686.3737, and we will check on the status of your reservation.</p>
                    
                    <h2 className="text-green-200 font-bold text-xl mt-2">What should my child bring/not bring to camp?</h2>
                    <p>You must complete medical and Liability Forms before your child attends camp. You will have to log in to your <a href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">UltraCamp</a> account to complete all necessary forms.</p>
                    
                    <h2 className="text-green-200 font-bold text-xl mt-2">How do I fill out the Medical Information for my child?</h2>
                    <p> This list of items will prepare your camper to have the best time at camp. You must bring items with an asterisk.</p>
                        <ul>
                            <li className="ml-2">* Backpack</li>
                            <li className="ml-2">* Lunch packed in a self-insulated lunch box.</li>
                            <li className="ml-2">* Closed-toe shoes. (Boots preferred for Day Horse Campers)</li>
                            <li className="ml-2">* Sunscreen and Bug Spray</li>
                            <li className="ml-2">* Swimsuit (Girls: one-piece only) for Water games</li>
                            <li className="ml-2">* Towel</li>
                            <li className="ml-2">* Change of clothes</li>
                            <li className="ml-2">* Jacket or sweatshirt (Mornings are often chilly here!)</li>
                            <li className="ml-2">* Face mask for Bus Transportation (Day Horse Campers will ride the bus up and down the hill each day)</li>
                            <li className="ml-2">* Campers should wear modest, comfortable, casual clothes. Modest clothing is loose, not tight; concealing, not revealing.</li>
                                <p className="italic ml-6">Please remember your camper will get dirty!</p>
                            <li className="ml-2">* Do not send expensive clothes, shoes, or jewelry to cam</li>
                            <li className="ml-2">* Please leave all your electronic devices at home (i.e., cell phones, smartwatches, etc.)</li>        
                        </ul>
                    <h2 className="text-green-200 font-bold text-xl mt-2">Where do I drop off my child for camp?</h2>
                    <p>For the quickest drop-off experience, remember to pay your bill in total, and complete all necessary paperwork before arriving at camp. Early check-in is not available. Camper check-in begins each morning at the check-in station beginning at 8:30 am. Because our staff will be preparing the camp for your arrival, early check-in will not be possible.</p>

                    <h2 className="text-green-200 font-bold text-xl mt-2">What time do I pick up my child at camp?</h2>
                    <p>To order Bus Transportation, you will need to log in to your UltraCamp account. You must be registered for a camp first before purchasing bus transportation. For a list of all bus routes and stops, use this link: Bus Transportation</p>
                    
                    <h2 className="text-green-200 font-bold text-xl mt-2">What time do I pick up my child at camp?</h2>
                    <p>To pick up your camper, arrive each day at 3:40 pm. If someone other than you is picking up your child, make sure they are listed as an authorized person for pick up and have a photo ID ready to show our staff.</p>

                    <h2 className="text-green-200 font-bold text-xl mt-2">Where is my child's group photo/Day Horse Camp video?</h2>
                    <p className="mb-4">Royal Ridges staff will take a photo of your child’s group during the week. We will send your child’s group photo in an email for you to download by the end of the following week. If you do not receive an email from us by the end of the week following attendance, please contact us, and we will resend it. Day Horse Campers will also receive a link to view a short video of their camper’s riding time.</p>
                </div>
            </div>
        <Footer />
        </div>


    )
}

export default Faq;