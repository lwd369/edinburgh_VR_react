const Location = {
  airport: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [3, 2 - 1.3, -8] }],
    image: 'tags/airport.png',
    id: 1
  },
  hotel: {
    width: 1.82,
    height: 0.5,
    translate: [{ translate: [-10, 2.3 - 1.8, -1.2] }],
    image: 'tags/hotel.png',
    id: 2
  },
  castle: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [-1, 6.2 - 1.7, -8] }],
    image: 'tags/castle.png',
    id: 3
  },
  family: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [-3, 6.95 - 1.8, -8] }],
    image: 'tags/family.png',
    id: 4
  },
  royal: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [6, 2.8 - 1.8, 5] }],
    image: 'tags/royal.png',
    id: 5
  },
  scotland: {
    width: 3,
    height: 0.5,
    translate: [{ translate: [6.5, 4 - 1.4, -3] }],
    image: 'tags/scotland.png',
    id: 6
  },
  shopping: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [2, 5.7 - 1.8, -8] }],
    image: 'tags/shopping.png',
    id: 7
  },
  harry: {
    width: 3,
    height: 0.77,
    translate: [{ translate: [-8.8, 8.6 - 2, -8] }],
    image: 'tags/harry.png',
    id: 8
  },
  university: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [-7.6, 7.5 - 1.8, -7] }],
    image: 'tags/university.png',
    id: 9
  },
  green: {
    width: 1.76,
    height: 0.5,
    translate: [{ translate: [-5, 7.9 - 1.8, -8] }],
    image: 'tags/green.png',
    id: 10
  },
  culture: {
    width: 2.14,
    height: 0.5,
    translate: [{ translate: [0, 4.3 - 1.6, -8] }],
    image: 'tags/culture.png',
    id: 11
  }
}

function TagInfo(width, height, translate, image, id) {
  this.width = width;
  this.height = height;
  this.translate = translate;
  this.image = image;
  this.id = id;
}

export default Location;
