import reactLogo from "./assets/react.svg"

function Card() {
    return (
        <div className="card">
            <img id="logo" alt="React logo" src={reactLogo}/>
            <h1>ReactJS</h1>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
        </div>
    )
}
export default Card