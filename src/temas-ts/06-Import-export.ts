import{calcularIva2,Producto} from "./05-destructura-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:100
    },
    {
        desc:'Telefono2',
        precio:200 
    },
    {
        desc:'Telefono3',
        precio:300 
    }
]
const [total,iva]=calcularIva2(carrito);
console.log(`Total ${total}`)
console.log(`IVA ${iva}`)