require('dotenv').config()

//inquirer
const { readInput, 
        inquirerMenu, 
        pause } = require("./helpers/inquirer");
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
                const place = await readInput('City: ');
                // console.log(place);
                await searchs.city( place );
                //get the places

                //select the place

                //weather data
                console.log('\nInfo from the place\n'.green);
                console.log('City: ', );
                console.log('Lat', );
                console.log('Lng', );
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