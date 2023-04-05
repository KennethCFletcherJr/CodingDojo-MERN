
const Form = () => {

    return (
        <form id="poke-form">
            <h1>I choose You!</h1>
            <div className="form-group">
                <label htmlFor="pokeSearch">Search: </label>
                <input type="text" name="pokeSearch" placeholder='...awaiting pokemon name'/>
                <input type="submit" value="Generate Pokemon Card" />
            </div>
        </form>
    )

}

export default Form