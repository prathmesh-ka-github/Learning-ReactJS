import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ? "True" : "False"}</p>
        </div>
    )
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isstudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "ERR Name not entered",
    age: "ERR Age not entered",
    isstudent: "NA",
}

export default Student