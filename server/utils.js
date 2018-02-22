var dummyData = require('./dummyData.js');

var utilsMethods = {};

utilsMethods.dataCleaner= function (dataArray) {
    var cleanedData = [];
    // this function takes in the data received from the yelp API 
    // and returns an array with an object at each index, formatted so that it's clean to send to client
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
        // TO FIX: save yelp's display_address array instead of the breakdown below
        // update this on front end 
        // newBusiness.address = {
        //     city: dataArray[i].location.city,
        //     state: dataArray[i].location.state,
        //     address: dataArray[i].location.address1,
        //     zip: dataArray[i].location.zip_code
        // },
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