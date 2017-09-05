import React from 'react';
import profile_empty from './../images/profile-empty.jpg';
import ProfileButtons from './ProfileButtons';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import ProfilePictureUploader from "./ProfilePictureUploader";
import {isShowingProfileUploadModal} from '../actions/profile-layout-actions';
import store from '../store';
import {Image, Transformation} from 'cloudinary-react';

const ProfileWidget = (props) => {

    const renderProfilePicture = () => {
        if (props.user.foto) {
            return (
                <div className="profile-picture">
                    <Image cloudName="openportfolio" publicId={props.user.foto}
                           alt="Foto do perfil" className="img-responsive">
                        <Transformation width="140" height="140" crop="fill"/>
                    </Image>
                    {renderEditProfilePictureButton()}
                </div>
            )
        }
        else {
            return (
                <div className="profile-picture">
                    <img src={profile_empty} className="img-responsive" alt="Foto do perfil"/>
                    {renderEditProfilePictureButton()}
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

    const onEditPictureClick = () => {
        store.dispatch(isShowingProfileUploadModal(true));
    };

    const renderEditProfilePictureButton = () => {
        if (props.myprofile) {
            return (
                <button
                    className="btn color-primary btn-edit-picture"
                    onClick={onEditPictureClick}
                    title="Editar foto"
                >
                    <i className="fa fa-pencil"></i>
                </button>
            )
        }
        else {
            return null;
        }
    };

    return (
        <div className=" col-xs-12 col-md-4">
            <div className="profile">
                {renderProfilePicture()}
                <h1>{props.user.nome} {props.user.sobrenome}</h1>
                <ProfileButtons user={props.user} myprofile={props.myprofile}/>
                {renderContactInfo()}
                {props.myprofile &&
                    <ProfilePictureUploader user={props.user}/>
                }
            </div>
        </div>
    )
};

export default ProfileWidget;