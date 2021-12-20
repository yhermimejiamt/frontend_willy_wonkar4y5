import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';


const FormularioProductos = ({ producto }) => {

    const { description, reference, price, photography, category, quantity } = producto;

    const [productos, guardarProductos] = useState([]);

    fetch("http://144.22.238.193:8080/api/chocolate/all")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            guardarProductos(data);
        });

    const actualizarProducto = reference => {

        {
            productos.map(producto => (
                <ActualizarProducto
                    key={producto.reference}
                    producto={producto}
                />))
        }

    }


    const borrarProducto = reference => {

        Swal.fire({
            title: 'Quieres borrar el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    console.log(reference);
                    fetch(`http://144.22.238.193:8080/api/chocolate/${reference}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                    }).then((data) => {
                        // console.log(data);
                    });
                    Swal.fire(
                        'Deleted!',
                        'Se borro correctamente.',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }
    return (
        <>
            <div className="p-5 shadow-md bg-blue-100">
                <div className="lg:flex bg-blue-300 w-50">
                    <div className="lg:flex">
                        <div className="lg:w-5/12 xl:w-3/12">
                            <img src={photography} alt=" imagen platillo " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                            </div>
                        </div>
                        <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-black-600 mb-4">{description} </p>
                            <p className="text-gray-600 mb-4">Categoria: {''}
                                <span className="text-gray-700 font-bold"> {category}</span> </p>
                            <p className="text-gray-600 mb-4">Precios: {''}
                                <span className="text-gray-700 font-bold">$ {price}</span></p>
                            <p className="text-gray-600 mb-4">Cantidad: {''}
                                <span className="text-gray-700 font-bold">{quantity}</span>
                            </p>

                            <Link to={`/actualizar-producto/${producto.reference}`} className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                Actualizar Producto
                            </Link>
                            <button
                                onClick={() => borrarProducto(producto.reference)}
                                type="submit"
                                className="bg-red-800 hover:bg-gray-900 w-50 mt-5 p-2 text-white uppercase font-bold"
                            >
                                Borrar

                            </button>




                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default FormularioProductos;