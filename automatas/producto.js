class Producto{
    constructor(nombre,precio){
        this.nombre =nombre;
        this.precio =precio;
    
    }

    formatearProducto(){
        return 'El producto ${this.nombre} tiene un precio ${this.precio}'
    }
}
const producto2 = new Producto('Monitor', 800);
console.log(producto2);

class Libro extends Producto{

}

const libro = new Libro ('java', 120, '9999');
console.log(Libro.formatearProducto());