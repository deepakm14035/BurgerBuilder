import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,Axios)=>{
    return ( class extends Component{
        state={error:null};
        componentDidMount=()=>{
            this.reqinterceptor = Axios.interceptors.request.use(null,(req)=>{
                this.setState({error:null});
                return req;
            });
            this.resinterceptor = Axios.interceptors.response.use(null,(res,error)=>{
                console.log(error);
                this.setState({error:error});
                return res;
            });
        }
        componentWillUnmount=()=>{
            Axios.interceptors.request.eject(this.reqinterceptor);
        }
        render(){
            return (
        <div>
            <Modal show={this.state.error}>
                {this.state.error!=null?this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props}></WrappedComponent>
        </div>
            );
        }
    });
}
export default withErrorHandler;