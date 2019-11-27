import React, { Fragment } from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate() {
        console.log("Modal will update!")
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translatey(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }} className="Modal">
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;