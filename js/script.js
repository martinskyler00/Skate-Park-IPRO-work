function initMap(){
    const coffeeShop = { lat: 41.90324, lng: -87.66789};
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: coffeeShop,
    });
  
  
    const marker = new google.maps.Marker({
      position: coffeeShop,
      map: map,
      label: "Intelligentsia Coffee Wicker Park",
      animation: google.maps.Animation.DROP,
    });
  
    const circle = new google.maps.Circle({
      position: coffeeShop,
      map: map,
    });
    
  }
  window.initMap = initMap;