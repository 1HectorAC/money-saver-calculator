import { useState } from "react";
import TitlePanel from '../components/TitlePanel';

const TipCalculator = () => {
    const [cost, setCost] = useState(0);
    const [percentage, setPercentage] = useState(0);

    function changeCost(e) {
        let input = Number(e.target.value);

        if (input > 1000000)
            e.target.value = input = 1000000;
        else if (input < 0)
            e.target.value = input = 0;

        setCost(input);
    }

    function changePercentage(e) {
        let input = Number(e.target.value);

        if (input > 100)
            e.target.value = input = 100;
        else if (input < 0)
            e.target.value = input = 0;

        setPercentage(input);
    }
    return (
        <div className="text-center container whiteText">
            <TitlePanel titleText="Tip Calculator" subText="Calculate the cost of an item with a tip." />
            <div className="row">
                <div className="col-md-3 offset-md-3 col-6">
                    <h5>Cost of Item</h5>
                    <input type="number" className="form-control" onChange={changeCost} placeholder="Item price" />
                </div>
                <div className="col-md-3 col-6">
                    <h5>Tip Percentage</h5>
                    <input type="number" className="form-control" onChange={changePercentage} placeholder="Percentage" />
                </div>
            </div>
            <p><i>Note: item price and percentage are limited to a million and 100 respectively.</i></p>
            <hr />
            <h5>New Price</h5>
            <p className="italicText">(Cost + Tip = New Cost)</p>
            <h5>
                {cost.toFixed(2) + " + "}
                {(cost * (percentage / 100)).toFixed(2) + " = " + (cost + (cost * (percentage / 100))).toFixed(2)}
            </h5>
            <br />
        </div>
    )
}
export default TipCalculator;