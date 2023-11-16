# Funzioni (CDS)

Una funzione si dichiara in una service CDS in questo modo. 
La definizione si scrive in un file `.cds`, mentre l'implementazione
avviene in un file `.js` con lo stesso identico nome.

::: code-group

```cds [pippo-srv.cds]
service PippoService {
  function sum (x: Integer, y: Integer) returns Integer;
}
```

```js [pippo-srv.js]
module.exports = srv => {
  srv.on("foo", req => {
    return 42;
  });
}
```

:::

## Chiamare le funzioni tramite richiesta HTTP

In un file `.http` scrivere:

```
GET .../odata/v4/pippo/sum(x=2,y=4)
```

Spiegazione:
- `pippo` = prima parte del nome del service in kebab-case (es. DioCaneService -> dio-cane)
- `sum`, nome funzione
- `(x=2,y=4)`, eventuale lista di argomenti con nome e valore


## Come chiamare funzioni da una view

Se il mainService è quello indicato nella CDS basta chiamarle come un normale
binding ad una entity.


```xml
<Text text="{path: '/foo()', type: 'sap.ui.model.odata.type.Int32'}" />
```

::: warning
Se la funzione chiamata ritorna un valore con tipo primitivo, questo va specificato con
la proprietà `type` (in questo caso era un intero quindi `Int32` va bene). Per una reference dei tipi che si possono
usare leggere [SAP OData types](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/468a97775123488ab3345a0c48cadd8f/333a9dac5a614b1590c61916c9cecbf5.html).
:::

inserire i puntini ... fra parentesi == deferred