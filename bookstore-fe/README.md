# Example of Angular client implementation using OpenApi Generator plugin
#
#
#
Nella folder book-fe trovate un esempio di frontend Angular che utilizza un client sdk autogenerato con il plugin di openapi generator per consumare i servizi REST del bookstore.
Potete utilizzare i servizi REST del backend del progetto o utilizzare il mock server.
## Lanciare mock server
- installa sulla tua macchina la dipendenza di prism o in alternativa l immagina docker: npm install -g @stoplight/prism-cli
- posizionati sulla cartella del contratto e lanciare: prism mock book-store.yaml
- lanciare l applicazione Angular modificando la porta del baseurl dell environment tenendo present che la port di default di prism e' 4010
