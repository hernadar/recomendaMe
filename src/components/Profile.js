import React from 'react';


function Profile() {
    return (
        <div className="container" Style="margin-top: 40px;">
		<div className="row">
			<div class="col-md-3">
				<h2>Hola {} </h2>
				<img src="/images/avatars/<%= user.avatar %> " alt='Imagen de Perfil'/>
				<br/>
				<br/>
				<div className="alert alert-success">{} </div>
			</div>
		</div>
	</div>

    )
}

export default Profile;
