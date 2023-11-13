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
module.exports = class Pippo extends cds.Service {
  sum(x, y) { 
    return x + y; 
  }
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
- `(x=2,y=4)`, lista di argomenti con nome e valore


## Come chiamare funzioni da un controller
