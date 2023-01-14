import React, { Component } from 'react';
import CreatePortal from '../CreatePortal';
import { Icon } from 'antd-mobile'; 

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999'
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  }
};

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      showModal: nextProps.show
    })
  }

  handleClose = ()=>{
    const { onClose } = this.props;
    onClose && onClose();
  }

  render() {
    const { show, styleBody, styleClose } = this.props;
    const { showModal } = this.state;
    const _styleBody = {
      ...Styles.body,
      ...styleBody
    };

    const _styleClose = {
      ...Styles.close,
      ...styleClose
    }
    return (
      <>
        {showModal ? <CreatePortal style={Styles.modal}>
          <div style={_styleBody}>
            {this.props.children}
            <Icon type='cross' size='lg' style={_styleClose} onClick={this.handleClose} />
          </div>
        </CreatePortal> : null}
      </>
    )
  }
}