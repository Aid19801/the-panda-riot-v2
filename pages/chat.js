import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import withAuth from '../HOCs/with-auth';
import { FunkyTitle, ChatBox, Input } from '../components';
import { chatPageLoading, chatPageLoaded, chatPageFailed } from '../redux/actions';

class ChatPage extends Component {
    
    componentDidMount() {

    }

  render() {

    
    return (

        <div className="container">

            <FunkyTitle text="Chat" />


            <div className="row">

              <div className="col-sm-12">
                
                CHAT MESSSAGES WILL GO HERE
              </div>

            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Input />
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = ({ chat }) => ({
  isLoading: chat.isLoading,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(chatPageLoading()),
  pageLoaded: () => dispatch(chatPageLoaded()),
  pageFailed: () => dispatch(chatPageFailed()),
});

export default compose(
  withAuth,
  connect(mapStateToProps, mapDispatchToProps),
)(ChatPage);