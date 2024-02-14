function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ? "True" : "False"}</p>
        </div>
    )
}

export default Student