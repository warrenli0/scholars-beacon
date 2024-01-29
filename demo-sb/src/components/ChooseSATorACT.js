const ChooseSATorACT = ({ setsatORact, setchoiceSAT, setenterScore, setbeginPractice }) => {
    const chooseSATorACT = (param) => {
        setsatORact(false);
        setchoiceSAT(param);
        setenterScore(true);
    };
    const beginPracticing = () => {
        setsatORact(false);
        setenterScore(false);
        setbeginPractice(true);
    };
    document.body.style.backgroundColor = "black";
    return (
      <div className="satoract">
        <h2>What are you preparing for?</h2>
        <button onClick={() => chooseSATorACT(true)}>SAT</button>
        <button onClick={() => chooseSATorACT(false)}>ACT</button>
        <p onClick={() => beginPracticing()}>I am unsure which to take yet</p>
      </div>
    )
}


export default ChooseSATorACT;