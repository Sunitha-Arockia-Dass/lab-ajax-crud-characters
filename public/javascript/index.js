const charactersAPI = new APIHandler("http://localhost:8000");

const characterInfo = document.querySelector(".character-info");
const characterContainer = document.querySelector(".characters-container");
const characterName = document.querySelector(".name");
const characterOccupation = document.querySelector(".occupation");
const characterCartoon = document.querySelector(".cartoon");
const characterWeapon = document.querySelector(".weapon");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((characters) => {
          // Handle success (e.g., show a success message)
          characters.forEach((character) => {
            const characterBox = document.createElement("div");
            characterBox.classList.add("character-box");

            const characterId = document.createElement("div");
            characterId.innerHTML = ` <b>Character ID:</b>${character.id}`;

            const characterName = document.createElement("div");
            characterName.innerHTML = ` <b>Character Name:</b>${character.name}`;

            const characterOccupation = document.createElement("div");
            characterOccupation.innerHTML = ` <b>Character Occupation:</b>${character.occupation}`;

            const characterCartoon = document.createElement("div");
            characterCartoon.innerHTML = ` <b>Is a Cartoon?:</b>${character.cartoon}`;

            const characterWeapon = document.createElement("div");
            characterWeapon.innerHTML = ` <b>Character Weapon:</b>${character.weapon}`;

            characterBox.appendChild(characterName);
            characterBox.appendChild(characterOccupation);
            characterBox.appendChild(characterCartoon);
            characterBox.appendChild(characterWeapon);

            characterContainer.appendChild(characterBox);
          });
          characterInfo.style.display = "none";
        })
        .catch((error) => {
          // Handle errors (e.g., display an error message)
          console.error("Error getting character:", error);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("fetchOne");
      charactersAPI
        .getOneRegister(characterId.value)
        .then((character) => {
          characterName.innerHTML = ` <b>Character Name:</b>${character.name}`;
          characterOccupation.innerHTML = ` <b>Character Occupation:</b>${character.occupation}`;
          characterCartoon.innerHTML = ` <b>Is a Cartoon?:</b>${character.cartoon}`;
          characterWeapon.innerHTML = ` <b>Character Weapon:</b>${character.weapon}`;
        })
        .catch((error) => {
          // Handle errors (e.g., display an error message)
          console.error("Error getting 1 character:", error);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const characterId = document.getElementById("deleteOne");
      console.log(characterId.value);

      charactersAPI
        .deleteOneRegister(characterId.value)
        .then((characters) => {
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch((error) => {
          // Handle errors (e.g., display an error message)
          console.error("Error deleting 1 character:", error);
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const characterId = document.getElementById("id1").value;
      const characterName = document.getElementById("name1").value;
      const characterOccupation = document.getElementById("occupation1").value;
      const characterCartoon = document.getElementById("cartoon1").checked;
      const characterWeapon = document.getElementById("weapon1").value;
      const character = {
        name: characterName,
        occupation: characterOccupation,
        cartoon: characterCartoon,
        weapon: characterWeapon,
      };
      console.log(character);
      charactersAPI
        .updateOneRegister(characterId, character)
        .then((character) => {
          document.getElementById("send-data1").style.backgroundColor = "green";
        })
        .catch((error) => {
          // Handle errors (e.g., display an error message)
          console.error("Error deleting 1 character:", error);
          document.getElementById("send-data1").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const characterName = document.getElementById("name").value;
      const characterOccupation = document.getElementById("occupation").value;
      const characterCartoon = document.getElementById("cartoon").checked;
      const characterWeapon = document.getElementById("weapon").value;
      const character = {
        name: characterName,
        occupation: characterOccupation,
        cartoon: characterCartoon,
        weapon: characterWeapon,
      };
      charactersAPI
        .createOneRegister(character)
        .then((character) => {
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch((error) => {
          // Handle errors (e.g., display an error message)
          console.error("Error deleting 1 character:", error);
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });
});
