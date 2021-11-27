const axios = require('axios');

  const apikey = 'pk.eyJ1IjoiZGF2aWQtY2FzdGVsMjYiLCJhIjoiY2t3aDJycHRxMDE5dzJ2dGd2ZWplbjA0NSJ9.c5UVVKxhEmKXbythLKVkeA';

 class Searchings{

    history = ['New York','Madrid','Medellin']

    constructor(){
        // TODO: read db if exist

    }

    get paramsMapbox(){
        return {
            'access_token':apikey,
            'limit':2  
        }
    }

    async city(place = ''){
        // petition http
        try{
            // console.log(place);
            // console.log('cuidad', place);
            
            const instance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get(); 

            // const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/anti.json?access_token=${api}&limit=5`)
            console.log(resp.data);

            
            return [];// return all the places that i request
        }
        catch (error){
        
            return [];
        
        }

    } 

 }

 module.exports = Searchings;