const HomePage = ({ setShowHome, setsatORact }) => {
    document.body.style.backgroundColor = "#001E2B";
    const handleClick = () => {
        setShowHome(false);
        setsatORact(true);
    };

    return (
        <div className="home-page-container">
            <div className="sb-title">
                <h1>Scholars Beacon</h1>
            </div>
            <div className="your-sat">
                <h2>your SAT & ACT prep platform</h2>
            </div>
            <div className="get-started">
                <h3>We are developing the only tool you’ll need to crack the SAT & ACT, click below to try out our beta and reach the end to be the first to get access.</h3>
                <h2 onClick={handleClick}>Get started!</h2>
            </div>
            
        </div>
    )
}


export default HomePage;