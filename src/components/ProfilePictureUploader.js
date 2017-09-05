import React from 'react';
import {Modal, ModalBody, ModalHeader} from 'elemental';
import {connect} from 'react-redux';
import {isShowingProfileUploadModal} from '../actions/profile-layout-actions';
import store from '../store';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Image, Transformation} from 'cloudinary-react';
import UserAPI from './../api/userApi';

const CLOUDINARY_UPLOAD_PRESET = 'profile_pictures';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/openportfolio/upload';

class ProfilePictureUploader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFileUrl: '',
            uploadedFile: ''
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.public_id !== '') {
                this.setState({
                    uploadedFileUrl: response.body.public_id
                });
                console.log(response.body.public_id);
            }
        });
    }

    handleClose = () => {
        store.dispatch(isShowingProfileUploadModal(false))
    };

    renderUploader = () => {
        return (
            <Dropzone
                className="dropzone"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>+ Upload foto de perfil</p>
            </Dropzone>
        )
    };

    updateProfilePicture = () => {
        UserAPI.updateProfilePicture(this.props.user.codigo, this.state.uploadedFileUrl);
    };

    deletePicture = () => {

        UserAPI.deleteProfilePicture(this.state.uploadedFileUrl);

        this.setState({
            uploadedFileUrl: ''
        });

    };

    renderUploadedPictures = () => {
        return (
            <div className="text-center">
                <div className="uploaded-picture">
                    <Image cloudName="openportfolio"
                           publicId={this.state.uploadedFileUrl}>
                        <Transformation width="180" height="180" crop="fill"/>
                    </Image>
                    <div className="delete-picture"
                         onClick={this.deletePicture}>
                        <i className="fa fa-remove"></i>
                    </div>
                </div>
                <button
                    className="btn btn-update-picture color-primary"
                    onClick={this.updateProfilePicture}
                >
                    Usar como foto de perfil
                </button>
            </div>
        )
    };

    renderContent = () => {
        if (this.state.uploadedFileUrl) {
            return this.renderUploadedPictures();
        }
        else {
            return this.renderUploader();
        }
    };

    render() {
        return (
            <Modal isOpen={this.props.isShowingProfileUploadModal}
                   onCancel={this.handleClose}
                   backdropClosesModal
            >
                <ModalHeader text="Atualizar foto de perfil" showCloseButton onClose={this.handleClose}/>
                <ModalBody>
                    <div>
                        {this.renderContent()}
                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        isShowingProfileUploadModal: store.profileLayoutState.isShowingProfileUploadModal
    };
};

export default connect(mapStateToProps)(ProfilePictureUploader);