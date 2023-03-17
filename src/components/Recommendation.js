import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { QRCodeCanvas } from "qrcode.react" 
import bcrypt from "bcryptjs-react";


function Recommendation() {

    let { companyId } = useParams()
    const [user, setUser] = useState([])
    const [company, setCompany] = useState([])
    const [keyRecommend, setkeyRecommend] = useState("")
    const imagenes = require.context('../assets/images/', true)
  
 
    useEffect(() => {
      
        // recupero el Id de usuario de la sesión para buscar el resto de datos del usuario
        let userId=sessionStorage.getItem('userId')
 // Verifico si aún no se ha solicitado los datos de usuario y los solicito        
        if (user.length==0) {
        fetch('/api/users/profile/' + userId)
            .then(response => response.json())
            .then (usuario =>{
                setUser(usuario.data) })
            .catch((err) => {
                console.log(err)
            }) 
         }
// Verifico si aún no se ha solicitado los datos de empresa y los solicito 
         if (company.length==0) {
        fetch('/api/companies/profile/' + companyId)
         .then(response => response.json())
         .then (empresa =>{
             setCompany(empresa.data)
            })
        .catch((err) => {
            console.log(err)
        })
        }    
 
    }, [])

    // Este useEffect está pendiente de que se actualicen las variables
    // que contenen los datos de usuario y empresa para recién en ese momento
    // generar el código que identifica la recomendación
    useEffect(() => {

        if (user.length !== 0 && company.length !== 0) {
            let code=user.name+user.lastname+company.name  
            let codeString = toString(code);                           
            let key = bcrypt.hashSync(codeString,10)
            setkeyRecommend(key) 
        }        
    }, [user, company])

    const recomendacion = useRef(); // include this: call the useRef function
   

    // función que genera la recomendación en la DB
    const createRecommendation = () => {
       //Preparo los datos para enviar
        let date= new Date();
                let year= date.getFullYear();
                let month= date.getMonth()+1;
                let day= date.getDate();
                let dateToCreate = year + '-' + month+ '-' + day 
        let recommendationToCreate = {
            users_id: user.id,
            companies_id: company.id,
            code: keyRecommend,
            dateCreate: dateToCreate,
            status: 'creada'
          }
          fetch('/api/users/recommendation/register', {
                method: "POST",
                body: JSON.stringify(recommendationToCreate),
                headers: {"Content-type": "application/json; charset=UTF-8"}
                })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err));
        }
    
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
      document.body.removeChild(enlace); 
    });
   }

 

   
    return (
        <>                      
                {user.length === 0 && <em>Cargando usuarios...</em>}
                {company.length === 0 && <em>Cargando empresas...</em>}
                {keyRecommend === "" && <em>Esperando datos...</em>}
                {(user.length !==0 && company.length !==0 && keyRecommend !=="") && (
                <>
                       <div ref = {recomendacion} className="rounded border shadow row justify-content-around align-items-center border-left-warning m-4" >
                        <div className=" col-sm">
                            <em>Recomiendo a </em><em className='text-warning'>{company.name}</em>
                            <img className="w-100 h-50" src={imagenes(`./logos/${company.image}`)} alt="Company" />
                            <div className='text-xs font-weight-bold text-success text-center '>{user.name}   {user.lastname}</div>
                        </div>
                       
                        <div className="col-sm align-middle" >
                        <QRCodeCanvas value={keyRecommend}
                        id = "qrCode"
                        size = {200}
                        />

                        {createRecommendation()}
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