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

