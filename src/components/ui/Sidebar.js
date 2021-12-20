import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="md:w-2/6 xl:w-1/5 bg-blue-200">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Willy Wonka Store</p>

                <img className='w-25' src="https://i.pinimg.com/originals/c9/cb/18/c9cb186827074c5b50b2e4e87e4bdb8e.png"></img>

                <p className="mt-3 text-yellow-600">Administra tu empresa en las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-black-400 block hover:bg-yellow-500 hover:text-black-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-yellow-500 hover:text-black-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-yellow-500 hover:text-black-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-yellow-500 hover:text-black-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>


                </nav>
            </div>
        </div>
    );
}

export default Sidebar;