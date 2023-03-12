class ProductManager { //Aqui creamos la clase
    constructor() {
      this.products = [];//asignamos atributos
      this.productId = 1;
    }
  
    addProduct(title, description, price, thumbnail, cod, stock) {
      // Validamos que los campos requeridos no estén vacíos
      if (!title || !description || !price || !thumbnail || !cod || !stock) {
        console.log('Todos los campos son obligatorios');
        return;
      }
  
      // Validamos que el código no esté repetido
      const existingProduct = this.products.find((product) => product.cod === cod);
      if (existingProduct) {
        console.log('Ya existe un producto con el mismo código');
        return;
      }
  
      // Agregamos el producto al arreglo
      const newProduct = {
        title,
        description,
        price,
        thumbnail,
        cod,
        stock,
        id: this.productId,
      };
      this.products.push(newProduct);
      this.productId++;
  
      console.log(`Producto agregado: ${title}`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log(`No se encontró ningún producto con el id ${id}`);
        return;
      }
  
      return product;
    }
  }

//A manera de ejemplo

const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción del producto 1', 10, '/thumbnails/producto1.jpg', 'cod-1', 5);
productManager.addProduct('Producto 2', 'Descripción del producto 2', 20, '/thumbnails/producto2.jpg', 'cod-2', 10);
productManager.addProduct('Producto 3', '', 30, '/thumbnails/producto3.jpg', 'cod-3', 0); // error: campo obligatorio vacío
productManager.addProduct('Producto 2', 'Descripción del producto 2', 20, '/thumbnails/producto2.jpg', 'cod-2', 10); // error: código repetido

console.log(productManager.getProducts());

const product = productManager.getProductById(2);
console.log(product);
