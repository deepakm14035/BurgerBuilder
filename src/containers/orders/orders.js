import React, { Component } from 'react';
import AxiosInstance from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import Order from './order';
class Orders extends Component{
    state={
        orders:[]
    }
    componentDidMount=()=>{
        AxiosInstance.get('/completeData.json').then(response=>{
            console.log(response);
            let orders=Object.keys(response.data).map(key=>{
                return {...response.data[key],id:key};
            });
            console.log(orders);
            this.setState({orders:orders});
        })
        .catch(ex=>{
            console.log();
        })
    }
    render(){
        let orderData=null;
        orderData = this.state.orders.map((_,index)=>{
            return <Order data={this.state.orders[index]}></Order>
        });
        return orderData;
    }
}

export default withErrorHandler(Orders, AxiosInstance);