import React from 'react';



class LocationInfoGenerator extends React.Component {

  render() {
    const places= this.props.suggestedPlaces || [];
    console.log(this.props)
    return(
      <div>
        <div className='g'>
            <ol>
              {places.map(place =>(
                <li key ={place.venue.id}>
                  <div className= 'addressBlock color center' >
                    <h2>{place.venue.name}</h2>
                    <p>{place.venue.location.address}</p>
                    <p>{place.venue.location.formattedAddress[1]}</p>
                    <p>{place.venue.location.lat}</p>
                    <p>{place.venue.location.lng}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
      </div>

    )
  }
}

export default LocationInfoGenerator;


// const location = this.props.location;
// console.log(this.props)
// return(
//   <div>
//     <h2>Locations</h2>
//     <ol>
//       {location.map(loc =>(
//         <li>
//         <div>
//         <h2>{loc.venue.name}</h2>
//         </div>
//         </li>
//       ))}
//     </ol>
//   </div>
//
// )
// }
// }
