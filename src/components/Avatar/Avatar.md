# Avatares
Para utilizar el componente avatar solo tendrás que importar Avatar.js en tu proyecto
y configurarlo como tú quieras.
Para visualizar correctamente el avatar es **OBLIGATORIO** añadir el tamaño **size** y la forma **shape** de tu avatar
Puedes elegir entre 3 tamaños diferentes: **small** , **medium** y **large** , añadiendo la prop size.
Puedes elegir entre 2 formas diferentes: **circle** y **square** , añadiendo la prop shape.


## Avatares de Imágenes
Puedes personalizar tu avatar con la imagen que quieras añadiendo la prop **photo** y la ruta de tú imagen:

```jsx
<Avatar photo={"https://avatars2.githubusercontent.com/u/7150812?s=460&v=4"} shape="square" size="medium"></Avatar>
```

## Avatares de Letras
Puedes utilizar el avatar de iniciales, podrás añadir las iniciales, modificar el color de fondo **backgroundColor** y el color de las letras **initialColor**

```jsx
<Avatar initials="HR" backgroundColor="#000000" initialColor="#ffffff" shape="circle" size="large"></Avatar>
```
















