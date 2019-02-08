# Avatares
Para utilizar el componente avatar solo tendrás que importar Avatar.js en tu proyecto
y configurarlo como tú quieras

```jsx
import Avatar from './Avatar'
```

## Avatares de Imágenes
Puedes personalizar tu avatar con la imagen que quieras añadiendo la prop **photo** y la ruta de tú imagen:

```jsx
<Avatar photo={foto}></Avatar>
```

## Avatares de Letras
Puedes utilizar el avatar de iniciales, podrás añadir las iniciales, modificar el color de fondo **backgroundColor** y el color de las letras **initialColor**

```jsx
<Avatar initials="HR" backgroundColor="#000000" initialColor="#ffffff"></Avatar>
```

## Tamaño avatar
Puedes elegir entre 3 tamaños diferentes: **small** , **medium** y **large** , añadiendo la prop size.

Ejemplo tamaño pequeño:

```jsx
<Avatar photo={foto} size="small"></Avatar>
```

Ejemplo tamaño mediano:

```jsx
<Avatar photo={foto} size="medium"></Avatar>
```


Ejemplo tamaño grande:

```jsx
<Avatar photo={foto} size="large"></Avatar>
```

## Forma avatar
Puedes elegir entre 2 formas diferentes: **circle** y **square** , añadiendo la prop shape.

Ejemplo forma circular:

```jsx
<Avatar photo={foto} shape="circle"></Avatar>
```

Ejemplo forma cuadrado:

```jsx
<Avatar photo={foto} shape="square"></Avatar>
```















