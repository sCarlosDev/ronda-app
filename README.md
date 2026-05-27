# Ronda

App para coordinar pedidos colectivos en la oficina. Un compañero abre una **ronda** (baja a la cafetería, encarga comida a domicilio, etc.) indicando el lugar, la hora de salida y su teléfono de Bizum. El resto del equipo se une apuntando sus **pedidos** (un café, un croissant, un menú…) y los pagos se cuadran después por Bizum.

## Funcionalidad

- **Crear ronda** (`/crear-ronda`): el creador define lugar, hora de salida, teléfono Bizum y una descripción.
- **Unirse a una ronda** (`/unirse`): tablón con las rondas activas; cada tarjeta muestra los pedidos existentes y un formulario para apuntar el tuyo (participante, producto y precio).
- **Cerrar ronda**: el creador (o cualquiera desde el tablón) cierra la ronda cuando ya no admite más pedidos; deja de aparecer en el listado activo.

Estado actual: MVP funcional. Persistencia en H2 en memoria — los datos se pierden al reiniciar el backend.

## Stack

- **Backend** ([`backend/`](backend/)) — Java 21 + Spring Boot 4 + Spring Data JPA + H2 en memoria. Expone una API REST en `http://localhost:8080/api/rondas`.
- **Frontend** ([`frontend/`](frontend/)) — Angular 21 con componentes standalone y signals. Servidor de desarrollo en `http://localhost:4200`.

Arquitectura del backend en capas: `controller/` → `service/` → `repository/` → `entity/` bajo el paquete `com.ronda.backend`. La entidad `Ronda` agrupa una lista de `Pedido` (`@OneToMany` con cascada). El controlador permite CORS desde `localhost:4200`.

## Cómo arrancar la app

Necesitas **Java 21** y **Node.js** (npm 10+) instalados. Abre dos terminales:

### 1. Backend (puerto 8080)

```bash
cd backend
./mvnw spring-boot:run        # en Windows: mvnw.cmd spring-boot:run
```

Usa siempre el Maven Wrapper incluido en el proyecto, no un `mvn` del sistema.

### 2. Frontend (puerto 4200)

```bash
cd frontend
npm install                   # solo la primera vez
npm start                     # equivale a `ng serve`
```

Abre [http://localhost:4200](http://localhost:4200). La home tiene los botones **Crear** y **Unirse**.

## Tests

```bash
# Backend
cd backend && ./mvnw test

# Frontend (Vitest)
cd frontend && npm test
```

## Endpoints REST

Base: `http://localhost:8080/api/rondas`

| Método | Ruta                  | Descripción                          |
|--------|-----------------------|--------------------------------------|
| GET    | `/`                   | Lista de rondas activas              |
| POST   | `/`                   | Crear una ronda                      |
| POST   | `/{id}/pedidos`       | Añadir un pedido a una ronda         |
| PUT    | `/{id}/cerrar`        | Cerrar una ronda (la desactiva)      |


## Errores
- Durante el desarrollo, hemos tenido un conflicto de desincronización en GitHub debido a que el código del Frontend se trabajó en una rama independiente y aislada de la rama principal. Al intentar realizar un git push para subir las modificaciones, el servidor rechazó la operación ya que la rama de destino contenía un historial de confirmaciones que no estaba integrado en nuestra rama local, impidiendo que Git fusionara los cambios de manera directa y automática.

## Integrantes
- Carlos Saelices Pérez
- Radomyr Moskalenko
- José Miguel Rubio Alemán
- David Garcia Danchuk
