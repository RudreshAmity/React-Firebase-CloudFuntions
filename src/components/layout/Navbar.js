import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'  // we don't need firestore connect because we are not connecting to firestore anymore, we just want to access firebase property present in rootReducer on our state to see whether a user is logged in or not.

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
         <div className="container">
           <Link to='/' className="brand-logo">MarioPlan</Link>
           <SignedInLinks/>
           <SignedOutLinks/>
         </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    //console.log(state);
    return{

    }
}

export default connect(mapStateToProps)(Navbar);