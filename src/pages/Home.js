import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center container">
            <div className="titleSection">
                <h1>Money Saver Calculator</h1>
                <p><i>A website to help you calculate how much your are saving/spending.</i></p>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="smallPanel">
                        <h4>Sale Calculator</h4>
                        <hr />
                        <p>Calculate the savings of a percentage off sale. <NavLink to="/SaleCalculator">Click Here.</NavLink></p>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="smallPanel">
                        <h4>Buy Amount Sale</h4>
                        <hr />
                        <p>Calculate savings of a "buy 2 get 1 free" sale. <NavLink to="/BuyAmountSale">Click Here.</NavLink></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="smallPanel">
                        <h4>Tip Calculator</h4>
                        <hr />
                        <p>Calculate the cost of an item with a tip. <NavLink to="/TipCalculator">Click Here.</NavLink></p>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default Home;