function Food() {

    const food1 = "Vadapaav";
    const food2 = "Misal";

    return (
        <>
            <ul>
                <li>Paav Bhaji</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </>
    )
}

export default Food