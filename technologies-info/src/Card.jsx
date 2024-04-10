import "./card.css"

function Card(props) {
    var logo = props.logo
    var shadow = props.shadow

    function MouseOver(e) {
        e.target.style.filter = `drop-shadow( 1px 1px 20px #${shadow})`;
    }
    function MouseOut(e) {
        e.target.style.filter = "drop-shadow( 1px 1px 20px #ffffff00)";
    }

    return (
        <a href={props.url} target="_blank" className="card">
            <img src={`/src/assets/${logo}`} alt={props.logo} style={styles}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut} />
            <h1>
                {props.title}
            </h1>
            <p>{props.desc}</p>
        </a>
    )
}

export default Card