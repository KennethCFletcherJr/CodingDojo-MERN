import React, { useState } from 'react';
import './Form.css'

//Passing data as objects with props.
const ShowForm = (props) => {

    // console.log(props);
    // const [showList, setShowList] = useState([])

    //Destructuring data from props into its getter and setter, in the Form component, to capture? the form input as a showList of shows objects?
    //Passing the showList as props
    const { showList, setShowList } = props
    //Maintaining the useState of the show object...
    const [show, setShow] = useState({
        title: '',
        releaseYear: 1920,
        genre: '',
        watchedShow: false
    })

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setShow({ ...show, watchedShow: !show.watchedShow })
        }
        else {
            setShow({ ...show, [e.target.name]: e.target.value })
        }
        // setShow(prevState => ({...prevState, [e.target.name]:e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('This is the new show' + show);
        // console.log(`this is the new show ${JSON.stringify(show)}`);
        setShowList([...showList, show])
        setShow({
            title: '',
            releaseYear: 1920,
            genre: '',
            watchedShow: false
        })
    }

    //In the showForm return for display of a showList arr with showList objects...
    return (
        <div>
            <form className='show-form' onSubmit={submitHandler}>
                <h1>Add Your Favorite TV Show!📺</h1>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={show.title} />
                    {
                        show.title.length > 0 && show.title.length < 3 ?
                            <p>The title must be 3 or more characters</p> :
                            null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler} value={show.releaseYear} />
                    {
                        show.releaseYear < 1920 ?
                            <p>The release must be 1920 or newer</p> :
                            null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler} value={show.genre} />
                    {
                        show.genre.length > 0 && show.genre.length < 3 ?
                            <p>The title must be 3 or more characters</p> :
                            null
                    }
                </div>
                <div>
                    <label>I've watched this show</label>
                    <input type="checkbox" name="watchedShow" onClick={changeHandler} checked={show.watchedShow} />
                </div>
                <button>Add Show</button>
            </form>

        </div>
    )
}

export default ShowForm;
