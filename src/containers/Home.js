import React from 'react'
import ProfileWidget from '../components/ProfileWidget';
import {connect} from 'react-redux';

const Home = (props) => {

    return(
        <ProfileWidget user={props.user} myprofile={true}/>
    )

};

const mapStateToProps = function (store) {
    return {
        user: store.userState.user,
    };
};

export default connect(mapStateToProps)(Home);
