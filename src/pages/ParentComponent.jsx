import React, {useState} from "react";
import Chapter1 from "./Chapter1";
import LearningMaterials from "./LearningMaterials";

const ParentComponent = () => {
    const [selectedChapter, setSelectedChapter] = useState(1);

    return (
        <div>
            <Chapter1 setSelectedChapter={setSelectedChapter} />
            <LearningMaterials selectedChapter={selectedChapter} />
        </div>
    )
}

export default ParentComponent;

