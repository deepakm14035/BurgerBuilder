import Axios from '../../axios-orders';
import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
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
        console.log("[checkout]"+query.entries());
        for(let param of query.entries()){
            console.log("[checkout]"+param);
            ingredients[param[0]]= +param[1];
        } 
        console.log("[checkout]"+ingredients);
        this.setState({ingredients:ingredients})
    }
    render(){
        let summary = <Redirect to="/"/>;
        if(this.state.ingredients!=null && Object.keys(this.state.ingredients).length>0){
            summary=(<CheckoutSummary ingredients={this.state.ingredients} onProceedClicked={this.onProceedClicked} onCancel={this.onCancel}/>);
        }
        return (<div>
            <h1>checkout-</h1>
            {summary}
            <Route path={this.props.match.path+'/contactData'} render={()=><ContactData ingredients={this.state.ingredients}></ContactData>}></Route>
        </div>);
    }
}

export default Checkout;