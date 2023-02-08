import { useState } from "react";

const SaleCalculator = () => {
    const [cost, setCost] = useState(0);
    const [percentage, setPercentage] = useState(0);
    function changeCost(e) {
        let input = e.target.value;
        if (input > 0 && input <= 1000000)
            setCost(input);
    }
    function changePercentage(e) {
        let input = e.target.value;
        if (input > 0 && input < 100)
            setPercentage(input);
    }
    return (
        <>
            <div className="text-center container whiteText">
                <div className="titleSection">
                    <h2>Sale Calculator</h2>
                    <p><i>Calculate the percentage off of a purchase.</i></p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3 offset-sm-3 col-6">
                        <h5>Cost of Item</h5>
                        <input type="number" className="form-control" onChange={changeCost} placeholder="Item Price" maxLength={3} />
                    </div>
                    <div className="col-sm-3 col-6">
                        <h5>Percentage Off</h5>
                        <input type="number" className="form-control" onChange={changePercentage} placeholder="Percentage" />
                    </div>
                </div>
                <hr />
                <h5>Cost (before Saving): {cost}</h5>
                <h5>Saving: {percentage === 0 || cost=== 0?0:(percentage / 100 * cost).toFixed(2)}</h5>
                <h5>Cost (after Saving): {percentage ===0 || cost===0?0:(cost - percentage / 100 * cost).toFixed(2)}</h5>
                <br />
            </div>
        </>
    )
};
export default SaleCalculator;