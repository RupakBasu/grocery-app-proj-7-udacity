
// found at: https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
export function load_google_maps() {
  return new Promise(function(resolve, reject){
     const scriptTag = document.createElement('script');
     const API_KEY = 'AIzaSyB6N63ZIGH4b8Hgm9KhodA87Guuiem3C8Y';
     scriptTag.src = 'https://maps.googleapis.com/maps/api/js?key=' + API_KEY + '&callback=initMap';
     scriptTag.async = true;
     scriptTag.defer = true;

     window.initMap = function() {
       resolve(window.google);
       delete window.initMap;
     }

     document.body.appendChild(scriptTag);
 });
}
