(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastByMovieId(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una película

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ title, description, rating, cast });
  }

  interface Actor {
    firstName: string;
    lastName: string;
    birthDate: Date;
  }

  // Crea un nuevo actor
  function createActor({
    // firstName: string, lastName: string, birthDate: Date
    firstName,
    lastName,
    birthDate,
  }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (firstName === "fernando") return false;

    console.log("Crear actor", { firstName, lastName, birthDate });
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) {
      return 1500;
    }
    if (isSeparated) {
      return 2500;
    }
    return isRetired ? 3000 : 4000;
  };

  const getPayAmount2 = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    // if (isRetired) return 3000;
    // return 4000;

    return isRetired ? 3000 : 4000;
  };
})();
