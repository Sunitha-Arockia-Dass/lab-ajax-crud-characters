class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList() {
    return this.api
      .get("/characters")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error in getFullList:", error);
        throw error;
      });
  }

  getOneRegister(characterId) {
    return this.api
      .get(`/characters/${characterId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error in getting 1 character:", error);
        throw error;
      });
  }

  createOneRegister(character) {
    return this.api
      .post(`/characters`, character)

      .then((response) => response.data)
      .catch((error) => {
        console.error("Error in getting 1 character:", error);
        throw error;
      });
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api
      .put(`/characters/${characterId}`, characterInfo)
      .then((response) => {})
      .catch((error) => {
        console.error("Error in deleting 1 character:", error);
        throw error;
      });
  }

  deleteOneRegister(characterId) {
    return this.api
      .delete(`/characters/${characterId}`)
      .then((response) => {})
      .catch((error) => {
        console.error("Error in deleting 1 character:", error);
        throw error;
      });
  }
}
