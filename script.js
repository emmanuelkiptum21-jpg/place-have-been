// ==========================================
// 1️  (CONSTRUCTORS & PROTOTYPES)
// ==========================================


function Place(location, landmarks, season, notes) {
  this.id = null; // assigned by manager
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Best Time:</strong> ${this.season}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};

/**
 * PlaceManager class: manages all Place objects
 */
function PlaceManager() {
  this.places = {}; // store as {id: Place}
  this.currentId = 0;
}

PlaceManager.prototype.assignId = function () {
  this.currentId++;
  return this.currentId;
};

PlaceManager.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlaceManager.prototype.deletePlace = function (id) {
  if (this.places[id]) {
    delete this.places[id];
    return true;
  }
  return false;
};

PlaceManager.prototype.updatePlace = function (id, updatedPlace) {
  if (this.places[id]) {
    updatedPlace.id = id; // keep original id
    this.places[id] = updatedPlace;
  }
};

// ==========================================
// 2️ UI 
// ==========================================

const placeManager = new PlaceManager();
let editId = null;

const form = document.getElementById("placeForm");
const placesList = document.getElementById("placesList");
const placeDetails = document.getElementById("placeDetails");

// Add / Edit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value.trim();
  const landmarks = document.getElementById("landmarks").value.trim();
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value.trim();

  if (!location) {
    alert("Location is required");
    return;
  }

  const place = new Place(location, landmarks, season, notes);

  if (editId === null) {
    placeManager.addPlace(place);
  } else {
    placeManager.updatePlace(editId, place);
    editId = null;
  }

  renderPlaces();
  form.reset();
  placeDetails.innerHTML = "<p>Select a place to see details</p>";
});
