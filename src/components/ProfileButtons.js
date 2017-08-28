import React from 'react';
import {Link} from 'react-router-dom';

const ProfileButtons = (props) => {

    if (props.myprofile) {
        return (
            <div className="text-center">
                <Link to="/perfil/editar">
                    <button className="edit-profile color-primary">
                        Editar Perfil
                    </button>
                </Link>
            </div>
        )
    }
    else {
        return (
            <div className="text-center">
                <button className="follow">
                    Seguir
                </button>
            </div>
        )
    }

};

export default ProfileButtons;