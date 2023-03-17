import React from 'react';
import { useState, useEffect } from 'react'

const imagenes = require.context('../assets/images/', true)

function CompaniesList({ company }) {
    const [recommendations, setRecommendations] = useState([])
    useEffect(() => {

        fetch('/api/companies/' + company.id + '/recommendation')
            .then(response => response.json())
            .then(recomendaciones => {
                setRecommendations(recomendaciones.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (


        <>
            <div className='col'>
                <div className=" card shadow p-1">



                    <div className="">
                        <div className='text-xs fuente '>Total de recomendaciones</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{recommendations.length}</div>

                        <img div className=' mb-1' width={100} height={100} src={imagenes(`./logos/${company.image}`)} alt="Companyimage" />

                    </div>
                </div>


            </div>

        </>
    )

}








export default CompaniesList;