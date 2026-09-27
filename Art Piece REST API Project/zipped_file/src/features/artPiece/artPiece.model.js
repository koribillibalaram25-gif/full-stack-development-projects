// Please don't change the pre-written code

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );

    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    return ArtPiece.db;
  }

  static findOne(id) {
    id = Number(id);
    return ArtPiece.db.find((artPiece) => artPiece.id === id);
  }

  static update(id, data) {
    id = Number(id);
    const artPiece = ArtPiece.db.find((artPiece) => artPiece.id === id);

    if (!artPiece) {
      return null;
    }

    if (data.title !== undefined) artPiece.title = data.title;
    if (data.artist !== undefined) artPiece.artist = data.artist;
    if (data.year !== undefined) artPiece.year = data.year;
    if (data.imageUrl !== undefined) artPiece.imageUrl = data.imageUrl;

    return artPiece;
  }

  static delete(id) {
    id = Number(id);
    const index = ArtPiece.db.findIndex((artPiece) => artPiece.id === id);

    if (index === -1) {
      return false;
    }

    ArtPiece.db.splice(index, 1);
    return true;
  }
}