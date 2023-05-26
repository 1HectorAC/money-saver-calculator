import { NavLink } from "react-router-dom";
import TitlePanel from '../components/TitlePanel';

const LinkPanel = (props) => {
    return (
        <div className="smallPanel">
            <h4>{props.title}</h4>
            <hr />
            <p>{props.text} <NavLink to={props.link}>Click Here.</NavLink></p>
        </div>
    )
};

const Home = () => {
    return (
        <div className="text-center container">
            <TitlePanel titleText="Money Saver Calculator" subText="A website to help you calculate how much your are saving/spending." />
            <div className="row">
                <div className="col-md-4">
                    <LinkPanel title="Sale Calculator" text="Calculate the savings of a percentage off sale." link="/SaleCalculator" />
                </div>
                <div className="col-md-4">
                    <LinkPanel title="Buy Amount Sale" text='Calculate savings of a "buy 2 get 1 free" sale.' link="/BuyAmountSale" />
                </div>
                <div className="col-md-4">
                    <LinkPanel title="Tip Calculator" text="Calculate the cost of an item with a tip." link="/TipCalculator" />
                </div>
            </div>
        </div>
    )
};
export default Home;