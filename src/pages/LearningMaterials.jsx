import Chapters from "../menu/Chapters";
import React from "react";

const LearningMaterials = () => {
    
    return (
        <div className="flex flex-row relative  w-full m-4 bg-white max-h-fit overflow-scroll  0 rounded-md">
            <Chapters />
            
        </div>
    );
    }

export default LearningMaterials;