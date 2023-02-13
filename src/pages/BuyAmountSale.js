import { useState } from "react";

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
    function changeItem1(e) {
        let input = Number(e.target.value);
        if (input > 0 && input <= 1000000)
            setItem1(input);
        else if (input > 1000000) {
            e.target.value = 1000000;
            setItem1(1000000);
        }
        else if (input < 0) {
            e.target.value = 0;
            setItem1(0);
        }
        else
            setItem1(0);
    }
    function changeItem2(e) {
        let input = Number(e.target.value);
        if (input > 0 && input <= 1000000)
            setItem2(input);
        else if (input > 1000000) {
            e.target.value = 1000000;
            setItem2(1000000);
        }
        else if (input < 0) {
            e.target.value = 0;
            setItem2(0);
        }
        else
            setItem2(0);
    }
    function changeItem3(e) {
        let input = Number(e.target.value);
        if (input > 0 && input <= 1000000)
            setItem3(input);
        else if (input > 1000000) {
            e.target.value = 1000000;
            setItem3(1000000);
        }
        else if (input < 0) {
            e.target.value = 0;
            setItem3(0);
        }
        else
            setItem3(0);
    }
    return (
        <>
            <div className="text-center container whiteText">
                <div className="titleSection">
                    <h2>Buy Amount Sale</h2>
                    <p><i>Calculate savings of a "buy 2 get 1 free" sale.</i></p>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-sm-3 offset-sm-3 col-6">
                        <h5>Buy 2</h5>
                        <input type="number" className="form-control" onChange={changeItem1} placeholder="Item 1" />
                        <input type="number" className="form-control" onChange={changeItem2} placeholder="Item 2" />
                    </div>
                    <div className="col-sm-3 col-6">
                        <h5>1 Free</h5>
                        <input type="number" className="form-control" onChange={changeItem3} placeholder="Item 3" />
                    </div>
                </div>
                <p><i>Note: Item prices are limited to a million.</i></p>
                <hr />
                <h5>New Price</h5>
                <p style={{ lineHeight: '.1' }}><i>(Cost - Free Item = New Cost)</i></p>
                <h5>
                    {(item1 + item2 + item3).toFixed(2) + " - "}
                    {(item3).toFixed(2) + " = " + (item1 + item2).toFixed(2)}
                </h5>
                <br />
                <h5>Proportional Savings</h5>
                <p style={{ lineHeight: '.1' }}><i>(Item: Cost - Proportional Saving = New Cost)</i></p>
                <ProportionalSavingsDisplay item1={item1} item2={item2} item3={item3} freeItem={item3} label="Item1:" />
                <ProportionalSavingsDisplay item1={item2} item2={item1} item3={item3} freeItem={item3} label="Item2:" />
                <ProportionalSavingsDisplay item1={item3} item2={item2} item3={item1} freeItem={item1} label="Item3:" />
                <br />
            </div>
        </>
    )
};
export default BuyAmountSale;