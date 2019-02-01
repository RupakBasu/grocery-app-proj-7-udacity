//https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD
//   https://developer.foursquare.com/docs/resources/categories
//   Grocery Store   4bf58dd8d48988d118951735


const CLIENT_ID ='QDZYMVUT5JPDBIL31P35U5U5N3LVIPCBUTOZFOVQWNCU25KY';
const CLIENT_SECRET='3CYRMHXACTQI3XFVHSKUJHJOBSZHVKSEI2WU10OMYWJCEDP4';

{/* Below is handling the version */}
const YYYYMMDD='20190129'
{/* Below is handling the Location the person is looking for */}
const LOCATION='Chicago, IL'
{/* Below is the category ID for Grocery Stores from FourSquare*/}
const CATEGORYID='4bf58dd8d48988d118951735'

export const fourSquarePlaces = ()=>{
  return fetch(`https://api.foursquare.com/v2/venues/explore?categoryId=${CATEGORYID}&near=${LOCATION}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${YYYYMMDD}
    `)
    .then(resp =>resp.json())
    .then(result => result.response.groups[0].items);
    {/* .then(output => console.log(output.response.groups[0].items));*/}
};



{/* https://foursquare.com/explore?mode=url&near=Chicago%2C%20IL%2C%20United%20States&nearGeoId=72057594042815334&q=grocery%20stores*/}
