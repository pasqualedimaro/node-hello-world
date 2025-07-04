
// Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
// Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
// Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
// Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.



// in terminale vedo elenco con ls
// mi trovo nella cartella node-hello-world e quindi inizializzo con npm init y 

// stampo in console hello wordl

console.log("Hello Boolean")

//eseguo nel terminale con il comando node index.js

//aggiungo start nello script in package.json e lo lancio con npm run start

//aggiungo un dev con watch nello script di paackage.json per vedere in tempo reale il server scrivendo nel terminale npm run dev
//cambio il log in Hello Boolean per vederlo in tempo reale con il server aperto
// chiudo server con ctrl +c

//BONUS

// installo il pacchetto dotenv quindi, in console lo installo con npm i dotenv
// aggiungo il file .gitignore per ignorare la cartella node_modules del pacchetto
//creo file .env con una password segreta e la ignoro sempre nel file gitignore
//aggiungo allo script env e process in index.js

console.log(process.env.SECRET_PASSWORD);


//BONUS2

// installo axios e chalk sempre tramite console
// aggiungo type module nel package.json
// importo axios e chalk nel mio index .js

import axios from "axios";
import chalk from "chalk";


//creo una costante con la api url

const api = 'https://lanciweb.github.io/demo/api/pictures/'

// faccio una chiamata utilizzando axios

axios.get(api)
.then(response =>{
    console.log(response.data);
    response.data.forEach(image => {
        console.log(chalk.red(image.title));
        console.log(chalk.yellow(image.title));
    });
})
.catch(error =>{
    console.error("error fetching data", error)
});



//la chiamata funziona il server mi risponde

// faccio un console log utilizzando chalk per cambiarci ilò colore, dicendo che il server mi ha risposto

console.log(chalk.green("il sever funziona!"));

