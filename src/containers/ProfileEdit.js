import React from 'react'
import ProfileWidget from '../components/ProfileWidget';
import ProfileEditForm from '../components/ProfileEditForm';
import {connect} from 'react-redux';

const ProfileEdit = (props) => {

    return (
        <div>
            <ProfileWidget user={props.user} myprofile={true}/>
            <ProfileEditForm user={props.user}/>
        </div>
    )

};

const mapStateToProps = function (store) {
    return {
        user: store.userState.user,
    };
};

export default connect(mapStateToProps)(ProfileEdit);
