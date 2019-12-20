import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import * as actions from '../../store/actions/index';


class Layout extends React.Component {

    state = {
        showSideDrawer: false,
    }

    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Fragment>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}>
                </Toolbar>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}>
                </SideDrawer>
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToprops = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignUp: () => {
            dispatch(actions.authCheckState())
        }
    }
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Layout));