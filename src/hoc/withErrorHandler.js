import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,Axios)=>{
    return ( class extends Component{
        state={error:null};
        componentWillMount=()=>{
            this.reqinterceptor = Axios.interceptors.request.use(null,(req)=>{
                this.setState({error:null});
                return req;
            });
            this.resinterceptor = Axios.interceptors.response.use(null,(res,error)=>{
                this.setState({error:res.toJSON()});
                return res;
            });
        }
        componentWillUnmount=()=>{
            Axios.interceptors.request.eject(this.reqinterceptor);
        }
        closeModal=()=>{
            this.setState({error:null});
        }
        render(){
            return (
        <div>
            <Modal show={this.state.error} modalClosed={this.closeModal}>
                {this.state.error!=null?this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props}></WrappedComponent>
        </div>
            );
        }
    });
}
export default withErrorHandler;