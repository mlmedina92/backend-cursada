class ProductManager {
  constructor() {
    this.product = [];
  }

  getProduct() {
    return this.product;
  }

  addProduct(title, desc, price, thumb, code, stock) {
    const id = this.product.length.toString();
    const isRepeat = this.product.find((e) => e.code === code);
    if (
      title === undefined ||
      desc === undefined ||
      price === undefined ||
      thumb === undefined ||
      code === undefined ||
      stock === undefined
    ) {
      return "There is one or more empty fields";
    } else if (isRepeat) {
      return "Is already here";
    } else {
      const obj = {
        id: id,
        title: title,
        description: desc,
        price: price,
        thumbnail: thumb,
        code: code,
        stock: stock,
      };
      return this.product.push(obj);
    }
  }
  getProductById(id) {
    const found = this.product.find((e) => e.id === id);
    return found ? found : "Not Found";
  }
}

const prod = new ProductManager();
prod.addProduct(
  "Maceta",
  "Una maceta",
  899,
  "https://i.pinimg.com/564x/40/20/8b/40208b3561b06a75b8f1c4241e250a4f.jpg",
  "MacetaDeCasa",
  23
);
prod.addProduct(
  "Sombrero",
  "Un sombrero",
  2999,
  "https://i.pinimg.com/564x/69/4a/b1/694ab1d3788bd17ae7a89f762e4de05d.jpg",
  "SombreroNegro",
  15
);
const getId = prod.getProductById("1");

console.log(prod.getProduct());
