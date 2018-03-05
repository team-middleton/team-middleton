var utilsMethods = {};

utilsMethods.dataCleaner= function (dataArray) {
    var cleanedData = [];
    // this function takes in the data received from the yelp API 
    // and returns an array with an object at each index representing data for each 
    // business we got data for
    //the point is to formatted the received info so that it's clean to send to client-side
    for(var i = 0; i < dataArray.length; i++) {
        var newBusiness = {};
        var formattedPhoneNumber = dataArray[i].phone.split('').slice(-10);
        formattedPhoneNumber.splice(3,0,"-");
        formattedPhoneNumber.splice(7,0,"-");
        newBusiness.name = dataArray[i].name;
        newBusiness.rating = dataArray[i].rating;
        newBusiness.phone = formattedPhoneNumber;
        newBusiness.image_url = dataArray[i].image_url;
        newBusiness.url = dataArray[i].url;
        newBusiness.address = dataArray[i].location.display_address
        newBusiness.coordinates = {
            latitude: dataArray[i].coordinates.latitude,
            longitude: dataArray[i].coordinates.longitude
        }
        cleanedData.push(newBusiness);
    }
    return cleanedData;
}


module.exports = utilsMethods;