import fs from "fs";
import chalk from "chalk";
import { getList, printList} from "./list.js";
import { Path } from "./Directory/file.js";

const route = process.argv;
const list = [];
try{
    const file = await Path(route[2]);

if(fs.lstatSync(route[2]).isFile())
{
    list.push(getList(file));
} 
else if(fs.lstatSync(route[2]).isDirectory())
{   
    const documents = file.map((file) => 
    {
        return `${route[2]}/${file}`;
    });

    for(let i = 0; i < documents.length; i++)
    {
        let iRet = await Path(documents[i]);
        list[i] = getList(iRet);
    }
} 
printList(list, file);
}

catch(erro)
{
    if(erro.code === 'ENOENT')
    {
        console.log(`\n ${chalk.bold("* Arquivo ou diretório não existe:")} [ ${chalk.red.bold(route[2]+" - ENOENT")} ]\n`);
    }
}


