import DownToggle from "../components/DownToggle";
import { useState } from "react";
import UpToggle from "../components/UpToggle";
import Part1Header from "../components/Part1Header";
import Part2Header from "../components/Part2Header";
import Part3Header from "../components/Part3Header";
import CompleteComponent2 from "../components/CompleteComponent2";
import CompleteComponent1 from "../components/CompleteComponent1";
import CompleteComponent3 from "../components/CompleteComponent3";
import Part1Content from "../components/Part1Content";
import Part2Content from "../components/Part2Content";
import Part3Content from "../components/Part3Content";

const Chapter1 = () => {
    
    const [downToggle1, setDownToggle1] = useState(true);
    const [downToggle2, setDownToggle2] = useState(false);
    const [downToggle3, setDownToggle3] = useState(false);

    const handleToggle1 = () => {
        setDownToggle1(!downToggle1);
    }
    
    const handleToggle2 = () => {
        setDownToggle2(!downToggle2);
    }

    const handleToggle3 = () => {
        setDownToggle3(!downToggle3);
    }

    return (
        <div className="flex flex-col h-full overflow-y-scroll p-2 w-full rounded-md">
            <div className="flex flex-col">
            <div className=" relative flex flex-row m-2 mb-0 p-2 shadow-md rounded-md border border-sky-100 ">
                <div className="font-dm-sans">
                    <h1>PART 1</h1>
                    <p className="font-dm-sans font-extrabold text-sm">Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className="absolute flex top-2 right-2 ">
                    <Part1Header/>
                    <button onClick={handleToggle1}>
                        {downToggle1===false ? (<DownToggle/> ): (<UpToggle/>)}
                    </button>
                </div>
                <div className="absolute flex top-12 right-2 mt-2 ">
                    
                    <CompleteComponent1/>
                </div>
                <div className="flex flex-row">
                    <div className="absolute mb-0 rounded-bl-md bottom-0 left-0 w-[45%] h-1 bg-[#172B4DD9]"></div>
                    <div className="absolute mb-0 rounded-br-md bottom-0 right-0 w-[55%] h-1 bg-[#EFF5FF]"></div>

                </div>
            </div>
            <div className="">
                {downToggle1 && <Part1Content/>}
            </div>
            </div>


            <div className="flex flex-col">
            <div className=" relative flex flex-row m-2 mb-0 p-2 shadow-md rounded-md border border-sky-100 ">
                <div className="font-dm-sans">
                    <h1>PART 2</h1>
                    <p className="font-dm-sans font-extrabold text-sm">Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className="absolute flex top-2 right-2 ">
                    <Part2Header/>
                    <button onClick={handleToggle2}>
                        {downToggle2===false ? (<DownToggle/> ): (<UpToggle/>)}
                    </button>
                </div>
                <div className="absolute flex top-12 right-2 mt-2 ">
                    
                    <CompleteComponent2/>
                </div>
                <div className="flex flex-row">
                    <div className="absolute mb-0 rounded-bl-md bottom-0 left-0 w-[20%] h-1 bg-[#172B4DD9]"></div>
                    <div className="absolute mb-0 rounded-br-md bottom-0 right-0 w-[80%] h-1 bg-[#EFF5FF]"></div>

                </div>
            </div>
            <div>
                {downToggle2 && <Part2Content/>}
            </div>
            </div>


            <div className="flex flex-col">
            <div className=" relative flex flex-row m-2 mb-0 p-2 shadow-md rounded-md border border-sky-100 ">
                <div className="font-dm-sans">
                    <h1>PART 3</h1>
                    <p className="font-dm-sans font-extrabold text-sm">Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className="absolute flex top-2 right-2 ">
                    <Part3Header/>
                    <button onClick={handleToggle3}>
                        {downToggle3===false ? (<DownToggle/> ): (<UpToggle/>)}
                    </button>
                </div>
                <div className="absolute flex top-12 right-2 mt-2 ">
                    
                    <CompleteComponent3/>
                </div>
                <div className="flex flex-row">
                    <div className="absolute mb-0 rounded-bl-md bottom-0 left-0 w-[0%] h-1 bg-[#172B4DD9]"></div>
                    <div className="absolute mb-0 rounded-br-md bottom-0 right-0 w-[100%] h-1 bg-[#EFF5FF]"></div>

                </div>
            </div>
            <div>
                {downToggle3 && <Part3Content/>}
            </div>
            </div>
        </div>
    );
}

export default Chapter1;