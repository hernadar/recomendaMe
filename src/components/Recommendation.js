import React from 'react';
import { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas'

import { QRCodeCanvas } from "qrcode.react" 


function Recommendation({ company }) {

    const imagen = require.context('../assets/images', true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        // busco en la base de datos con llamada .then, pero ahora lo hago manual 
        setUser({
            id: 2,
            name: 'Juan',
            lastName: 'Sosa',
            phone: '0261638383',
            email: 'juansosa@gmail.com',
            password: 'Richard1966',
            keyRecommend: '38437483743783847387438349304803840',
            image: 'Olimpo es un lugar donde la fiesta es el máximo exponente. Contamos con barteders experimentdos que ofrecen todo su potencial',
        })
    }, [])

    const recomendacion = useRef(); // include this: call the useRef function
    
    const downloadQRCode = ( e ) => {  
        e.preventDefault();
        
        console.log(recomendacion.current)
        html2canvas(recomendacion.current) // Llamar a html2canvas y pasarle el elemento
            .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                // Crear un elemento <a>
      let enlace = document.createElement('a');
      enlace.download = `Recomendacion${company.name}`;
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      document .body.removeChild(enlace); 
    });
        
        
        
        

    }
    
    
    return (
        <>
            {!user && <em>Cargando...</em>}
            {user && (
                <>
                    <div ref = {recomendacion} className="rounded border shadow row justify-content-around align-items-center border-left-warning m-4" >
                        <div className=" col-sm">
                            <em>Recomiendo a </em><em className='text-warning'>{company.name}</em>
                            <img className="w-100 h-50" src={imagen(`./${company.image}`)} alt="Companyimage" />
                            <div className='text-xs font-weight-bold text-success text-center '>{user.name} {user.lastName}</div>
                        </div>
                        <div className="col-sm align-middle" >
                        <QRCodeCanvas value={user.keyRecommend}
                        id = "qrCode"
                        size = {200}
                        />
                        </div>
                    </div>
                    <div className="col-sm">
                                <form onSubmit={downloadQRCode}>
                                    <button  className="btn btn-warning" type="submit">Descargar Recomendación</button>
                                </form>
                    </div>
                </>

            )}
    </>)
}



export default Recommendation