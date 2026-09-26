# 🎮 Nexus Gamer

**Nexus Gamer** es una aplicación web desarrollada con Angular, orientada a una tienda especializada en productos y equipamiento para videojuegos. El proyecto cuenta con una interfaz moderna con temática **Dark/Neón**, catálogo de productos, promociones, información de la marca y sección de contacto.

## 📂 Estructura del proyecto

```text
src/
├── app/
│   ├── features/
│   │   └── landing/
│   │       ├── components/
│   │       │   ├── contacto/      # Información de contacto y mapa
│   │       │   ├── footer/        # Pie de página y derechos
│   │       │   ├── hero/          # Banner principal / CTA
│   │       │   ├── navbar/        # Navegación principal de la tienda
│   │       │   ├── nosotros/      # Sobre la marca y propuesta de valor
│   │       │   ├── productos/     # Catálogo dinámico de equipamiento
│   │       │   └── promocion/     # Secciones de ofertas y combos
│   │       └── pages/
│   │           └── inicio/        # Vista integrada de la Landing Page
│   ├── app-routing.module.ts      # Enrutamiento principal
│   ├── app.component.ts           # Componente contenedor
│   └── app.module.ts              # Declaración de módulos y componentes
├── index.html                     # HTML raíz
└── styles.css                     # Estilos globales y variables Dark/Neón
```

## 🧩 Componentes principales

### Navbar

Contiene la navegación principal de **Nexus Gamer**, permitiendo acceder a las diferentes secciones de la página.

### Hero

Corresponde al banner principal de la página, donde se presenta la propuesta principal de Nexus Gamer y los botones de llamada a la acción.

### Nosotros

Presenta información sobre **Nexus Gamer**, su propuesta de valor y su enfoque dentro del mundo gaming.

### Productos

Muestra el catálogo de productos y equipamiento disponible en la tienda.

### Promoción

Presenta las diferentes ofertas, promociones y combos disponibles para los usuarios.

### Contacto

Contiene la información de contacto de Nexus Gamer y la ubicación mediante un mapa.

### Footer

Incluye información complementaria de la página y los derechos correspondientes.

## 🚀 Servidor de desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

Una vez iniciado el servidor, abre el navegador y visita:

```text
http://localhost:4200/
```

La aplicación se actualizará automáticamente cada vez que se realicen cambios en los archivos del proyecto.

## 🏗️ Compilación

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Los archivos generados se almacenarán en la carpeta `dist/`.

## 🧪 Pruebas unitarias

Para ejecutar las pruebas unitarias, utiliza:

```bash
ng test
```

## 🌐 Estilos

Los estilos globales de **Nexus Gamer** se encuentran en:

```text
src/styles.css
```

Este archivo contiene los estilos generales y las variables utilizadas para mantener la temática **Dark/Neón** de la aplicación.

## 🎮 Nexus Gamer

Una experiencia enfocada en el mundo gaming, con una interfaz moderna y una presentación organizada de productos, promociones e información de la tienda.
