// import React from "react";
// import "./App.css";
// import SunStuff from "./SunStuff";

// class Coords extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             lat: '',
//             lon: '',

//             infoStuff: {},
//         }
//     }
//     componentDidMount() {
//         this.loadLocation();
//     }

//     asyncloadLocation() {


//         fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=ea1d7320454740359dc3f7321efcdab9&fields=longitude,latitude")
//             .then(res =>
//                 res.json())
//             .then(json_response =>
//                 console.log({lat: json_response.latitude, lon: json_response.longitude}));
//     }

//     render() {
        
//         return (
//             <div>
//                 <SunStuff />
//             </div>
//         )

//     }

// }
// export default Coords;