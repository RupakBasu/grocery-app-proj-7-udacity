import React from 'react';



class LocationInfoGenerator extends React.Component {

  render() {
    const suggestedPlaces = this.props.location;
    console.log(this.props)
    return(
      <div>
        <li> This is a location </li>
        <ol>
          {location.map(suggestedPlaces =>(
            <li>
             <div>
               <h2>{suggestedPlaces.venue.name}</h2>
              </div>
            </li>
          ))}
        </ol>
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
