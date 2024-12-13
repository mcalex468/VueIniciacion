# Guía de Vue.js

# Indice

1. [Creación de Proyecto](#creacion-proyecto)
2. [Conceptos Básicos de Vue.js](#conceptos-básicos-de-vuejs)
   - [ref()](#ref)
   - [reactive()](#reactive)
3. [Directivas](#directivas)
   - [v-bind](#v-bind)
   - [v-model](#v-model)
   - [v-for + :key](#v-for--key)
   - [v-if / v-else](#v-if--v-else)
   - [v-show](#v-show)
   - [v-on](#v-on)
4. [Temas Específicos de Vue.js](#temas-específicos-de-vuejs)
   - [defineProps](#defineprops)
   - [defineEmits](#defineemits)
   - [computed](#computed)
   - [provide / inject](#provide--inject)
5. [Conexión a JSON](#conexión-a-json)
6. [Navegación con Vue Router](#navegación-con-vue-router)
   - [router-link](#router-link)
   - [router-view](#router-view)
   - [Configuración del Router (Index.js)](#configuración-del-router-indexjs)


---

## Creacion Projecto
1. Comprobaciones :
node -v         nmp -v

2. Instal·lar node version manager NVM amb la següent instrucció

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash  (tancar i obrir terminal)

3. Instalar la versio que volem
   nvm use 18 (exemple)

4. Creacio Projecte
   npm create vue@latest
   Escollir tot el que volem afegir o implementar amb el projecte
5. Obrir Web
   cd nom carpeta
   npm install
   npm run dev
   
## Conceptos Básicos de Vue.js

ref(): Aquesta funció és ideal per fer reactius valors simples com números, cadenes de text o booleans. 
reactive(): Aquesta funció és ideal per fer reactius objectes.

## Directives
Directives:  Són atributs especials que amb el prefix v-. Ens permeten aplicar actualitzacions de forma reactiva al DOM.

El data binding es refereix a la vinculació automàtica entre les dades d'un component i la seva interfície d'usuari. 

### v-bind
Unidireccional (v-bind): Les dades flueixen en una direcció, des del model de dades cap a la interfície d'usuari.

```vue
<template>
  <img v-bind:src="imageUrl" alt="Ejemplo de v-bind" />
</template>

<script setup>
const imageUrl = 'https://via.placeholder.com/150';
</script>
```
---

### v-model
El `v-model` permite vincular el valor de un elemento del DOM (como un input, checkbox o select) con una propiedad del componente de forma bidireccional, lo que significa que cualquier cambio en el input actualiza la propiedad y viceversa.

```vue
<template>
  <input v-model="message" placeholder="Escribe algo" />
  <p>Mensaje: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('');
</script>
```
---

### v-for + :key
El `v-for` itera sobre una lista y genera elementos dinámicamente. El atributo :key asegura un renderizado eficiente.

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id"></li>
    <p>{{ item.name }}</p>
  </ul>
</template>

<script setup>
import items from './data.json'; // Importamos el JSON con los datos
</script>

```
### v-if / v-else
La directiva v-if s’utilitza per mostrar o ocultar elements segons una condició. 

Si la condició és true, l'element es renderitza; si és false, l'element no es mostra al DOM
```vue
<template>
  <p v-if="isLoggedIn">Bienvenido, usuario!</p>
  <p v-else>Por favor, inicia sesión.</p>
</template>

<script setup>
const isLoggedIn = false;
</script>
```
---

### v-show
El `v-show` es fa servir per mostrar o ocultar un element de la plantilla, sols canvia la propietat display CSS de l’element. En termes generals v-if té costos d’alternança més alts mentre que v-show té costos de renderització més alts.

```vue
<template>
  <p v-show="isVisible">Este texto puede mostrarse u ocultarse.</p>
  <button @click="isVisible = !isVisible">Toggle Visibilidad</button>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);
</script>
```
---

### v-on
El `v-on` se usa para agregar escuchadores de eventos a los elementos del DOM, como clics, envíos de formularios, entre otros. Su abreviación es `@`.

```vue
<template>
  <button @click="handleClick">Haz clic aquí</button>
</template>

<script setup>
const handleClick = () => {
  alert('¡Botón clickeado!');
};
</script>

```
---

## Resumen
v-bind para enlazar atributos dinámicos.

v-model para la vinculación bidireccional.

v-for con :key para listas.

v-if/v-else para mostrar/ocultar condicionalmente.

v-show para ocultar un elemento sin sacarlo del DOM.

@ o v-on para manejar eventos.


--> [Indice](#indice)

## Temas Específicos de Vue.js

### defineProps
El `defineProps` es una función dEl component pare vol enviar el nomContacte al component fill, observa la sintaxi, afegim : nom (v-model) i a continuació la variable amb la informació a enviar.

**(Padre)**
```vue
<template>
  <div>
    <ChildComponent 
      :nom="nom"
   />
  
  </div>
</template>

<script setup>
import ContacteFill from './ContacteFill.vue';
import { ref } from 'vue';
const nom = ref('Define Props Pasando Datos');

</script>
```

**(Hijo)**
```vue
<template>
  <div>
  <p>Prueba de: {{  }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
    nom: String, // La prop debe ser de tipo String
    required: true, // Esta prop es obligatoria
});

</script>
```
---

### defineEmits
El `defineEmits` permite definir eventos personalizados que un componente hijo puede emitir hacia su componente padre. Esto es útil para comunicar acciones o datos hacia el componente que lo contiene.

**(Hijo)**
```vue
<template>
  <div>
    <button @click="incremento">Incrementar</button>
  </div>
</template>

<script setup>
// Definir el evento que emitirá el hijo
const emit = defineEmits(['incremento']);

// Función para emitir el evento cuando se haga clic en el botón
const incremento = () => {
  emit('incremento');
};
</script>

```

**(Pare)**
```vue
<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <!-- Escuchar el evento increment del componente hijo -->
    <ChildComponent
      @increment="increaseCount" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

// Crear una variable reactiva para el contador
const count = ref(0);

// Función que incrementa el contador
const increaseCount = () => {
  count.value++;
};
</script>

```
---

--> [Indice](#indice)

### computed
Las propiedades computadas (`computed`) son funciones que devuelven valores derivados de las propiedades del estado reactivo. Se recalculan automáticamente cuando cambian las propiedades dependientes. Muestran el valor a la vez que se escribe

```vue
<template>
  <div>
    <h1>{{ titulo }} </h1>
    <h1>El número original es: {{ number }}</h1>
    <h2>El número multiplicado por 2 es: {{ multipliedNumber }}</h2>
    <input v-model="titulo" type="text" placeholder="Escribe el título">
    <input v-model="number" type="number" placeholder="Escribe un número">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Variable reactiva para almacenar el número
const number = ref(0);

// Propiedad computada que calcula el número multiplicado por 2
const multipliedNumber = computed(() => {
  return number.value * 2;
});
</script>
```

---

### provide / inject
`provide` e `inject` son herramientas de Vue que permiten compartir datos entre un componente padre y sus descendientes, sin necesidad de pasar propiedades directamente a través de cada componente intermedio.

**(Padre):**
```vue
<template>
  <div>
    <h1>Componente Padre</h1>
    <p>{{ message }}</p>
    <ComponenteHijo />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import ComponenteHijo from './ComponenteHijo.vue';

// Creamos una propiedad reactiva para el mensaje
const message = ref('Este es un mensaje del componente padre');

// Usamos provide para compartir el valor con los componentes hijos
provide('message', message);
</script>

```

**(Hijo)**
```vue
<template>
  <div>
    <h2>Componente Hijo</h2>
    <p>{{ injectedMessage }}</p>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';

// Usamos inject para acceder al valor proporcionado por el componente padre
const injectedMessage = inject('message');

// Si el mensaje no está disponible, le asignamos un valor por defecto
if (!injectedMessage) {
  injectedMessage = ref('No hay mensaje disponible');
}
</script>
```
---

--> [Indice](#indice)

### Conectarse a un JSON
Para consumir un archivo JSON local en Vue.js, puedes importarlo directamente como un módulo de JavaScript.

```vue
<template>
  <div v-for="usuario in usuarios" :key="usuario.id">
   // hemos creado una variable donde extraemos los nombres // usuarios.nombre (sin variable)
    <p>{{ usuarios }}</p>
  </div>
</template>

<script setup>
import usuariosData from '@/data/usuarios.json';

// Directamente exportamos los datos importados, sin necesidad de usar ref
const usuarios = usuariosData.nombre;
</script>

```

---

### router-link
El `router-link` es un componente de Vue Router que permite crear enlaces de navegación entre diferentes rutas de la aplicación, de forma declarativa y con soporte para transiciones y estilos activos.
**(Menu.vue)**

Este componente simplemente sera donde guardemos nuestros `Router-Link` con tal de optimizar

```vue
<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>
</template>

<script setup>
// No necesitamos código adicional aquí ya que es un componente puramente de presentación.
</script
```
### router-view
`router-view` es un componente utilizado para renderizar el contenido de la ruta actual. Es donde las vistas asociadas a las rutas definidas se insertan dinámicamente, se coloca en el App.vue o donde quieres enseñar el contenido de la aplicación.

**(App.vue)**
```vue
<template>
  <div>
    <Menu /> <!-- El menú siempre estará visible -->
    <main>
      <router-view /> <!-- Aquí se renderizarán las vistas según la ruta -->
    </main>
  </div>
</template>

```

**(Index.js)**

Aqui encontraremos las distintas rutas de las views, que serian las diferentes cosas que apareceran o se veran en la pagina suelen ser Views, y no componentes en si.

```vue
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

---
--> [Indice](#indice)

export default router;
```
---

