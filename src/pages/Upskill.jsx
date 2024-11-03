import Chapters from "../menu/Chapters";
import { useState } from "react";
const Upskill = () => {
    const [learnigMaterial, setLearningMaterial] = useState(false);
    const [mentorSessions, setMentorSessions] = useState(false);

    const handleLearningMaterial = () => {
        setLearningMaterial(!learnigMaterial);
        setMentorSessions(false);
    }

    const handleMentorSession = () => {
        setMentorSessions(!mentorSessions);
        setLearningMaterial(false);
    } 

    return (
        <div className="flex flex-col relative  m-16  bg-white h-screen border border-sky-100 rounded-md">
            <div className="flex flex-col md:flex-row m-4 shadow-sm shadow-sky-100">
                <div className="flex flex-col md:flex-row max-h-fit bg-gradient-to-b from-blue-100 to-transparent rounded-md">
                
                    <button onClick= {handleMentorSession}className="m-2 focus:rounded-md focus:shadow-xl focus:border-b-2 focus:border-slate-400 focus:bg-gray-50">
                    <div className="flex flex-row p-2">
                    <svg width="20" height="21" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 9.83333V4.5M21.3334 9.83333V4.5M9.33336 15.1667H22.6667M6.6667 28.5H25.3334C26.0406 28.5 26.7189 28.219 27.219 27.719C27.7191 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.7191 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3334 7.16667H6.6667C5.95945 7.16667 5.28118 7.44762 4.78108 7.94772C4.28098 8.44781 4.00003 9.12609 4.00003 9.83333V25.8333C4.00003 26.5406 4.28098 27.2189 4.78108 27.719C5.28118 28.219 5.95945 28.5 6.6667 28.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <h2 className="ml-2"> Mentor Sessions</h2>
                    </div>
                    </button>
                    
                    
                    <button  onClick= {handleLearningMaterial} className="m-2 focus:rounded-md focus:shadow-xl focus:border-b-2 focus:border-slate-400 focus:bg-gray-50">
                    <div className="flex flex-row p-2">
                    <svg width="20" height="21" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 16.1734C21.1873 17.715 17.1126 18.505 13 18.5C8.75603 18.5 4.7067 17.6734 1.00003 16.1734M18.3334 6.50002V3.83335C18.3334 3.12611 18.0524 2.44783 17.5523 1.94774C17.0522 1.44764 16.3739 1.16669 15.6667 1.16669H10.3334C9.62612 1.16669 8.94784 1.44764 8.44775 1.94774C7.94765 2.44783 7.6667 3.12611 7.6667 3.83335V6.50002M13 14.5H13.0134M3.6667 25.1667H22.3334C23.0406 25.1667 23.7189 24.8857 24.219 24.3856C24.7191 23.8855 25 23.2073 25 22.5V9.16669C25 8.45944 24.7191 7.78117 24.219 7.28107C23.7189 6.78097 23.0406 6.50002 22.3334 6.50002H3.6667C2.95945 6.50002 2.28118 6.78097 1.78108 7.28107C1.28098 7.78117 1.00003 8.45944 1.00003 9.16669V22.5C1.00003 23.2073 1.28098 23.8855 1.78108 24.3856C2.28118 24.8857 2.95945 25.1667 3.6667 25.1667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>              
                    <h2 className="ml-2">Learning Material</h2>
                    </div>
                    </button>
                    

                </div>


                <div className="max-h-fit flex flex-row md:absolute top-1 right-1 m-4 p-2 border rounded-md border-sky-200">
                <svg width="20" height="21" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3333 21.8333H16V16.5H14.6667M16 11.1667H16.0133M28 16.5C28 18.0759 27.6896 19.6363 27.0866 21.0922C26.4835 22.5481 25.5996 23.871 24.4853 24.9853C23.371 26.0996 22.0481 26.9835 20.5922 27.5866C19.1363 28.1896 17.5759 28.5 16 28.5C14.4241 28.5 12.8637 28.1896 11.4078 27.5866C9.95189 26.9835 8.62902 26.0996 7.51472 24.9853C6.40042 23.871 5.5165 22.5481 4.91345 21.0922C4.31039 19.6363 4 18.0759 4 16.5C4 13.3174 5.26428 10.2652 7.51472 8.01472C9.76516 5.76428 12.8174 4.5 16 4.5C19.1826 4.5 22.2348 5.76428 24.4853 8.01472C26.7357 10.2652 28 13.3174 28 16.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <h2 className="ml-2">How it works</h2>
                </div>
            </div>
            {learnigMaterial && (
                <div className="flex flex-row  max-h-screen m-4 ">
                   <div className="m-2 w-1/3 "> <Chapters /> </div>
                   <div className="m-2 w-2/3 border border-sky-100 shadow-md rounded-md"> <Chapters/> </div>
                </div>
            )}
            {mentorSessions && (
                <div className="flex h-screen m-4 items-center justify-center">
                    This is a mentor session.
                </div>
            )}
        </div>
    );
    }

export default Upskill;