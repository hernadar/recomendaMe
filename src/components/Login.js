import React from 'react';
import {Link} from 'react-router-dom'
function Login() {
    return (
        
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <h2>Formulario de Login</h2>
        
                    <form method="POST" action="/user/login">
                        <div class="row">
                            <div class="col-md-6 my-2">
                                <div class="form-group">
                                    <label><b>Correo electrónico:</b></label>
                                    <input type="text" name="email" class="form-control"/>
                                    
                                        <div class="text-danger">
                                            
                                        </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-6 my-2">
                                <div class="form-group">
                                    <label><b>Password:</b></label>
                                    <input type="password" name="password" className="form-control"/>
                                    <div class="invalid-feedback">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 my-2">
                                <div class="form-group form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="remember_user"/>Recordar mi usuario
                                    </label>
                                </div>
                            </div>
                            <div class="col-12 my-3">
                                <Link to="/profile"><button type="submit" class="btn btn-warning">Loguearme</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
        
    )
}
export default Login;