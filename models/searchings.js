const fs = require('fs');
const axios = require('axios');

class Searchings{

    history = []
    dbPath = './db/database.json';

    constructor(){
        // TODO: read db if exist

    }

    get historyCopitalized(){
        //capitalized each word
        return this.history.map( place => {
            let words = place.split(' ');
            words = words.map( w => w[0].toUpperCase() + w.substring(1) );

            return words.join(' ')
        } )
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit':2  
        }
    }

    get paramsWeatherMap(){
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            language : 'en'
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

    
    async weatherPlace(lat, lon){
        try{
            // instance axios.create()
            const instance = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWeatherMap, lat, lon}
            })
            // resp.data
            const resp = await instance.get()
            // console.log(resp);
           const {weather, main} = resp.data
            // console.log(weather);
            return {
                min:main.temp_min,
                max:main.temp_max,
                temp:main.temp,
                desc:weather[0].description,
            };

        }catch(err){

        }
    }

    addHistory( place = ''){
        //this will help us to discard any kind of similar data that we could get
        if( this.history.includes( place.toLowerCase())){
            return
        }
        this.history = this.history.splice(0,5);
        //prevent duplicate
        this.history.unshift( place.toLowerCase() );

        // save into DB 
        this.saveDB()
    }

    saveDB(){

        const payload = {
           history: this.history
        }

        fs.writeFileSync( this.dbPath, JSON.stringify(payload))

    }

    readDB(){
        if(!fs.existsSync( this.dbPath) ) return;
        // const info .... readFileSync... path {encoding:'utf-8'}
        const info = fs.readFileSync( this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info);

        this.history = data.history;

    }   

 }

 module.exports = Searchings;