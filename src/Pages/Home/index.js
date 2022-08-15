import React from "react"

function Home() {
    return (
        <div className="home-container">
            <div className="left">
                <div className="home-text">
                    <p className="home-text-main">Make <br /> remote work</p>
                    <p className='home-text-info'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and <br />watch productivity soar.</p>
                </div>
                <button className="btn-learn">Learn more</button>
                <div className="home-logos">
                    <img src="images/client-databiz.svg" alt="databiz-logo"></img>
                    <img src="images/client-audiophile.svg" alt="audiophile-logo"></img>
                    <img src="images/client-meet.svg" alt="meet-logo"></img>
                    <img src="images/client-maker.svg" alt="maker-logo"></img>
                </div>
            </div>
            <div className="image-right">
                <img src="images/image-hero-desktop.png"></img>
            </div>
        </div>
    )
}

export default Home