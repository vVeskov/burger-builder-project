import React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {

    state = {
        showSideDrawer: false,
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
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}>
                </SideDrawer>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;