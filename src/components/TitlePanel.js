const TitlePanel = (props) => {
    return (
        <div className="titleSection">
            <h2>{props.titleText}</h2>
            <p><i>{props.subText}</i></p>
            <hr />
        </div>
    )
}
export default TitlePanel;