import chalk from 'chalk';
import getGroup from './Directory/link.js';
import processesTest from './Website/text.js';

const getList = (file) =>
{
    const group = getGroup(file);
    return processesTest(group);
}

const printList = (list,file) => 
{
    // list[0][1][0]
    if(list.length === 1)
    {
        for(let i = 0; i < list[0][0].length; i++){
            const ret = `[${chalk.bold(list[0][0][i])}]: URL(${chalk.green.italic(list[0][1][i])})`;
            console.log(ret);
        };
    }
    else if(list.length > 1)
    {
        for(let i = 0; i < list.length; i++)
        {
            console.log(`\n${chalk.bold("LISTA DE LINKS -")} [${chalk.red.bold(file[i])}]  \n`);
            for(let j = 0; j < list[0][0].length; j++)
            {
                const ret = `[${chalk.bold(list[i][0][j])}]: URL(${chalk.green.italic(list[i][1][j])})`;
                console.log(ret);
            }

        }
    }
        
    
    
    
}

export { getList, printList }