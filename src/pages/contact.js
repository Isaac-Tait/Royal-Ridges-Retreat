import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Comments = () => {
    return (
        <div>
            <Header />

            <div className="max-w-6xl flex mx-auto">
            <hr />
            <form 
                data-netlify-honeypot="bot-field"
                name="contact" 
                method="POST" 
                data-netlify="true" 
                action="/success"
                className="w-full"
            >
            <input type="hidden" name="form-name" value="contact" />
                <div className="my-4 flex flex-col">
                    <label htmlFor="name">Name
                        <input
                            className="border-2 border-yellow-400 w-1/4" 
                            type="text" 
                            name="name" 
                        />
                    </label>
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Email
                        <input 
                            className="border-2 border-yellow-400 w-1/4"
                            type="email" 
                            name="email" 
                            
                        />
                    </label>
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="phone">Phone
                        <input
                            className="border-2 border-yellow-400 w-1/4"
                            type="text" 
                            name="phone" 
                        />
                    </label>
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="message">Message
                        <textarea
                            className="overflow-y-auto h-60 border-2 border-yellow-400"            
                            type="text" 
                            name="message" 
                        />
                    </label>
                </div>
                
                <button type="submit" className="bg-indigo-200 text-gray-700 hover:bg-yellow-200 hover:text-green-200 rounded-2xl w-1/4 flex mx-auto cursor-pointer">
                    <p className="underline flex mx-auto">Send</p>
                </button>
                
            </form>
        </div>
            <Footer />
        </div>
    )

}

export default Comments;