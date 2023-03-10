import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList'
import Recommendation from './Recommendation';


function Company() {
    const { companyId } = useParams()
    const [company, setCompany] = useState(null)
    useEffect(() => {
        // busco en la base de datos con llamada .then, pero ahora lo hago manual 
              
        fetch('/api/companies/profile/' + companyId)
        .then(response => response.json())
        .then (company =>{
            setCompany(company.data)
          
        })
    }, [])

    const imagen = require.context('../../../recomendaMeExpress/public/images/logos', true)
 


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
                   
                
                    <ProductsList company={company}/>
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