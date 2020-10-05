export default class SwapiService {
  _apiBase = `https://swapi.dev/api`;
  _imageBase = `https://starwars-visualguide.com/assets/img`;
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      }

    const body = await res.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async(id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async() => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async(id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  getPersonImage = (itemId) => {
    return `${this._imageBase}/characters/${itemId}.jpg`;
  }

  getStarshipImage = (itemId) => {
    return `${this._imageBase}/starships/${itemId}.jpg`;
  }

  getPlanetsImage = (itemId) => {
    return `${this._imageBase}/planets/${itemId}.jpg`;
  }

  _extractId(item) {
    const idRegEx = /\/([0-9]*)\/$/;
    return item.url.match(idRegEx)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.modal,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  } 

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    }
  }

}

// const swapi = new SwapiService();
// swapi.getStarship(3).then((p) => {
//     console.log(p.name);
// });