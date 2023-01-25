# Sayni - Ecommerce
Sayni es un proyecto ecommerce para [Sayni Store](https://www.instagram.com/sayni.pe/), una tienda de ropa para dama.

![SayniStore](https://i.ibb.co/rvTR9z5/iphone-multiple-screens-mockup.png)

## Tecnologias
Para modificar este proyecto es necesario saber las tecnologias basicas de la web `html`, `css` y `javascript`. Adicional a esto, la aplicación fue construida usando las siguientes tecnologias:

* [React](https://reactjs.org/) \
Libreria para `JavaScript` que nos ayuda a construir interfaces reactivas.
* [Firebase](https://firebase.google.com/) \
Plataforma de desarrollo de Google, que nos sirve de backend para usar los servicios de base de datos llamado `firestore` y la autentificación de usuarios (login).


## Instalación
Para instalar este proyecto en un entorno local (su computador) abra la `terminal` de comandos y siga estos pasos:

**1. Clonar el repositorio** \
Para este paso es necesario tener instalado [Git](https://git-scm.com/).
``` shell
git clone https://github.com/alexbvart/sayni
```
Para ingresar a la carpeta de la aplicación usamos:
``` shell
cd sayni
```
**2. Instalamos las dependencias**\
En este punto necesitaremos tener instalado [Node](https://nodejs.org/en/).
``` shell
npm install
```


**3. Ejecutar la aplicación**

Ahora si ya estamos listos para ejecutar la aplicación con:

``` shell
npm run dev
```
Ahora la aplicación deberia de estar en [http://localhost:3000](http://localhost:3000) en su navegador.

## Firebase
Para replicar este proyecto necesitaras, adicional al código fuente, un backend como `firebase` donde hacer las peticiones.

### Firestore
Es una base de datos `NoSql` donde guardamos los productos, categorias y ordenes. Debe tener las siguientes colecciones:

**categories**
```javascript
    {
        description: " ",                 //string
        id_category: " ",                 //string
        name: "",                         //string
    }
```
<details>
<summary>ejemplo:</summary>

```javascript
    {
        description: "Esencial para este invierno",
        id_category: "1",
        name: "Poleras",
    }
```
</details>

**products**
```javascript
    {
        id: "",,                         //number
        id_category: "",                 //number
        name:  " ",                      //string
        colors: ["", "", "", ""],        //array
        material: " ",                   //string
        price: "", ,                     //number
        size:  ["", "", "", ""],         //array
        stock: 10,,                      //number
        default_image:  " ",             //string",
    },
```
<details>
<summary>ejemplo:</summary>

```javascript
    {
        id: 2,
        id_category: "1",
        name: "Polera Oversize",
        colors: ["Celeste Bb", "Lila Bb", "Negro", "Lacre", "Rosa Oscuro", "Melange"],
        material: "Franela Reactiva",
        price: 65,
        size: ["S", "M", "L"],
        stock: 10,
        default_image: "https://gamarraclick.com/5996-large_default/polera-franela-reactiva-palo-rosa.jpg",
    },
```
</details>

**orders**
```javascript
{
    user: {                     // map
        email: "",              // string
        name: "",               // string
        id: "",                 // string
    },
    date: "",                   // timestamp
    items: [                    // array
        { product},
        { product},
    ],
    total: 0.00                 // number
}
```
<details>
<summary>ejemplo:</summary>

```javascript
{
    user: {
        email: "gianella@sayni.com",
        name: "Gianella Briones",
        id: "1985765321",
    },
    date: "Jan 30, 2022 at 1:08:53 PM UTC-5",
    items: [
        { }, { }
    ],
    total: 120
}
```
</details>

### Authentication
Para que los compradores puedan identificarse con sus redes sociales(`google` y `email`), en lugar de llenar el formulario con sus datos, debes habilitar el modulo `authentication` y agregar los proveedores(providers) respectivos.

>  Ademas para los usuarios que no tienen cuenta en google se implemento el uso de email.

## Contacto
* Linkedin: [alexbvart](https://www.linkedin.com/in/alexbvart/)
* Github: [alexbvart](https://github.com/alexbvart)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).
