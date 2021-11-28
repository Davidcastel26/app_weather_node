require('dotenv').config()

//inquirer
const { readInput, 
        inquirerMenu, 
        pause,
        listPlaces } = require("./helpers/inquirer");
//Modules Searchings
const Searchings = require("./models/searchings");

// console.log(process.env);

const main = async() => {
    
    // const text = await readInput('Hello: ');
    const searchs = new Searchings()
    let opt;

    do{
        // get the menu
        opt = await inquirerMenu(); 
        // console.log({opt}); // opt 1

        switch(opt){
            case 1:
                //show msg  
                const term = await readInput('City: ');
                // console.log(place);
                
                //get the places
                const places = await searchs.city( term );
                console.log(places);
                
                //select the place
                const idSelected = await listPlaces(places);
                // console.log({ idSelected });
                const placeSelected = places.find( l =>l.id === id)

                //weather data
                console.log('\nInfo from the place\n'.green);
                console.log('City: ', placeSelected.name );
                console.log('Lat', placeSelected.lat );
                console.log('Lng', placeSelected.lng);
                console.log('Temperatures:',);
                console.log('Min');
                console.log('Max');
            break;
        }
        
        // pause the ejecution
        if( opt !== 0 ) await pause();

    }while( opt !== 0)


}

main()

//70