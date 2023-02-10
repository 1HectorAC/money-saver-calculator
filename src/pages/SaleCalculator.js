import { useState } from "react";

const SaleCalculator = () => {
    const [cost, setCost] = useState(0);
    const [percentage, setPercentage] = useState(0);
    function changeCost(e) {
        let input = Number(e.target.value);
        if (input > 0 && input <= 1000000)
            setCost(input);
        else if (input > 1000000) {
            e.target.value = 1000000;
            setCost(1000000);
        }
        else if (input < 0) {
            e.target.value = 0;
            setCost(0);
        }
        else
            setCost(0);
    }
    function changePercentage(e) {
        let input = Number(e.target.value);
        if (input > 0 && input <= 100)
            setPercentage(input);
        else if (input > 100) {
            e.target.value = 100;
            setPercentage(100);
        }
        else if (input < 0) {
            e.target.value = 0;
            setPercentage(0);
        }
        else
            setPercentage(0);
    }
    return (
        <>
            <div className="text-center container whiteText">
                <div className="titleSection">
                    <h2>Sale Calculator</h2>
                    <p><i>Calculate the savings of a percentage off sale.</i></p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3 offset-sm-3 col-6">
                        <h5>Cost of Item</h5>
                        <input type="number" className="form-control" onChange={changeCost} placeholder="Item Price" max={"99"} />
                    </div>
                    <div className="col-sm-3 col-6">
                        <h5>Percentage Off</h5>
                        <input type="number" className="form-control" onChange={changePercentage} placeholder="Percentage" />
                    </div>
                </div>
                <p>Note: item price and percentage are limited to a million and 100 respectively.</p>
                <hr />
                <h5>New Price</h5>
                <p style={{lineHeight:'.1'}}><i>(Cost - Saving = New Cost)</i></p>
                <h5>
                    {cost.toFixed(2) + " - "}
                    {(percentage / 100 * cost).toFixed(2) + " = " + (cost - percentage / 100 * cost).toFixed(2)}
                </h5>
                <br />
            </div>
        </>
    )
};
export default SaleCalculator;