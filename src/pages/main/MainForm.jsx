import React  from "react";

const MainForm = ({ setFakeData }) => {
    const getFakeData = () => {
        setFakeData([1, 2, 3, 4]);
    };

    return (
        <div className="main-form">
            <div className="row">
                <div className="col-md main-form-item">
                    <input type="text" className="form-control" placeholder="откуда"/>
                </div>
                <div className="col-md main-form-item">
                    <input type="text" className="form-control" placeholder="куда"/>
                </div>
                <div className="col-md main-form-item">
                    <input type="text" className="form-control" placeholder="когда"/>
                </div>
                <div className="col-md main-form-item">
                    <button className="btn btn-primary btn-block" type="submit" onClick={getFakeData}>
                        искать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainForm;
