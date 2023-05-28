import { useState } from "react";
import TitlePanel from '../components/TitlePanel';

const ProportionalSavingsDisplay = (props) => {
    /* Note: item1 will be the mains items whoses proportion is based on. */
    const proportionalSaving = props.item1 !== 0 && props.item2 !== 0 && props.item3 !== 0 ?
        (props.freeItem / (props.item1 + props.item2 + props.item3)) * props.item1 :
        0;
    return (
        <h5>
            {
                props.label + " " +
                props.item1.toFixed(2) + " - " +
                proportionalSaving.toFixed(2) + " = " +
                (props.item1 - proportionalSaving).toFixed(2)
            }
        </h5>
    )
};

const BuyAmountSale = () => {
    const [item1, setItem1] = useState(0);
    const [item2, setItem2] = useState(0);
    const [item3, setItem3] = useState(0);
    function changeItem(e, num) {
        let input = Number(e.target.value);

        if (input > 1000000) 
            e.taget.value = input = 100000;
        else if (input < 0) 
            e.target.value = input = 0;

        if (num === 1)
            setItem1(input);
        else if (num === 2)
            setItem2(input);
        else
            setItem3(input);
    }

    return (
            <div className="text-center container whiteText">
                <TitlePanel titleText="Buy Amount Sale" subText='Calculate savings of a "buy 2 get 1 free" sale.' />
                <div className="row">
                    <div className="col-sm-3 offset-sm-3 col-6">
                        <h5>Buy 2</h5>
                        <input type="number" className="form-control" onChange={(e) => changeItem(e, 1)} placeholder="Item 1" />
                        <input type="number" className="form-control" onChange={(e) => changeItem(e, 2)} placeholder="Item 2" />
                    </div>
                    <div className="col-sm-3 col-6">
                        <h5>1 Free</h5>
                        <input type="number" className="form-control" onChange={(e) => changeItem(e, 3)} placeholder="Item 3" />
                    </div>
                </div>
                <p><i>Note: Item prices are limited to a million.</i></p>
                <hr />
                <h5>New Price</h5>
                <p className="italicText">(Cost - Free Item = New Cost)</p>
                <h5>
                    {(item1 + item2 + item3).toFixed(2)} - {(item3).toFixed(2)} = {(item1 + item2).toFixed(2)}
                </h5>
                <br />
                <h5>Proportional Savings</h5>
                <p className="italicText">(Item: Cost - Proportional Saving = New Cost)</p>
                <ProportionalSavingsDisplay item1={item1} item2={item2} item3={item3} freeItem={item3} label="Item1:" />
                <ProportionalSavingsDisplay item1={item2} item2={item1} item3={item3} freeItem={item3} label="Item2:" />
                <ProportionalSavingsDisplay item1={item3} item2={item2} item3={item1} freeItem={item1} label="Item3:" />
                <br />
            </div>
    )
};
export default BuyAmountSale;