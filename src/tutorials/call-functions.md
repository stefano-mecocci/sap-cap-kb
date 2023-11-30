# Usare un servizio

Per usare un servizio OData esistono vari modi. Ognuno di questi fa riferimento
al concetto di _binding_. In parole povere, si collega un endpoint del server ad
un elemento XML oppure ad un oggetto JS.

## Dichiarazione modello OData nel manifest

...

## Ottenere una risorsa

Per ottenere una risorsa si fa riferimento ad essa tramite un _path_.
In questo modo possiamo creare il binding.

Ad esempio supponiamo di voler ottenere tutti i record relativi ad una entity chiamata _Users_
e volerli stampare in una tabella. Abbiamo due possibilità:

### 1) binding diretto alla tabella

Su ogni elemento che supporta l'aggregation `items` è possibile
effetuare il binding di una lista di oggetti. Ad esempio:

```xml
<Table items="{odata>/Users}">
...
</Table>
```

### 2) binding indiretto con JS

Supponendo che il nostro model abbia nome `odata`.

```js
let odataModel = this.getView().getModel("odata");
let binding = odataModel.bindList("/Users");
let contexts = await binding.requestContexts();
let users = contexts.map(ctx => ctx.getObject());
```

Qui nella variabile `users` avremo la lista di utenti in forma di array di
oggetti.

::: danger Occhio al contesto
Attenzione ad usare tutto ciò in un contesto `async`, dato che nella terza riga
viene usato il costrutto `await`
:::
