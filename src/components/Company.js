import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList'
import Recommendation from './Recommendation';

function Company() {
    const { id } = useParams()
    const [company, setCompany] = useState(null)
    useEffect(() => {
        // busco en la base de datos con llamada .then, pero ahora lo hago manual 
        setCompany({
            id: 2,
            name: 'Olimpo',
            item: 'Diversión Nocturna',
            recomendations: 15,
            image: 'olimpo.png',
            color: 'warning',
            description: 'Olimpo es un lugar donde la fiesta es el máximo exponente. Contamos con barteders experimentdos que ofrecen todo su potencial',
            pricePoint: 200
        })

    }, [id])

    const imagen = require.context('../assets/images', true)
 


    return (
        <>
            {!company && <em>Cargando...</em>}
            {company && (
                <>


                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-sm">
                                <img className='w-100 card' src={imagen(`./${company.image}`)} alt="Companyimage" />
                            </div>
                            <div className="col-sm">
                                <h2>Bienvenidos a {company.name}</h2>
                                <p>{company.description}</p>
                            </div>


                        </div>
                        <hr className="sidebar-divider d-none d-md-block" />
                        <h5 className='font-weight-bold text-uppercase mb-1'>Productos ofrecidos para canje</h5>
                        <ProductsList />
                        <div className="row justify-content-around">
                            <div className="col-sm">
                                <h5 className='font-weight-bold text-uppercase mb-1'>Canje en Efectivo</h5>
                                <p>Por cada punto acumulado podes realizar el canje por dinero en efectivo.</p>
                                <p className='text-uppercase'>Valor del punto: </p><span className='text-success font-weight-bold'>$ {company.pricePoint}</span>
                            </div>
                            
                           
                            <div>
                            <Recommendation company={company}/>
                            </div>
                                
                            </div>
                        </div>
                    
                </>
            )
            }
        </>
    )
}
export default Company;