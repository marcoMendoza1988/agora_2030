import React from "react";
import page_under_construction from '../../../assets/page_under_construction.jpeg';

const PageUnderConstruction:React.FC = () => {
    return (
        <div className="sm:h-[100vh] md:h-auto w-full pt-[1rem]">
            <img className="sm:h-[100vh] md:h-auto mx-auto sm:w-full md:w-1/2" src={page_under_construction} alt="page under construction"/>
        </div>
    );
}

export default PageUnderConstruction;
