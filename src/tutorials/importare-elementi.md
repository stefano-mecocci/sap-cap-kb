# Importare elementi

In questa sezione viene illustrato come importare elementi di SAP UI5 nelle view
ma anche nei controller.

## View

In questo blocco di codice importiamo la libreria `sap.m` per usare `Button`:

```xml
<mvc:View
	controllerName="..."
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:prova="sap.m">
  <prova:Button text="Fai qualcosa" />
</mvc:View>
```

Qui `prova` è un _alias_. In ogni import va sempre specificato un nome che funga da alias.
Inoltre l'alias va scritto anche come prefisso quando si usa un elemento della libreria.

::: info Nota
La convenzione vuole che come alias si usi sempre il nome che segue dopo l'ultimo punto della
libreria (es. `m` per `sap.m` o `layout` per `sap.ui.layout`).
:::

**Import senza alias**

Esiste la possibilità di importare gli elementi di una libreria senza alias. Tuttavia **questo si può fare per una sola
libreria**. Per farlo bisogna scrivere solo `xmlns`, in questo modo non si deve prefissare gli elementi 
della libreria quando si usano.

```xml
<mvc:View
	controllerName="..."
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
  <Button text="Fai qualcosa" />
</mvc:View>
```

::: info
Di solito questa scorciatoia si usa per `sap.m` in quanto i suoi elementi si usano spesso.
:::


## Controller

Per importare elementi, e non solo, in un controller dobbiamo fare due cose:
- specificare l'import come stringa nell'array (primo argomento)
- aggiungere un parametro alla funzione (secondo argomento) con lo stesso nome

Ogni import è una stringa che definisce un percorso nella libreria.

::: danger
Quando importiamo dobbiamo stare attenti a due cose:

1. controllare che il percorso dell'import sia scritto bene
2. assicurarsi che l'**ordine e il numero** di import combaci con quello degli argomenti
   della funzione

:::

**Esempio di import corretto**


```js
sap.ui.define([
  "sap/m/MessageToast",
  "sap/m/Button",
], function (MessageToast, Button) {
  // code
});
```

**Esempio di import errato (ordine sbagliato)**


```js
sap.ui.define([
  "sap/m/Button",
  "sap/m/MessageToast", // [!code error]
], function (MessageToast, Button) {
  // code
});
```
::: info Nota
Il nome assegnato nei parametri può anche essere a piacere, ma è preferibile
 lasciarlo uguale a quello della libreria per aumentare la chiarezza del codice.
:::