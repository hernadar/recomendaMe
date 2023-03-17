import React from 'react';
import image from '../assets/images/app/Imagen_home.avif'


function Home() {
    return (
        <React.Fragment>

            {/*<!-- Content  -->*/}
            <div className="card bg-white mt-4 ml-4 w-75 shadow  mb-5 text-white rounded">
                <img className="card-img" src={image} alt="Pesentacion" />
                <div className="card-img-overlay my-auto">
                    <h5 className="card-title ">Cuando recomendas sumas puntos que los podes canjear por productos, servicios o MONETIZARLO</h5>
                </div>
            </div>

            <div className="card-body">
            <h5 className="card-title">Solo tenés que seguir los siguientes pasos:</h5>
                <ol className='explicaciones fuente mx-auto'>
                    <li>Te creas un usuario en nuestro sitio</li>
                    <li>Elejí la Empresa que queres recomendar</li>
                    <li>Crea tu recomendación</li>
                    <li>Y listo... ya se la podes enviar a quien vos quieras !!!</li>
                </ol>
            </div>
       

        </React.Fragment >
    )
}



export default Home