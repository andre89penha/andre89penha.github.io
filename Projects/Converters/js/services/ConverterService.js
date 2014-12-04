var ConverterService = {
  
  mileToKm: function (km){
  if(!isNaN(km) && km >= 0){
    return km * 1.609344;
  }
    return null;
  },


  kmToMile: function (km){
  if(!isNaN(km) && km >= 0){
    return km * 0.621371192;
  }
    return null;
  }


};