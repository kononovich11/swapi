export default class SwapiService {
  _apiBase = `https://swapi.dev/api`;
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      }

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResources(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
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

const swapi = new SwapiService();
swapi.getStarship(3).then((p) => {
    console.log(p.name);
});