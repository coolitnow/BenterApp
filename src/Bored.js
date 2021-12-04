import React, { useEffect, useState } from "react";

function Bored() {
  const [boredStuff, setBoredStuff] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [typeFetchError, setTypeFetchError] = useState(null)

  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(
        (res) => {
          setBoredStuff(res)
          setIsLoading(false)
        },
        (error) => {
          setTypeFetchError(true)
          setIsLoading(false)
        }
      );
  }, [])


  return (
    <div className="bored">
      <div>Why Not:</div>
      <div>{boredStuff.activity} </div>
    </div>
  );

}

export default Bored;