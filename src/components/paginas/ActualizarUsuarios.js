import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';



const ActualizarUsuario = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const { id } = useParams();


    const [usuariosActualizar, guardarUsuariosActualizar] = useState([]);

    fetch(`http://localhost:8080/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {

            guardarUsuariosActualizar(data);
        });

    const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuariosActualizar;

    const formik = useFormik({
        initialValues: {
            id: id,
            identificacion: '',
            nombre: '',
            cumpleaños: '',
            mes: '',
            direccion: '',
            celular: '',
            email: '',
            password: '',
            zona: '',
            tipo: '',
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, update it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://localhost:8080/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                //console.log(data);             
                            });

                        Swal.fire(
                            'Actualizado!',
                            'Se actualizo correctamente.',
                            'success'


                        );
                        navigate('/usuarios');
                    } catch (error) {
                        console.log(error)
                    }

                }
            })

        }
    });

    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light mb-4">Actualizar Usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form onSubmit={formik.handleSubmit}>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">identification</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="text"
                                        placeholder="identification"
                                        value={formik.values.identification || identification}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">name</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="name"
                                        value={formik.values.name || name}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">birthtDay</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder="birthtDay"
                                        value={formik.values.birthtDay || birthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de Cumpleaños</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="monthBirthtDay"
                                        value={formik.values.monthBirthtDay || monthBirthtDay}
                                        onChange={formik.handleChange}>
                                        <option value="" disabled selected>Escoge un mes</option>
                                        <option value="01">Enero</option>
                                        <option value="02">Febrero</option>
                                        <option value="03">Marzo</option>
                                        <option value="04">Abril</option>
                                        <option value="05">Mayo</option>
                                        <option value="06">Junio</option>
                                        <option value="07">Julio</option>
                                        <option value="08">Agosto</option>
                                        <option value="09">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                        <option value="12">Diciembre</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">address</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="address"
                                        value={formik.values.address || address}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">cellPhone</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="text"
                                        placeholder="cellPhone"
                                        value={formik.values.cellPhone || cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">email</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="email"
                                        value={formik.values.email || email}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">password</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="password"
                                        value={formik.values.password || password}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="zone"
                                        value={formik.values.zone || zone}
                                        onChange={formik.handleChange}>
                                        <option value="Zona 1">Zona 1</option>
                                        <option value="Zona 2">Zona 2</option>
                                        <option value="Zona 3">Zona 3</option>
                                        <option value="Zona 4">Zona 4</option>
                                        <option value="Zona 5">Zona 5</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">type</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="type"
                                        value={formik.values.type || type}
                                        onChange={formik.handleChange}>
                                        <option value="" disabled selected>Seleccione un tipo de Usuario</option>
                                        <option value="ADM">Administrador</option>
                                        <option value="ASE">Asesor Comercial</option>
                                        <option value="COORD">Coordinador</option>
                                    </select>
                                </div>
                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar Usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActualizarUsuario;