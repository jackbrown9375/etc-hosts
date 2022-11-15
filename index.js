
import clipboardy from 'clipboardy';
import fs from 'fs';


let dominio= clipboardy.readSync();
const host = '/etc/hosts';


try{
    if (!dominio.startsWith('https://')){
        dominio='https://'+dominio;
    }

    dominio= new URL(dominio);

    let temp=fs.readFileSync(host,'utf-8');

    if (!temp.includes(dominio.hostname)){
        fs.appendFileSync(host,`127.0.0.1        ${dominio.hostname}\n`);
    }

}catch(error){
    /**
     * No hacer nada
     */
}

