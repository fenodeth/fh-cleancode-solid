(() => {
  // arreglo de temperaturas celsius
  const tmeperaturesCelcius = [33.6, 12.34]; // const arrayOfNums = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = "123.123.123.123"; // const ip = "123.123.123.123";

  // Listado de usuarios
  const users = [
    // const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const userEmails = users.map((user) => user.email); // const emails = people.map((u) => u.email);

  // Variables booleanas de un video juego
  const canJump = false; // const jump = false;
  const canRun = true; // const run = true;
  const hasItems = true; // const noTieneItems = true;
  const isLoading = false; // const loading = false;

  // Otros ejercicios
  // tiempo inicial
  const startTime = new Date().getTime(); // const start = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime; // const end = new Date().getTime() - start;

  // Funciones
  // Obtiene los libros
  function getBooks() {
    // function book() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBookByUrl(url: string) {
    // function BooksUrl(u: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea(side: number) {
    // function areaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJob() {
    // function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
})();
