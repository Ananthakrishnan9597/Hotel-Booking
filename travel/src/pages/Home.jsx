import React, { useState } from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import { useAuth, SignIn } from "@clerk/clerk-react";

function Home(){
    const { isLoaded, isSignedIn } = useAuth();
    const [showLogin, setShowLogin] = useState(false);

    return(
        <>
        <div onClickCapture={(e)=>{
            if(isLoaded && !isSignedIn){
                let target = e.target;
                let isInteractive = false;
                while(target && target !== e.currentTarget){
                    if(['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'IMG'].includes(target.tagName)){
                        isInteractive = true;
                        break;
                    }
                    target = target.parentElement;
                }
                if(isInteractive){
                    e.preventDefault()
                    e.stopPropagation()
                    setShowLogin(true)
                }
            }
        }}>
         <Hero/>
         <FeatureDestination/>
         <ExclusiveOffers/>
         <Testimonial/>
         <NewsLetter/>
        </div>
        {showLogin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="relative">
                    <button onClick={()=>setShowLogin(false)} className="absolute -top-10 right-0 text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <SignIn/>
                </div>
            </div>
        )}
        </>
    )
}
export default Home