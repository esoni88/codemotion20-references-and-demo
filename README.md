# Contract First API Development with OpenAPI @Codemotion 2020

"Contract-first" e' una metodologia di lavoro per lo sviluppo di API che prevede di definire la specifica delle API prima ancora di svilupparle utilizzando lo standard OpenApi. Dalle specifiche OpenApi e' possibile generare automaticamente documentazione, Client SDK, Stub server, Service Virtualization, Acceptance Test, Configurazione di Api Gateway. In questa sessione ti mostrerò come utilizzare il principio Contract-first e i tool OpenApi generando automaticamente un sacco di codice del boilerplate, alcuni dei tuoi test e consentendo più flussi di lavoro paralleli all'interno del tuo team.
* [Maggiori Info](https://www.codemotion.com/talks/contract-first-api-development-con-openapi3-16568)  
# Slide
Trovate le slide della sessione al seguente  [URL](https://docs.google.com/presentation/d/17oIr_68jIMlWfJwHX1xQfyKXlcAvTDcPZU7xIT8pv7I/edit?usp=sharing)
# Altri Talk su OpenAPI
Vi consiglio la visione dei seguenti talk inerenti a openAPI e al contract-first API development
* [API Contract Testing di Taylor Barnett](https://www.youtube.com/watch?v=0eGG597Vgpk)
* [Contract First API Development di Deven Philllips](https://www.youtube.com/watch?v=BqQgudccQ04)
* [Better API Design with OpenAPI](https://www.youtube.com/watch?v=uBs6dfUgxcI)
* [Bring OpenAPI to devOps di Vincenzo Chianese](https://www.youtube.com/watch?v=rAn87yHyNPE)

# Tools OpenAPI
Trovate una collezione di tool openapi al seguente URL: https://openapi.tools/. In questa sezione vi condivido i tool che preferisco per tipologia
## Editor
* [Swagger Editor](https://swagger.io/tools/swagger-editor/)
* [Swagger hub](https://swagger.io/tools/swaggerhub/)
* [APIcurio](https://www.apicur.io/)
* [Stoplight studio](https://stoplight.io/studio/)

## Generatori di codice e client sdk
* [openAPI generator](https://github.com/OpenAPITools/openapi-generator)

## Generatori di Documentazione
* [redoc](http://redocly.github.io/redoc/)

## Mock, Proxy, Contract test
* [prism](https://github.com/stoplightio/prism)

## API lint
* [spectral](https://stoplight.io/open-source/spectral/)

# Demo
Per integrare il talk ho preparato una demo che realizza delle API di un bookstore molto minimale il quale permette di:
* Recuperare i libri salvati nel bookstore, utilizzando paginazione e alcuni filtri.
* Inserire un nuovo libro nel bookstore

#
La demo e' composta dai seguenti componenti:
* contratto openAPI (/contract/book-store.yaml) che contiene la specifica delle API del bookstore descritta in openAPI 3. Trovate anche un antemprima del contratto caricate sau swagger hub al seguente URL (https://app.swaggerhub.com/apis/dario-frongillo/bookstore/1.0.0)
* RESTful backend java spring realizzato con metodologia contract-first e quindi in sync con il contratto openAPI del repository. Il code skeleton del backend e' generato e manutenuto in sync utilizzando openAPI generator. Il codice sorgente del backend e' contenuto nella folder /bookstore-be
* Angular frontend application realizzata con metolodogia contract-first, ovvero auto-generando il client sdk che permette alla web application di consumare le API del backend astraendo completamente dal protocollo http.
* contract-test esempio di scenari di contract-test per verificare la conformita' delle implementazioni con il contratto.

# Ringraziamenti

Un ringraziamento speciale va ad alcuni amici che mi hanno supportato durante la preparazione della sessione.

  - Riccardo Nuzzone che ha sviluppato la UI della demo Angular
  - Giorgio Boa e Mich Murabito per le loro review della mia sessione
  - Vincenzo Chianese per chiarimenti e approfondimenti 

