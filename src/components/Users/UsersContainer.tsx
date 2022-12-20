import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType)=>{
return {
    users: state.usersPage.users
}
}
const mapDispatchToProps = ()=>{

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)