
// initialize the map


const map;
initMap =()=> {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

//
// // function that makes the script
//
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>

let mapShowing = false;

const showGoogleMap  new Promise (
  (resolve,reject) => {
    if (mapShowing){
      let produceMap = {
        // create script tags
        const scriptTag = document.createElement('script');
        // My API Key for google Map
        const YOUR_API_KEY = ;
        // create the source attribute which houses the URL
        scriptTag.src ='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap'
        // create the asyncrous attrtibute
        scriptTag.async = true;
        // create the defer attribute
        scriptTag.defer = true;
        // need to add this to the virtual document
        document.body.appendChild(scriptTag);
      };
      resolve(produceMap);
      //This is when the promise successeds
    } else {
      let failureToLoad = new Error ('map is not loading');
      reject(failureToLoad);
    }
  }
);

// somehow need to stick in the scriptTag.src in the produceMap so it could
// link to the initMap
const initiateMapFunction = function (produceMap)



// call the Promise

const paintMapOnPage = function () {
  showGoogleMap
    .then ()
}
