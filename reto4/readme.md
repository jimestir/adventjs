#  Reto #4:

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento ```5```, se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```
Creamos un triángulo de asteriscos ```*``` con la altura proporcionada y, a los lados, usamos el guión bajo ```_``` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de ```#```.

Otro ejemplo con un árbol de altura ```3```:
```javascirpt
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea ```n``` para cada línea para que se forme bien el árbol.

    Observaciones:

- la altura del albor sera la ```#``` de iteraciones
- las ```*``` en la punta empezaran con una y ira bajando con un incremento de 2 (ORINETACION de arriba hacea abajo) (hasta llegar a la altura deceada).
- los ```-``` disminuiran de uno en uno DE CADA LADO (ORIENTACION de arriba hacea abajo).
- el tronco siempre sera el mismo variando su base ```-``` de acuerdo a la ultimas ```*``` que quedan.

      Conclusion:

  Se realizara un for() para que la variable iteradora nos sirva de ayuda, y mediante calculos se imprima correctamente los ```*``` y ```-```.
