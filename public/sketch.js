let img;
let deps = [];
let selection;

const BLACK_COLOR = [0,0,0];
const BORDER_COLOR = [0,0,255];

function setup() {
  createCanvas(750, 813);
  socket = io();
  pixelDensity(1);
  img = loadImage('./mappa.png');
  socket.on('data', (data) => {
    data.forEach(elem => {
      deps.push(new Department(elem.name, elem.owner, elem.color, elem.start, elem.pixels, elem.borders));
    });
    updateFigures();
  });

  socket.on('attack', (data) => {
    const att = deps.find((e) => {
      return e.name == data.att.name;
    });
    const def = deps.find((e) => {
      return e.name == data.def.name;
    })
    def.color = att.color;
    def.update();
  })
}

function draw() {
  image(img, 0, 0);
}

function mouseClicked() {
  if (selection) {
    selection.unselect();
  }
  selection = getSelection(floor(mouseX), floor(mouseY));
  if (selection) {
    selection.select();
  }
}

function updateFigures() {
  img.loadPixels();
  for (let dep of deps) {
    dep.update();
  }
}

function getSelection(x,y) {
  for (let dep of deps) {
    const sel = dep.pixels.find((pix) => {
      return pix.x == x && pix.y == y;
    })
    if (sel) {
      return dep;
    }
  }
}

function setColor(x,y,color) {
  const idx = 4 * (x + y * width);
  img.pixels[idx]   = color[0];
  img.pixels[idx+1] = color[1];
  img.pixels[idx+2] = color[2];
}

class Department {

  constructor(name, owner, color, start, pixels, borders) {
    this.name = name;
    this.owner = owner; // da inserire
    this.color = color;
    this.start = start;
    this.pixels = pixels;
    this.borders = borders;
  }

  select() {
    this.update(this.borders, BORDER_COLOR);
    console.log(selection.name)
  }

  unselect() {
    this.update(this.borders, BLACK_COLOR);
  }

  update(pixels, color) {
    if (!color) color = this.color;
    if (!pixels) pixels = this.pixels;
    pixels.forEach(pix => {
      setColor(pix.x, pix.y, color);
    })
    img.updatePixels();
  }
}
