import fs from "fs";
import chalk from "chalk";
import { getList, printList } from "./list.js";
import { checkLink } from "./Website/https-validate.js";
import { Path } from "./Directory/file.js";

const route = process.argv;
const list = [];
try {

    const file = await Path(route[2]);

    if (fs.lstatSync(route[2]).isFile()) {
        list.push(getList(file));
    }
    else if (fs.lstatSync(route[2]).isDirectory()) {
        const documents = file.map((file) => {
            return `${route[2]}/${file}`;
        });

        for (let i = 0; i < documents.length; i++) {
            let iRet = await Path(documents[i]);
            list[i] = getList(iRet);
        }

    }

    if (route[3] === "File") {
        printList(list, route[2]);
    }
    else if (route[3] === "Dir") {
        printList(list, file);
    }
    else if (route[3] === "Validate") {

        const res = await checkLink(list[0][1]);
        if (!fs.existsSync('./validacao')) {
            fs.mkdirSync('./validacao');
        }
        if (!fs.existsSync('./validacao/result.txt')) {
            fs.appendFile('./validacao/result.txt', res.toString(), (err) => { return err; });
        } else {
            let i = 1;
            let bool = false
            while (!bool) {
                if (!fs.existsSync(`./validacao/result (${i}).txt`)) {
                    fs.appendFile(`./validacao/result (${i}).txt`, res.toString(), (err) => { return err; });
                    bool = true;
                }
                i = i + 1;
            }
        }
}

} catch (erro) {
    if (erro.code === 'ENOENT') {
        console.log(`\n ${chalk.bold("* Arquivo ou diretório não existe:")} [ ${chalk.red.bold(route[2] + " - ENOENT")} ]\n`);
    }
}


