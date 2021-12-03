import React, { useEffect, useState } from "react";
import "./App.css";
import DuneQ from "./DuneQ";

function Axolotl() {
    const [cutePic, setCutePic] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [typeFetchError, setTypeFetchError] = useState(null)

    //similar to componentDidMount and componentDidUpdate"
    useEffect(() => {
        //create cors-anywhere website via heroku in order to access axolotl api
        //put that address in front of the axolotlapi address
        //some APIs only allow real websites to access their info, so this is a way around that for testing and what not
        fetch("https://secure-brook-34239.herokuapp.com/https://axoltlapi.herokuapp.com/")
            .then(res =>
                res.json())
            .then(result => {
                setCutePic(result.url)
                setIsLoading(false)
            },
                (error) => {
                    setTypeFetchError(true)
                    setIsLoading(false)
                }
            )
    }, [])

    return (
        <div className="DuneQ-Container">

            <div className="AxlContainer">
                <img src={cutePic} alt="Axolotl Pic" className="AxlPic" />
                <DuneQ />
            </div>
        </div>
    )

}

export default Axolotl;