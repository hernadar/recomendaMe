import React from 'react';
import { Link } from 'react-router-dom'



function CompaniesList({ companies }) {
    const imagen = require.context('../../../recomendaMeExpress/public/images/logos', true)
    return (
       
                <div div className="col-md-4 mb-4 mx-4">
                    {companies.map(company => {
                        return (
                            <Link to={`/companies/${company.id}`}><div key={`${company.id} 10`} className={`card border-left-${company.color} shadow h-100 py-2`}>
                                <div key={`${company.id} 6`} className="card-body">
                                    <div key={`${company.id} 1`} className="row no-gutters align-items-center">
                                        <div key={`${company.id} 2`} className="col mr}-2">
                                            <div key={`${company.id} 3`} className={`text-xs font-weight-bold text-${company.color} text-uppercase mb-1`}>total de recomendaciones</div>
                                            <div key={`${company.id} 4`} className="h5 mb-0 font-weight-bold text-gray-800">{company.recomendations}</div>
                                        </div>
                                        <div key={`${company.id} 5`} className="col-auto">
                                            <img div key={`${company.id} 7`} className="w-75" src={imagen(`./${company.image}`)} alt="Companyimage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
     
    )


}








export default CompaniesList;