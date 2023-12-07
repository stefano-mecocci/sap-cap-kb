# Glossario

## Controller

Uno dei tre elementi fondamentali del pattern MVC. Contiene la logica dell'applicazione.
Come ad esempio inizializzare la view, aggiornare i dati, elaborare gli input, ecc.

## View

Contiene tutta la UI dell'applicazione, gestisce come i dati vengono presentati all'utente.


## Manifest

Descrive tutta la configurazione dell'applicazione, fra cui:

- dipendenze
- model
- risorse statiche
- routing
- parametri dell'applicazione (titolo, descrizione, versione, ecc.)

## Model

Rappresenta la struttura dei dati all'interno di un applicazione. Ne esistono di due categorie: quelli
forniti di default (es. i18n) e quelli personalizzati definibili dallo sviluppatore.

## Context binding

Un collegamento ad una _singola_ istanza di una entity (una riga del db). Non rappresenta solo
i dati dell'entità ma anche i suoi eventuali collegamenti con altre entity.

