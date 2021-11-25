const { readInput, inquirerMenu, pause } = require("./helpers/inquirer")

const main = async() => {
    
    // const text = await readInput('Hello: ');

    let opt;

    do{
        // get the menu
        opt = await inquirerMenu(); 
        console.log({opt});

        
        // pause the ejecution
        if( opt !== 0 ) await pause();

    }while( opt !== 0)


}

main()