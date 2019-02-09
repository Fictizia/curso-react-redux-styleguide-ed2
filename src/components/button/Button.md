Ejemplo botón primario
```jsx
<Button
    variant="primary"
    active={true}
    padding='50px'>Primary!</Button>
```

Ejemplo botón secundario
```jsx
<Button
    variant="secondary"
    active={true}
    padding='50px'>Secundary!</Button>
```

Ejemplo botón con alert
```jsx
<Button
    variant="primary"
    active={true}
    padding='50px'
    onPress={() => (alert('pressed!'))}>Click me!</Button>
```