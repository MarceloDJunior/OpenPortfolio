import React from 'react';
import profile_empty from './../images/profile-empty.jpg'
import ProfileButtons from './ProfileButtons'

const ProfileWidget = (props) => {

    const renderProfilePicture = () => {
        if (props.user.foto) {
            return null;
        }
        else {
            return (
                <div className="profile-picture">
                    <img src={profile_empty} className="img-responsive" alt=" Foto do perfil"/>
                    {renderEditProfilePicture()}
                </div>
            )
        }
    };

    const renderContactInfo = () => {
        if (props.user.email || props.user.fone) {
            let contactinfo = [];
            if (props.user.email) {
                contactinfo.push(
                    <li key={0}><i className=" fa fa-envelope-o"></i>Email: {props.user.email}</li>
                )
            }
            if (props.user.fone) {
                contactinfo.push(
                    <li key={1}><i className=" fa fa-phone"></i>Fone: {props.user.fone}</li>
                )
            }
            return (
                <ul className=" contact-info">
                    {contactinfo}
                </ul>
            )
        }
    };

    const renderUploadProfilePicture = () => {
        console.log(" teste");
    };

    const renderEditProfilePicture = () => {
        if (props.myprofile) {
            return (
                <button
                    className="btn color-primary btn-edit-picture"
                    onClick={renderUploadProfilePicture}
                    title="Editar foto"
                >
                    <i className=" fa fa-pencil"></i>
                </button>
            )
        }
        else {
            return null;
        }
    };

    return (
        <div className=" col-xs-12 col-md-4">
            <div className=" profile">
                {renderProfilePicture()}
                <h1>{props.user.nome} {props.user.sobrenome}</h1>
                <ProfileButtons user={props.user} myprofile={props.myprofile}/>
                {renderContactInfo()}
            </div>
        </div>
    )
};

export default ProfileWidget;