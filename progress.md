# 📑 ESTADO ACTUAL DEL PROYECTO: RONDA

## 🚀 Último Checkpoint
- **Estado:** Inicialización del proyecto completada.
- **Fecha/Hora:** 26/05/2026 - Pre-Reto.

## ✅ Componentes y Características Completadas
- [x] Estructura de carpetas a mano (`/frontend` y `/backend`).
- [x] Configuración de sub-agentes en `.codexrules`.
- [x] **Frontend:** Creado componente `HomeComponent` con diseño premium estilo Genesis (explicación de la app y botones "Crear" y "Unirse"). Ruta por defecto configurada.
- [x] **Backend:** Creadas entidades `Ronda` y `Pedido`, repositorios JPA, servicio y controlador REST para rondas y pedidos.
- [x] **Frontend:** Creado servicio HTTP `Ronda`, componente `RondaForm` y ruta `/crear-ronda` para publicar rondas.
- [x] **Frontend:** Creado tablón `/unirse` con tarjetas de rondas activas, pedidos existentes y formulario para apuntarse.
- [x] **Fullstack:** El listado filtra rondas activas y permite cerrar rondas desde el tablón, refrescando automáticamente.
- [x] **Fix Frontend:** El tablón usa `signal()` para refrescar la vista cuando llegan las rondas del backend.

## ✅ Estado Final del MVP
- [x] MVP funcional completo: crear rondas, listar rondas activas, apuntar pedidos y cerrar rondas desde el frontend.

## ⚠️ Bloqueos o Errores Conocidos
- Ninguno. El servidor de Angular arranca limpio.
