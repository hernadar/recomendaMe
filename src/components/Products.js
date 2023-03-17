
import React from 'react';


const imagenes = require.context('../assets/images/',true)

function Product({ products }) {

    return (
        <>
            {products.length === 0 && <p>Cargando...</p>}
            {products.map((product, i) => {


                return (


                    <div key={product.id} className="col-sm-5 col-md-3 col-lg-2 mb-4 mx-2">
                        <div className='card shadow h-100 '>
                            <div className="card-body">
                                <div className="no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className='text-xs font-weight-bold text-uppercase mb-1'>
                                            <em>Puntos: </em><em className='text-warning'>{product.points}</em>
                                        </div>

                                    </div>

                                    <div className="col-auto">
                                        <img className="w-100" src={imagenes(`./products/${product.image}`)} alt="Companyimage" />
                                        <div className='text-xs font-weight-bold text-success text-center '>{product.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

     
                )

            })}
        </>
    )


}

export default Product;