# 📑 ESTADO ACTUAL DEL PROYECTO: RONDA

## 🚀 Último Checkpoint
- **Estado:** Pulido visual del frontend + filtros y paginación en `/unirse`.
- **Fecha/Hora:** 27/05/2026.
- **Rama:** `frontend-corrections`.

## ✅ Componentes y Características Completadas
- [x] Estructura de carpetas a mano (`/frontend` y `/backend`).
- [x] Configuración de sub-agentes en `.codexrules`.
- [x] **Frontend:** Creado componente `HomeComponent` con diseño premium estilo Genesis (explicación de la app y botones "Crear" y "Unirse"). Ruta por defecto configurada.
- [x] **Backend:** Creadas entidades `Ronda` y `Pedido`, repositorios JPA, servicio y controlador REST para rondas y pedidos.
- [x] **Frontend:** Creado servicio HTTP `Ronda`, componente `RondaForm` y ruta `/crear-ronda` para publicar rondas.
- [x] **Frontend:** Creado tablón `/unirse` con tarjetas de rondas activas, pedidos existentes y formulario para apuntarse.
- [x] **Fullstack:** El listado filtra rondas activas y permite cerrar rondas desde el tablón, refrescando automáticamente.
- [x] **Fix Frontend:** El tablón usa `signal()` para refrescar la vista cuando llegan las rondas del backend.

## ✅ Iteración 27/05 — Pulido del frontend (`frontend-corrections`)
- [x] **Documentación raíz:** Nuevo `README.md` en la raíz con la explicación de la app, el stack y las instrucciones de arranque de backend y frontend. `.gitignore` y `.gitattributes` consolidados en la raíz (los duplicados de `backend/` y `frontend/` se eliminaron, junto con el `README.md` autogenerado de Angular).
- [x] **Logo SVG:** Creados `frontend/public/logo.svg` (icono + wordmark) y `frontend/public/logo-mark.svg` (solo icono, 1:1), ambos con el gradiente teal→indigo del proyecto. Usados como favicon y en las topbars de Home, RondaForm y RondaList. Título del documento cambiado a "Ronda".
- [x] **Animaciones CSS sutiles:** `@keyframes` `rondaFadeUp` y `rondaPopIn` con cascada escalonada en hero, panel lateral, encabezados y tarjetas. Elevación en hover (`translateY(-2px)` + sombra) en botones primarios/secundarios, tarjetas de beneficio, tarjetas de pasos y el botón de envío del formulario. Todo dentro de `@media (prefers-reduced-motion: no-preference)`.
- [x] **Redirección tras crear ronda:** `ronda-form.ts` ahora navega a `/unirse` en lugar de `/` después de un alta correcta.
- [x] **Nueva sección "Por qué Ronda":** Añadida entre el hero y "Cómo funciona" en `home.html`, con tres tarjetas (Ahorra viajes, Pagos limpios con Bizum, Equipo coordinado) e iconos SVG inline. Reutiliza el lenguaje visual de las tarjetas existentes.
- [x] **Fix logo en `/unirse`:** Sustituido también el `brand-mark` "R" por el SVG en `ronda-list.html` y ajustado su CSS.
- [x] **Filtros y paginación en `/unirse`:** Buscador por texto (lugar, creador y descripción), selector de orden (Más recientes / Hora de salida / Más pedidos) y botón "Limpiar filtros". Paginación con 6 rondas por página, controles "Anterior / Siguiente" e indicador "Página X de Y". Implementado solo con `signal()` y `computed()` de `@angular/core` y `FormsModule`, sin librerías externas. Estado "Sin resultados" cuando los filtros no coinciden con ninguna ronda.

## 🗂️ Archivos nuevos en esta iteración
- `frontend/public/logo.svg`
- `frontend/public/logo-mark.svg`
- `README.md` (raíz)
- `.gitignore` (raíz, consolidado)
- `.gitattributes` (raíz)

## 🗂️ Archivos modificados en esta iteración
- `frontend/src/index.html`
- `frontend/src/app/components/home/home.html`, `home.css`
- `frontend/src/app/components/ronda-form/ronda-form.html`, `ronda-form.css`, `ronda-form.ts`
- `frontend/src/app/components/ronda-list/ronda-list.html`, `ronda-list.css`, `ronda-list.ts`

## ✅ Estado Final del MVP
- [x] MVP funcional completo: crear rondas, listar rondas activas, apuntar pedidos y cerrar rondas desde el frontend.
- [x] UI con logo propio, animaciones suaves, redirección coherente al crear ronda y experiencia ampliada en `/unirse` (búsqueda, orden y paginación).

## 📋 Tareas Pendientes
- [ ] Verificación visual end-to-end del frontend tras la iteración (backend en `:8080`, frontend en `:4200`).
- [ ] Decidir si se hace push de `frontend-corrections` a `origin`.

## ⚠️ Bloqueos o Errores Conocidos
- Ninguno. El frontend compila limpio (`ng build` OK) tras los cambios.
