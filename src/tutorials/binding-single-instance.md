# Ottenere una riga del db tramite controller

Per ottenere una riga abbiamo bisogno di un modo per distinguerla, ossia
una chiave.

Sotto supponiamo che il nostro model abbia nome `odata` e che nel db
sia presente una entity con nome `Users`.

## Esempio di chiave singola

```js
let odataModel = this.getView().getModel("odata")
let context = odataModel.bindContext("/Users(id=42)")
let user = await binding.requestObject()
```

Qui nella variabile `user` avremo un oggetto contenente tutte le informazioni
dell'utente con l'id 42.

::: info
Il nome `bindContext` aiuta ben poco nella comprensione del codice. Per
capire meglio cosa sta succedendo, stiamo _creando_ un context binding
(quindi collegato ad una singola istanza di una entity).
:::

## Esempio di chiave composta

```js
let odataModel = this.getView().getModel("odata")
let context = odataModel.bindContext("/Users(name='Mario',age=15)")
let user = await binding.requestObject()
```

Qui nella variabile `user` avremo un oggetto contenente tutte le informazioni
dell'utente con nome Mario ed età 15.
