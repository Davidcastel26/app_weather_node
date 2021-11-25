const inquirer = require('inquirer')
require('colors')

//questions
const questions = [
    {
        type:'list',
        name:'option',
        message:'what would you like to do?',
        choices:[
            {
                value:'1',
                name:`${'1.'.green} Create tasks`
            },{
                value:'2',
                name:`${'2.'.green}List tasks`
            },{
                value:'3',
                name:`${'3.'.green}List achived tasks`
            },{
                value:'4',
                name:`${'4.'.green}List pending's tasks`
            },{
                value:'5',
                name:`${'5.'.green}Complete tasks`
            },{
                value:'6',
                name:`${'6.'.green}Delete tasks`
            },{
                value:"0",
                name:`${'0.'.green}Exit`
            }
        ]
    }
]

//menu
const inquirerMenu = async() => {

    console.clear();
    console.log('==============================='.green);
    console.log(' Select an option'.white);
    console.log('===============================\n'.green);

    const {option} = await inquirer.prompt(questions)
    return option;
}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.magenta} to continue`
        }
    ]
    console.log('\n ');
    await inquirer.prompt(question);

}

const readInput = async(message) => {
    
    const questions = [
        {
            type:'input',
            name:'desc',
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Please enter a value'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(questions)
    return desc;
}

const listTasksDelete = async(tasks = []) => {
    // {
        // value:'1',
        // name:
    // }
    const choices = tasks.map( (task, indice) => {

        const idx = `${indice + 1}`.green

        return{
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    })
    // console.log(choices);

    choices.unshift({
        value:'0',
        name: '0'.green + ' Cancel'
    })

    const questions = [
        {
            type:'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;

}

const confrim = async(message) => {

    const question = [
        {
            type:'confrim',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;

}

const showListChecklist = async( tasks = []) => {

    const choices = tasks.map( (task, indice) => {

        const idx = `${indice + 1 }`.green;

        return{
            value: task.id,
            name: `${ idx } ${task.desc}`,
            checked: ( task.completedIn ) ? true : false
        }
    })

    const question = [
        {
            type: 'check',
            name: 'ids',
            message:'Seleccions',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(question);
    return ids;

}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTasksDelete,
    confrim,
    showListChecklist
}