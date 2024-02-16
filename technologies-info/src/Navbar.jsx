import "./Title.css"

function Navbar() {

    function Clicked() {
        // console.log("clicked!")
        // console.log(document.getElementsByClassName("toggl") )
        // ! Show hide
        document.getElementById("moon").classList.toggle("hidden")
        document.getElementById("sun").classList.toggle("hidden")

        // ! changing styles

        var r = document.querySelector(':root')

        if (document.getElementById("moon").classList.contains("hidden")) {            
            r.style.setProperty ('--background','#1c1c1c')
            r.style.setProperty ('--background2','#363636')
            r.style.setProperty ('--font','#fff')
        } else {
            r.style.setProperty ('--background','#e4e4e4')
            r.style.setProperty ('--background2','#c3c3c3')
            r.style.setProperty ('--font','#000')
        }
    }

    return (
        <div className="Navbar-container">
            <div>Frontend</div>
            <div>Backend</div>
            <div>Database</div>
            <div className="dark-light" >
                <img id="moon" onClick={Clicked} className="toggl" src="./src/assets/moon.svg" alt="moon" />
                <img id="sun" onClick={Clicked} className="hidden toggl" src="./src/assets/sun.svg" alt="sun" />
            </div>
        </div>
    )
}

export default Navbar