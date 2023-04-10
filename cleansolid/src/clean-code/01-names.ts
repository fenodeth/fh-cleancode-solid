(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEval = [ // change fs to filesToEval
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  // updated variable names
  const filesToDelete = filesToEval.map((file) => file.flagged); // change archivos to filesToDelete

  // Malos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // TODO: Tarea
  // día de hoy - today
  const today = new Date(); // const ddmmyyyy = new Date();

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23; // const d: number = 23; or elapsedDays

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirecrory = 33; // const dir = 33;

  // primer nombre - first name
  const firstName = "Fernando"; // const nombre = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera"; // const apellido = "Herrera";

  // días desde la última modificación - days since modification
  const daysSinceLastMod = 12; // const dsm = 12; or daysSinceLastModification

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6; // const max = 6;
})();
