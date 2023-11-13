# Pulsanti

In questa sezione viene mostrato come aggiungere pulsanti. Quelli usati sono i pulsanti
del package `sap.m`

## Aggiungere un pulsante

Per ottenere un pulsante basterà usare il tag fornito in questo modo:

```xml
<Button text="Sono un pulsante" />
```

Notiamo subito l'attributo `text` che indica il testo del pulsante

## Aggiungere un azione al clic

Per aggiungere un azione alla pressione del pulsante dobbiamo eseguire due passi:

1. creare l'handler nel controller collegato alla view
2. collegare l'handler con il pulsante

::: code-group

```xml [view.xml]
<Button text="Sono un pulsante" press=".onHello" />
```

```js [controller.js]
sap.ui.define(
  ['sap/ui/core/mvc/Controller'],
	function(Controller) {
	"use strict";

	return Controller.extend("...", {
      onHello() { // [!code focus:3]
        alert("Hello world");
      }
	});
});

```

:::

Seguono subito alcune considerazioni

::: info
- Il collegamento avviene attraverso l'attributo `press`
- nel valore dell'attributo `press`, il nome dell'handler va prefissato con un punto (è sintassi)
- è convenzione nominare l'handler con la parola `on` come prefisso e in camelCase
:::