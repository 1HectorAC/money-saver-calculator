import { useState } from "react";

const SaleCalculator = () => {
    const [cost, setCost] = useState(0);
    const [percentage, setPercentage] = useState(0);
    return (
        <>
            <div className="text-center container whiteText">
                <div className="titleSection">
                    <h2>Sale Calculator</h2>
                    <p><i>Calculate the percentage off of a purchase.</i></p>
                    </div>
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col-md-2 offset-md-3">
                            <input type="number" className="form-control" onChange={(e) => setPercentage(e.target.value)} placeholder="Percentage" />
                        </div>
                        <div className="col-md-2">
                            <h5>% off </h5>
                        </div>
                        <div className="col-md-2">
                            <input type="number" className="form-control" onChange={(e) => { setCost(e.target.value) }} placeholder="Item Price" />
                        </div>
                    </div>
                    <hr />
                    <h5>Cost (before Saving): {cost}</h5>
                    <h5>Saving: {(percentage / 100 * cost).toFixed(2)}</h5>
                    <h5>Cost (after Saving): {(cost - percentage / 100 * cost).toFixed(2)}</h5>
                    <br />
                
            </div>
        </>
    )
};
export default SaleCalculator;