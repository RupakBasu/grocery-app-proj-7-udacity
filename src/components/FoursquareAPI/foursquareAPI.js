import React from 'react';

import {LocationInfoGenerator} from '../FoursquareAPI/APILocationList'

class FourSquareLocations extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      storeSuggestions:[]
    };

  }

  componentDidMount(){
    this.fetchedStoreLocations();
  }

  fetchedStoreLocations(){

    let storeSuggestions = this.setState.bind(this);

    const CLIENT_ID ='QDZYMVUT5JPDBIL31P35U5U5N3LVIPCBUTOZFOVQWNCU25KY';
    const CLIENT_SECRET='3CYRMHXACTQI3XFVHSKUJHJOBSZHVKSEI2WU10OMYWJCEDP4';

    {/* Below is handling the version */}
    const YYYYMMDD='20190129'
    {/* Below is handling the Location the person is looking for */}
    const LOCATION='Chicago, IL'
    {/* Below is the category ID for Grocery Stores from FourSquare*/}
    const CATEGORYID='4bf58dd8d48988d118951735'

      fetch(`https://api.foursquare.com/v2/venues/explore?categoryId=${CATEGORYID}&near=${LOCATION}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${YYYYMMDD}
        `)
        .then(resp =>resp.json())
        .then(output => output.response.groups[0].items);
        {/* .then(output => console.log(output.response.groups[0].items));*/}
        this.setState({storeSuggestions:storeSuggestions});
        console.log("state", this.state.storeSuggestions);
  }

  render() {
    // var storeLocationList = this.state.storeSuggestions.map(item =>
    //   <li> {item.venue.name}</li>
    // );
    return(
      <div >
        <div>
          {/* {storeLocationList} */} 
        </div>
      </div>
    )
  }
}

export default FourSquareLocations;
