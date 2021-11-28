const axios = require('axios');

 class Searchings{

    history = ['New York','Madrid','Medellin']

    constructor(){
        // TODO: read db if exist

    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
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
            
            //get the inf
            // console.log(resp.data.features);
            return resp.data.features.map( p => ({
                id: p.id,
                name: p.place_name,
                lng: p.center[0],
                lat: p.center[1]
            }))
        }
        catch (error){
        
            return [];
        
        }

    } 

 }

 module.exports = Searchings;