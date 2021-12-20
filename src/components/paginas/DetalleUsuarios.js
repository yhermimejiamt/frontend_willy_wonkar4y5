import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const DetalleUsuarios = () => {

    const navigate = useNavigate();
    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
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
                title: 'Quieres crear un Usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, create it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://144.22.238.193:8080/api/user/new`, {
                            method: "POST",
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

                            'Se creo correctamente.',
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
                    <h1 className="text-3xl font-light mb-4">Detalle usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="identification "
                                        value={formik.values.identification}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="nombre"
                                        type="text"
                                        placeholder="Nombre "
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha Cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder="birthtDay "
                                        value={formik.values.birthtDay}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de Cumpleaños</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="monthBirthtDay"
                                        value={formik.values.monthBirthtDay}
                                        onChange={formik.handleChange}
                                    >
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
                                <br></br>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="address "
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="celular"
                                        type="number"
                                        placeholder="Telefono Celular"
                                    />
                                </div>
                                <br></br>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Email</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="Email"
                                        placeholder="Email "
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        placeholder="Contraseña"
                                    />
                                </div>
                                <br></br>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="zone"
                                        value={formik.values.zone}
                                        onChange={formik.handleChange}
                                    ><option value="" disabled selected>Selecciona una Zona</option>
                                        <option value="Zona 1">Zona 1</option>
                                        <option value="Zona 2">Zona 2</option>
                                        <option value="Zona 3">Zona 3</option>
                                        <option value="Zona 4">Zona 4</option>
                                        <option value="Zona 5">Zona 5</option>
                                    </select>
                                </div>
                                <br></br>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipos de Usuario</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                    ><option value="" disabled selected>Seleccione un tipo de Usuario</option>
                                        <option value="ADM">Administrador</option>
                                        <option value="ASE">Asesor Comercial</option>
                                        <option value="COORD">Coordinador</option>

                                    </select>
                                </div>
                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Agregar usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleUsuarios;