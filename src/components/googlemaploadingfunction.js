

export function load_google_maps(){
  return new promise(function(resolve, reject){
    window.resolveGoogleMapsPromise = function(){
      resolve(window.google);
      delete window.resolveGoogleMapsPromise;
    }
    const script = document.createElement('script');
    const API_KEY = 'AIzaSyAvGy3f59H7YrZfLneWJ_UJOy5uHOAnOGI';
    script.src ='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap'
    script.async = true;
    document.body.appendChild(script);
  });
}
