import React, { useState } from "react";
import MainForm from "./MainForm";
import SearchResult from "./SearchResult";

const Main = () => {
    const [fakeData, setFakeData] = useState([]);

    return (
        <div className="container">
            <MainForm setFakeData={setFakeData} />
            <SearchResult fakeData={fakeData} />
        </div>
    );
};

export default Main;
