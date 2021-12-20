import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUsuario from '../paginas/ActualizarUsuarios';


const FormularioUsuarios = ({ usuario }) => {

    const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuario;

    const [usuarios, guardarUsuarios] = useState([]);

    fetch("http://144.22.238.193:8080/api/user/all")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            guardarUsuarios(data);
        });
    const actualizarUsuario = reference => {

        {
            usuarios.map(usuario => (
                <ActualizarUsuario
                    key={usuario.id}
                    usuario={usuario}
                />))
        }
    }
    const borrarUsuario = id => {

        Swal.fire({
            title: 'Quieres borrar el usuario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    console.log(id);
                    fetch(`http://144.22.238.193:8080/api/user/${id}`, {
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
            <div className="w-full px-3 mb-4">
                <div className="p-5 shadow-md bg-blue-100">
                    <div className="lg:flex bg-blue-300 w-50">

                        <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-blue-800 mb-4">{name} </p>
                            <p className="text-gray-600 mb-1">Identification: {''}<span className="text-gray-700 font-bold">{identification}</span></p>
                            <p className="text-gray-600 mb-4">birthtDay: {''}<span className="text-gray-700 font-bold">{birthtDay}</span></p>
                            <p className="text-gray-600 mb-4">monthBirthtDay: {''}<span className="text-gray-700 font-bold">{monthBirthtDay}</span></p>
                            <p className="text-gray-600 mb-4">address: {''}<span className="text-gray-700 font-bold">{address}</span></p>
                            <p className="text-gray-600 mb-4">cellPhone: {''}<span className="text-gray-700 font-bold">{cellPhone}</span></p>
                            <p className="text-gray-600 mb-4">email: {''}<span className="text-gray-700 font-bold">{email}</span></p>
                            <p className="text-gray-600 mb-4">zone: {''}<span className="text-gray-700 font-bold">{zone}</span></p>
                            <p className="text-gray-600 mb-4">type: {''}<span className="text-gray-700 font-bold">{type}</span></p>
                            
                            <Link to={`/actualizar-usuario/${usuario.id}`} className="  bg-green-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                Actualizar Usuario
                            </Link>
                            <button onClick={() => borrarUsuario(usuario.reference)} 
                            type="submit" className="bg-red-800 hover:bg-gray-900 mt-5 p-2 text-white uppercase font-bold">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FormularioUsuarios;