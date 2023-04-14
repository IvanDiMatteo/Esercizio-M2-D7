/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

/* PARTE 1 */

/* Funzione per la ricerca dei vari oggetti dall'array fornito, filtrando i risultati
tramite i parametri che verranno inseriti dall'utente ("Location" e "Position") */
function jobSearcher(location, position) {

  /* In questo array verranno aggiunti i risultati della ricerca */
  let result = [];

  /* Questo ciclo di for 'scansiona' tutti gli oggetti dell'array fornito
  e pusha i risultati filtrati all'interno dell'array "result" */
  for (let i = 0; i < jobs.length; i++) {

    /* Queste variabili fanno in modo che sia i parametri inseriti dall'utente, sia quelli presi
    dall'array fornito vengano trasformati in LowerCase prima di essere 'scansionati',
    così da rendere la ricerca 'case insensitive' */
    let loclc = jobs[i].location.toLowerCase();
    let titlelc = jobs[i].title.toLowerCase();
    location = location.toLowerCase();
    position = position.toLowerCase();

    /* Questo "if" funge da filtro:
    fa in modo che qualsiasi risultato che includa i parametri inseriti dall'utente
    venga inserito (sotto forma di oggetto contenente solo gli elementi "title" e "location")
    all'interno dell'array "result" */
    if (titlelc.includes(position) && loclc.includes(location)) {
      result.push({
        title: jobs[i].title,
        location: jobs[i].location,
      })
    }
  }

  /* Questa variabile serve a calcolare il numero di risultati che sono stati filtrati,
  misurando la lunghezza dell'array "result" */
  let count = result.length;

  /* La funzione ritorna quindi l'array "result" con i vari oggetti filtrati
  e la variabile "count" che contiene la lunghezza di "result" come numero intero */
  return {result, count};
}

/* PARTE 2 */

/* Le seguenti funzioni interagiscono col DOM,
prendendo come input i parametri ("title" e "location") forniti dall'utente
e restituendo come output una lista formata dai risultati filtrati */

/* Queste variabili 'catturano' gli elementi HTML presenti nel DOM
e verranno utilizzate nelle prossime funzioni */
let title = document.getElementById("searcher1");
let locations = document.getElementById("searcher2");
let out = document.getElementById("output");
let button = document.getElementById("btn");
let input = document.getElementsByClassName("myInput");

/* Questa funzione fa in modo che alla pressione del pulsante 'search'
la lista venga innanzitutto pulita da tutti i suoi contenuti,
così da non accumulare i risultati tra una ricerca e l'altra */
function clean() {
  out.innerHTML = "";
}

/* Questa funzione prende i risultati filtrati dalla funzione nella 'PARTE 1'
e li restituisce come output all'interno di una lista */
function output() {
  
  /* Questa variabile serve a prendere come input i valori "title" e "location" forniti dall'utente,
  per poi darli come parametri alla funzione nella 'PARTE 1', così da essere filtrati */
  let search = jobSearcher(locations.value, title.value);

  /* Questo "if" fa in modo che se i campi "title" e "location" sono vuoti,
  non venga eseguita alcuna ricerca, bensì venga visualizzato un messaggio di errore */
  if (locations.value == "" && title.value == "") {
    let nores = document.createElement("h3");
    nores.innerText = "Please specify a 'Title' and/or a 'Location'!";
    out.appendChild(nores);
  } else {

    /* Questo "for" prende i risultati della prima funzione e li restituisce
    come elementi (li) in una lista (ul)
    NOTA: ritornare la variabile "count" dalla prima funzione si è reso utile non solo
    per determinare la lunghezza dell'array "result", ma anche per lo svolgimento di questo "for" */
    for (let i = 0; i < search.count; i++) {
      let p = document.createElement("li");
      p.innerText = "Title:\n" + "-" + search.result[i].title + "\n\n" + 
      "Location:\n" + "-" + search.result[i].location;
      out.appendChild(p);
    }
    
    /* Questa variabile aggiunge infine un tag "p"
    che ci dice quanti risultati sono stati trovati */
    let contatore = document.createElement("p");
    contatore.innerText = "Found " + search.count + " elements";
    out.appendChild(contatore);
  }
}

/* Questa funzione da il via a tutto */
function mainFunction() {

  /* Alla pressione del "button" vengono eseguite le funzioni "clean"
  (che pulisce la lista dai vari contenuti precedentemente cercati)
  e di seguito la funzione "output"
  (che restituisce i risultati della ricerca e il numero di essi trovato)
  NOTA: La variabile "button" viene dichiarata a riga 177 */
  button.addEventListener('click', ()=> {
    clean();
    output();
  });

  /* Questa parte della funzione fa in modo di poter eseguire la ricerca
  premendo il tasto 'enter' sulla tastiera.
  Il ciclo di "for" serve a selezionare entrambi gli input field
  che sono stati 'catturati' a riga 178 */
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keypress", function(event) {
      /* Questo "if" fa in modo che alla pressione di enter
      il "button" venga cliccato in automatico, senza il bisogno di cliccarlo manualmente */
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
      }
    });
  }
}

window.onload = mainFunction();