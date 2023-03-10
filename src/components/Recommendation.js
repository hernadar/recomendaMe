import React from 'react';
import { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas'
import { QRCodeCanvas } from "qrcode.react" 
import bcrypt from "bcryptjs-react";


function Recommendation({ company }) {

    const imagen = require.context('../../../recomendaMeExpress/public/images/logos', true)
    const [user, setUser] = useState(null)
    const [keyRecommend, setkeyRecommend] = useState("")
   
    useEffect(() => {
        // busco en la base de datos con llamada .then, pero ahora lo hago manual 
        let userId=15
        fetch('/api/users/profile/' + userId)
        .then(response => response.json())
        .then (user =>{
            setUser(user.data)  
            let claveRecomendacion=user.data.email+company.name
           
           let key =bcrypt.hashSync(claveRecomendacion,10)
           setkeyRecommend(key)   
           })

           
        
        
        

    }, [])

    const recomendacion = useRef(); // include this: call the useRef function
    //Bajar QR
    const downloadQRCode = ( e ) => {  
        e.preventDefault();
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
//Encriptar

     
    
    return (
        <>
         {!user && <em>Cargando...</em>}
            {user && (
                <>
                       
            
                    <div ref = {recomendacion} className="rounded border shadow row justify-content-around align-items-center border-left-warning m-4" >
                        <div className=" col-sm">
                            <em>Recomiendo a </em><em className='text-warning'>{company.name}</em>
                            <img className="w-100 h-50" src={imagen(`./${company.image}`)} alt="Companyimage" />
                            <div className='text-xs font-weight-bold text-success text-center '>{user.name}   {user.lastname}</div>
                        </div>
                        <div className="col-sm align-middle" >
                        <QRCodeCanvas value={keyRecommend}
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