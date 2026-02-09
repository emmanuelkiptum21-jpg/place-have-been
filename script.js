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
