# Contract test using prism
#
#
#

## Consumer contract test
- installa sulla tua macchina la dipendenza di prism o in alternativa l immagina docker: npm install -g @stoplight/prism-cli
- posizionati sulla cartella del contratto e lanciare: prism mock book-store.yaml
- lanciare l applicazione Angular modificando la porta del baseurl dell environment tenendo present che la port di default di prism e' 4010
-
## Provider contract test
- installa sulla tua macchina la dipendenza di prism o in alternativa l immagina docker: npm install -g @stoplight/prism-cli
- posizionati sulla cartella del contratto e lanciare: prism proxy book-store.yaml <indirizzo,porta_backend> --errors
- lanciare la reale implementazione dell API
- Inviare richieste http con client come postman o preparandosi script di CI con DSL come Karate, e puntare al prism proxy e non all indirizzo della reale implementazione API
- il proxy fara' da tramite tra il client e la reale implementazione e inviare una risposta di error nel caso in cui l implementazione API risponda con un payload non conforme al contratto OpenApi
