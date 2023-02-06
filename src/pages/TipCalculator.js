import { useState } from "react";

const TipCalculator = () => {
    const [cost, setCost] = useState(0);
    const [percentage, setPercentage] =  useState(0);
    return (
        <>
            <div className="text-center container whiteText">
                <div className="titleSection">
                    <h2>Tip Calculator</h2>
                    <p><i>Calculate the extra cost for a tip.</i></p>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-2 offset-md-3">
                        <input type="number" className="form-control" onChange={(e)=>setCost(e.target.value)} placeholder="cost"/>
                    </div>
                    <div className="col-md-2"><h5>with a tip of</h5> </div>
                    <div className="col-md-2">
                    <input type="number" className="form-control" onChange={(e)=>setPercentage(e.target.value)} placeholder="percentage"/>
                    </div>
                </div>
                <hr/>
                <h5>Cost(before tip): {cost}</h5>
                <h5>Tip amount: {(cost *(percentage/100)).toFixed(2)}</h5>
                <h5>Cost(with tip): {(Number(cost) + (cost*(percentage/100))).toFixed(2)} </h5>
                <br />
            </div>
        </>
    )
}
export default TipCalculator;