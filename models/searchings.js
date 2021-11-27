const axios = require('axios');

 class Searchings{

    history = ['New York','Madrid','Medellin']

    constructor(){
        // TODO: read db if exist

    }

    async city(place = ''){
        // petition http
        try{
            // console.log(place);
            // console.log('cuidad', place);
            
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/anti.json?access_token=pk.eyJ1IjoiZGF2aWQtY2FzdGVsMjYiLCJhIjoiY2t3aDJycHRxMDE5dzJ2dGd2ZWplbjA0NSJ9.c5UVVKxhEmKXbythLKVkeA&limit=5')
            console.log(resp.data);

            
            return [];// return all the places that i request
        }
        catch (error){
        
            return [];
        
        }

    } 

 }

 module.exports = Searchings;