import React from 'react';



function Register() {

function registrar(e){
    
}



    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2>Formulario de registro de usuario</h2>

                    <form method="POST" action="/user/register" enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Nombre:</b></label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Apellido:</b></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Teléfono:</b></label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Correo electrónico:</b></label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Password:</b></label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Confirmar Password:</b></label>
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Imagen de perfil:</b></label>
                                    <input
                                        type="file"
                                        name="avatar"
                                        className="form-control"
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 my-1">
                                <div className="form-group">
                                    <label><b>Usuario de Empresa</b></label>
                                    <label className='text-danger'>(Tilde esta casilla SOLO si es una Empresa que recibe recomendaciones)</label>
                                    <input
                                        type="checkbox"
                                        name="privilege"
                                        value='2'
                                        
                                    />

                                    <div className="text-danger">

                                    </div>

                                </div>
                            </div>

                            <div className="col-12 my-3">
                                <button onClick={registrar} type="submit" className="btn btn-warning">Registrarse</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register