# Guía de Vue.js

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

### computed
Las propiedades computadas (`computed`) son funciones que devuelven valores derivados de las propiedades del estado reactivo. Se recalculan automáticamente cuando cambian las propiedades dependientes.

```vue
<template>
  <p>Mensaje: {{ mensajeEnMayusculas }}</p>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'hola mundo',
    };
  },
  computed: {
    mensajeEnMayusculas() {
      return this.mensaje.toUpperCase();
    },
  },
};
</script>
```

---

### provide / inject
`provide` e `inject` son herramientas de Vue que permiten compartir datos entre un componente padre y sus descendientes, sin necesidad de pasar propiedades directamente a través de cada componente intermedio.

**(Padre):**
```vue
<template>
  <Hijo />
</template>

<script>
import { provide } from 'vue';
import Hijo from './Hijo.vue';

export default {
  setup() {
    provide('mensaje', 'Hola desde el padre');
  },
};
</script>
```

**(Hijo)**
```vue
<template>
  <p>{{ mensaje }}</p>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const mensaje = inject('mensaje');
    return { mensaje };
  },
};
</script>
```

---

### Conectarse a un JSON
Para consumir un archivo JSON local en Vue.js, puedes importarlo directamente como un módulo de JavaScript.

```vue
<template>
  <div v-for="usuario in usuarios" :key="usuario.id">
    <p>{{ usuario.nombre }}</p>
  </div>
</template>

<script>
import usuariosData from '@/data/usuarios.json';

export default {
  data() {
    return {
      usuarios: usuariosData,
    };
  },
};
</script>
```

---

### router-link
`router-link` es un componente de Vue Router que permite crear enlaces de navegación entre diferentes rutas de la aplicación, de forma declarativa y con soporte para transiciones y estilos activos.

```vue
<template>
  <div>
    <router-link to="/inicio" active-class="active-link">Inicio</router-link>
    <router-link to="/perfil" active-class="active-link">Perfil</router-link>
  </div>
</template>
```

---

### router-view
`router-view` es un componente utilizado para renderizar el contenido de la ruta actual. Es donde las vistas asociadas a las rutas definidas se insertan dinámicamente.

```vue
<template>
  <router-view />
</template>
```

---

### Menú con Vue Router
```vue
<template>
  <nav>
    <router-link to="/inicio">Inicio</router-link> |
    <router-link to="/acerca-de">Acerca de</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>
