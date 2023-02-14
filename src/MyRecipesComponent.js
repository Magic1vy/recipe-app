function MyRecipesComponent ({label, dishTipe, mealType, image, calories, ingradients}){
    return(
        <div className="item-card">
            <div className="container">
                <h2 >{label}</h2>
            </div>
            <div className="container">
                <h3>{dishTipe}</h3>
                </div>
                <div className="container">
                <h4>({mealType})</h4>
                </div>
            <div className="container">
                <img src={image} className='tasty' alt="dish"/>
            </div>
            <ul className="list">
                {ingradients.map( (ingradient, index) => (
                    <li key={index}>{ingradient}</li>
                ))}
            </ul>
            <div className="container">
                <h3>{calories.toFixed()} calories</h3>
            </div>

        </div>
    )
}
export default MyRecipesComponent;