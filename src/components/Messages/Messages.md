Ventana de mensajes de error, confirmación o pregunta

```jsx
<Message type="error"/>
<Message type="success"/>
<Message type="question"/>
```

Importar el componente `Message` y pasarle como `props.type` alguno de los siguientes valores, según el tipo de ventana de mensaje deseado. 

1. `success`: para mensajes de confirmación
2. `error`: para devolver un mensaje de error
3. `question`: para un mensaje de pregunta