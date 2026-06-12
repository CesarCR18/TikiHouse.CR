# Tiki House Costa Rica - Sitio Web Oficial 🍹🏝️

Este es el proyecto web de la landing page para **Tiki House Costa Rica**, un emprendimiento premium de coctelería tropical y barras móviles para eventos privados, bodas y fiestas corporativas en Costa Rica.

El sitio está desarrollado utilizando el framework de alto rendimiento **Astro** y estilizado con la versión más reciente de **Tailwind CSS**.

---

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
*   [Node.js](https://nodejs.org/) (Versión 18.0 o superior recomendada)
*   Un gestor de paquetes como `npm` (incluido con Node.js)

---

## ⚙️ Configuración Inicial y Variables de Entorno

El sitio lee de forma dinámica la dirección de correo comercial desde una variable de entorno, evitando quemar datos sensibles directamente en el código de producción.

1.  En la raíz del proyecto encontrarás los siguientes archivos:
    *   `.env` (Valores generales de entorno)
    *   `.env.development` (Entorno de desarrollo local)
    *   `.env.production` (Entorno de producción)
2.  Todos ellos contienen la variable:
    ```env
    PUBLIC_CONTACT_EMAIL=contacto@tikihouse.cr
    ```
3.  Modifica el valor en estos archivos con la dirección de correo final donde deseas canalizar los envíos de cotizaciones del formulario.

*Nota: El archivo `.gitignore` está configurado para evitar subir archivos `.env` locales a repositorios públicos.*

---

## 🛠️ Instalación y Uso Local

Sigue estos pasos en tu terminal para correr el proyecto localmente:

### 1. Instalar dependencias
Instala todos los paquetes necesarios del ecosistema Node/Astro:
```bash
npm install
```

### 2. Correr el servidor de desarrollo
Inicia el entorno de pruebas local:
```bash
npm run dev
```
Una vez iniciado, abre en tu navegador: [http://localhost:4321](http://localhost:4321)

---

## 📦 Compilación para Producción (Build)

Para generar la versión optimizada y estática lista para desplegar en plataformas de hosting (Vercel, Netlify, Github Pages, etc.):

```bash
npm run build
```

Este comando validará los archivos TypeScript y compilará todo el sitio dentro de la carpeta `dist/`.

Para previsualizar localmente el build de producción generado:
```bash
npm run preview
```

---

## 🐙 Control de Versiones con Git

Si deseas rastrear tus cambios y subir el código a GitHub, ejecuta las siguientes instrucciones desde la raíz del proyecto (`tiki-house`):

1.  **Inicializar el repositorio local:**
    ```bash
    git init
    ```
2.  **Añadir todos los archivos al área de preparación:**
    ```bash
    git add .
    ```
3.  **Realizar el primer commit:**
    ```bash
    git commit -m "Initial Tiki House Costa Rica"
    ```
4.  **Vincular a tu repositorio remoto de GitHub (reemplaza con tu URL real):**
    ```bash
    git remote add origin https://github.com/tu-usuario/tiki-house.git
    git branch -M main
    ```
5.  **Subir los archivos:**
    ```bash
    git push -u origin main
    ```

---

## 🎨 Paleta de Colores Corporativa (Tailwind)

El diseño visual utiliza una paleta nocturna elegante inspirada en la selva y la playa de Costa Rica:

*   **Fondo principal (`tiki-dark`):** `#050807`
*   **Tarjetas y secciones (`tiki-card`):** `#0B1510`
*   **Verde palmera (`tiki-palm`):** `#2DD47E`
*   **Naranja cóctel (`tiki-orange`):** `#F97316`
*   **Amarillo tropical (`tiki-yellow`):** `#FACC15`

Desarrollado con ❤️ para **Tiki House Costa Rica**. ¡Pura Vida!
