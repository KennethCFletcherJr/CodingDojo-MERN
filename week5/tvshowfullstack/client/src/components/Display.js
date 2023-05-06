import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Why doesn't const Display work here???
function Display(props) {
    const {tvShowList, setTvShowList} = props;
    
     useEffect(() => {
       axios
         .get("http://localhost:8000/api/allShows")
         //Check console log for path...

         .then((response) => {
           //Response is the whole object, so to get to the data...
           console.log(response);
           //To get the object data:
           setTvShowList(response.data.shows)

         })

         .catch((err) => {
           console.log(err);
         })
       //The base of our URL for our API because our local host is running on local port 8000.
       //Check console log for path...
       //Why was the single array object repeated four times in the browser console when I imported axios, and applied axios to get the object, [at the localhost:8000??? What's happening here?] then consoled the .then(response)???
     }, [setTvShowList]);


  return (

    <div>
        <h2>All of our shows</h2>

        {
            tvShowList.map((show) => (
                //A key is inserted as an attribute in the <div>. Before we assigned index to the key: WHY? Now it's better to assign the _id of the database, in the div that encloses the JSX used to display the items we have mapped through.
                <div key={show._id}>

                <h2>Title: {show.title}</h2>
                <h2>Network: {show.network}</h2>
                <h2>Genre: {show.genre}</h2>
                {/* Insert a link for findOne */}
                <Link to={`/viewShow/${show._id}`}>View</Link>

                </div>



            ))
        }
    </div>
  )

}

export default Display;
