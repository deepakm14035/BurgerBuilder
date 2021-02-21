import React, {Component} from 'react';
import Burger from '../../components/burger/Burger';
import BuildController from '../../components/burger/buildController/BuildController';
import Auxilliary from '../../hoc/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';
import AxiosInstance from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES={
    cheese:0.5,
    meat:1.5,
    salad:1,
    bacon:1.3
};

class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:1,
            meat:0
        },
        totalPrice:4,
        ordering:false
    };

    componentDidMount=()=>{
        AxiosInstance.get("/ingredients.json").then(res=>{
            console.log(res);
            this.setState({ingredients:res.data});
        });
    }

    addIngredient=(name) =>{
        console.log(name);
        const oldCount = this.state.ingredients[name];
        let newIngredients = {...this.state.ingredients};
        newIngredients[name]=oldCount+1;
        this.setState({ingredients:newIngredients});
        const priceAddition = INGREDIENT_PRICES[name];
        const oldPrice = this.state.totalPrice;
        this.setState({totalPrice:oldPrice+priceAddition});
    }
    removeIngredient=(name) =>{
        console.log(name);
        const oldCount = this.state.ingredients[name];
        let newIngredients = {...this.state.ingredients};
        newIngredients[name]=oldCount-1;
        this.setState({ingredients:newIngredients});
        const priceSubtraction = INGREDIENT_PRICES[name];
        const oldPrice = this.state.totalPrice;
        this.setState({totalPrice:oldPrice-priceSubtraction});
    }
    updateOrdering=()=>{
        this.setState({ordering:true});
    }
    cancelOrdering=()=>{
        this.setState({ordering:false});
    }
    submitOrder=()=>{
        // const order={ingredients:this.state.ingredients,
        // totalPrice:this.state.totalPrice,
        // customer:{
        //     name:'deepak',
        //     address:'asd asd asd',
        //     phoneNo:'1232312534'
        // }};
        // AxiosInstance.post('/orders.json',order)
        // .then(response=>{console.log(response)})
        // .catch(ex=>{console.log(ex);});
        let queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryParams
        });


    }
    render(){
        return <Auxilliary>
            <OrderSummary order={this.state.ingredients} ordering={this.state.ordering} submitOrder={this.submitOrder}/>
            <Burger ingredients={this.state.ingredients}></Burger>
            <p>{this.state.totalPrice}</p>
            <BuildController ingredientAdd = {this.addIngredient} ingredientSubtract = {this.removeIngredient} ordered={this.updateOrdering}/>
        </Auxilliary>;
    }
}

const mapStateToProps = state=>{
    return {ing:state.ingredients};
};

const mapDispatchToProps = dispatch=>{
    return {
        addIngredient:(ingredientType)=>{return dispatch({type:actionTypes.ADD_INGREDIENT,ingredientType:ingredientType});}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,AxiosInstance));