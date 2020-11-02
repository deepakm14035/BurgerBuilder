import Axios from '../../axios-orders';
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/checkout/checkoutSummary/checkoutSummary';
import ContactData from '../contactData/contactData';
class Checkout extends Component{
    state={ingredients:{
        bacon:1,
        cheese:1,
        salad:1,
        meat:1
    }};
    onCancel=()=>{
        this.props.history.goBack();
    }
    onProceedClicked=()=>{
        console.log(this.props);
        //Axios.post('/orders',{});
        this.props.history.push(this.props.match.path+'/contactData')
    }
    componentDidMount=()=>{//work left
        console.log(this.props.location.search);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let param in query.entries()){
            console.log(param);
            ingredients[param[0]]= +param[1];
        } 
        console.log(ingredients);
    }
    render(){
        return (<div>
            <h1>checkout-</h1>
            <CheckoutSummary ingredients={this.state.ingredients} onProceedClicked={this.onProceedClicked} onCancel={this.onCancel}/>
            <Route path={this.props.match.path+'/contactData'} render={()=><ContactData ingredients={this.state.ingredients}></ContactData>}></Route>
        </div>);
    }
}

export default Checkout;