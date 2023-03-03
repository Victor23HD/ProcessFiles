import fs from 'fs';
import chalk from 'chalk';

const getFile = async function(route)
{
    return fs.promises
    .readFile(route, 'utf-8')
    .then((ret) => { return ret })
    .catch((err) => { throw new Error(chalk.red.bold(err)) });
}

const Path = async function(path)
{
    let file;
     
    if(fs.lstatSync(path).isFile())
    {
        file = await getFile(path);
    }
    else if(fs.lstatSync(path).isDirectory())
    {
        file = await fs.promises.readdir(path);
    }
    return file;
}


export { Path };