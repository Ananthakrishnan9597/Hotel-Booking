import React, { useState } from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

function NewsLetter(){
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState("");
    const [emailList, setEmailList] = useState([]);
    const [showList, setShowList] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email && !emailList.includes(email)) {
            setEmailList([...emailList, email]);
        }
        window.dispatchEvent(new CustomEvent('newsletter-subscribe', { detail: email }));
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 2000);
    }

    const removeEmail = (emailToRemove) => {
        setEmailList(emailList.filter((e) => e !== emailToRemove));
    }

    return(
        <>
          <div className="flex flex-col items-center  max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      <Title title="Stay Inspired" subTitle="Stay inspired with comfort, calm surroundings, and thoughtful hospitality that turns every hotel stay into a refreshing experience."/>
    <form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <div className="relative max-w-66 w-full">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full pr-10" placeholder="Enter your email"/>
            <img src={assets.listIcon} onClick={()=>setShowList(!showList)} className="absolute right-3 top-3 w-4 cursor-pointer hover:scale-110 transition-all" alt="list-icon" />
            
            {showList && (
                <div className="absolute top-12 left-0 w-full bg-white text-gray-800 rounded shadow-lg z-10 max-h-40 overflow-y-auto">
                    {emailList.length === 0 ? (
                        <p className="p-2 text-sm text-center text-gray-500">No emails yet</p>
                    ) : (
                        emailList.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-2 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                <p onClick={() => { setEmail(item); setShowList(false); }} className="text-sm truncate max-w-[80%] cursor-pointer">{item}</p>
                                <img src={assets.closeIcon} onClick={() => removeEmail(item)} className="w-3 cursor-pointer opacity-60 hover:opacity-100" alt="remove" />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
            <button className={`flex items-center justify-center gap-2 group ${subscribed ? 'bg-green-500' : 'bg-black'} px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all`}>Subscribe
                <img src={assets.arrowIcon} alt="arrow-icon" className="w-3.5 invert group-hover:translate-x-1 transition-all" />
            </button>
    </form>
    <p className="text-gray-500 mt-6 text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
</div>

        </>
    )
}
export default NewsLetter