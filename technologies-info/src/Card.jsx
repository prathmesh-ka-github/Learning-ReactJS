import "./card.css"

function Card(props) {
    var logo = props.logo
    var shadow = props.shadow

    var styles = {
        // filter: `drop-shadow( 1px 1px 20px #${shadow})`
    }

    function MouseOver(event) {
        event.target.style.filter = `drop-shadow( 1px 1px 20px #${shadow})`;
      }
      function MouseOut(event){
        event.target.style.filter="drop-shadow( 1px 1px 20px #ffffff00)";
      }

    return (
        <div className="card">
            <img src={`/src/assets/${logo}`} alt={props.logo} style={styles}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}/>
            
            <h1>
                {props.title}
            </h1>
            <p>{props.desc}</p>
            {/* <style>
                .card img:hover {

                    -webkit-filter: drop-shadow( 1px 1px 20px #5ec6f3);
                    filter: drop-shadow( 1px 1px 20px #5ec6f3);
                }
            </style> */}
        </div>
    )
}

export default Card