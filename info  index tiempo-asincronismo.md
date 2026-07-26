<!DOCTYPE html>
<html lang="es">
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      img {
        width: 150px;
        height: 200px;

        object-fit: cover;
      }
    </style>
  </head>
  <body class="bg-light p-4">
    <div class="container">
      <h1>Mi Lista de Tareas</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          id="inputTarea"
          class="form-control"
          placeholder="Escribe una tarea..."
        />
        <button id="btnAgregar" class="btn btn-primary">Agregar</button>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Segundero⏱️</h3>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <div class="card-body text-center">
              <p class="card-text fs-2 fw-bold">0</p>
              <button class="btn btn-success" onclick="segundero()">
                Play
              </button>
              <button id="reset" class="btn btn-secondary" onclick="">
                Reset
              </button>
              <button class="btn btn-danger" onclick="detener()">Stop</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <h3>Delivery RollingFood🍔</h3>
        </div>
        <div class="col text-center">
          <div class="card" style="width: 18rem">
            <img
              id="imagen"
              src="./assets/tienda.gif"
              class="card-img-top"
              alt="cocinando"
            />
            <div class="card-body">
              <h5 class="card-title fs-3">Pedido online</h5>
              <button class="btn btn-warning">
                <p class="fs-2 m-0">🍔</p>
                <p class="m-0 fw-bold">Realizar pedido</p>
              </button>
            </div>
            <div class="card-footer">
              <!-- aparezca el mensaje -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="Tarea-Javascript6.js"></script>
  </body>
</html>