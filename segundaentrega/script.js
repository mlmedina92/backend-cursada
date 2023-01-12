const fs = require("fs/promises");

class ProductManager {
  constructor(path) {
    this.path = path; // this.product = [];
  }

  async getProducts() {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      console.log(JSON.parse(read));
    } catch (err) {
      console.log(err);
    }
  }

  async addProduct(title, desc, price, thumb, code, stock) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const prods = JSON.parse(read);
      const id = prods.length.toString();
      const newObj = {
        id: id,
        title: title,
        description: desc,
        price: price,
        thumbnail: thumb,
        code: code,
        stock: stock,
      };
      prods.push(newObj);
      await fs.writeFile(this.path, JSON.stringify(prods, null, 2), "utf-8");
    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(id) {
    const read = await fs.readFile(this.path, "utf-8");
    const prods = JSON.parse(read);
    console.log(prods.find((e) => e.id === id));
    if (isHere) {
      console.log(isHere);
    } else {
      console.log("There is no chance of that thing, you know");
    }
  }

  async updateProduct(id, field, elem) {
    const read = await fs.readFile(this.path, "utf-8");
    const prods = JSON.parse(read);
    let item = prods.find((e) => e.id === id);
    item[field] = elem;
    prods.splice(id, 1, item);
    await fs.writeFile(this.path, JSON.stringify(prods, null, 2), "utf-8");
  }

  async deleteProduct(id) {
    const read = await fs.readFile(this.path, "utf-8");
    const prods = JSON.parse(read);
    const filter = prods.filter((e) => e.id !== id);
    await fs.writeFile(this.path, JSON.stringify(filter, null, 2), "utf-8");
  }
}

const path = new ProductManager("product.json");

path.addProduct("tituloA", "descripcion1", 120, "img.png", "ABC1234", 12);
path.addProduct("tituloB", "descripcion2", 120, "img.png", "ABC12345", 12);
path.addProduct("tituloC", "descripcion3", 120, "img.png", "ABC123456", 12);
path.addProduct("tituloD", "descripcion4", 120, "img.png", "ABC1234567", 12);
path.addProduct("tituloE", "descripcion5", 120, "img.png", "ABC12345678", 12);
