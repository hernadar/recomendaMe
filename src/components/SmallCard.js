import React from 'react';
import {Link} from 'react-router-dom'



function SmallCard({company}){
    const imagen=require.context('../assets/images', true)
    return(
        <>  
        
        <div className="col-md-4 mb-4 mx-4">
            <Link to={`/companies/${company.id}`}><div className={`card border-left-${company.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr}-2">
                            <div className={`text-xs font-weight-bold text-${company.color} text-uppercase mb-1`}>total de recomendaciones</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{company.recomendations}</div>
                        </div>
                        <div className="col-auto">  
                        <img  className="w-75" src={imagen(`./${company.image}`)} alt="Companyimage"/>
                            
                        </div>
                    </div>
                </div>
            </div></Link>
            
        </div>
        </>  
    )
}







export default SmallCard;