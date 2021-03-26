import React, {Component} from 'react';
import Burger from '../../components/burger/Burger';
import BuildController from '../../components/burger/buildController/BuildController';
import Auxilliary from '../../hoc/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';
import AxiosInstance from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/spinner';


class BurgerBuilder extends Component {
    state={
        // ingredients:{
        //     salad:1,
        //     bacon:1,
        //     cheese:1,
        //     meat:0
        // },
        ordering:false
    };

    componentDidMount=()=>{
        this.props.setIngredients();
    }

    updateOrdering=()=>{
        this.props.initPurchase();
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
        for(let i in this.props.ings){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ings[i]));
        }
        queryParams=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryParams
        });


    }

    canOrder=()=>{
        let noOfItems = Object.keys(this.props.ings).map((value)=>{
            return this.props.ings[value];
        }).reduce((sum, el)=>{
            return sum+el;
        });
        return noOfItems>0;
        
    }

    render(){
        console.log(this.props.ings);
        return <Auxilliary>
            {this.props.isLoading?<Spinner/>:null}
            <OrderSummary order={this.props.ings} ordering={this.state.ordering} submitOrder={this.submitOrder} price={this.props.totalPrice}/>
            <Burger ingredients={this.props.ings}></Burger>
            <BuildController ingredientAdd = {this.props.addIngredient} ingredientSubtract = {this.props.removeIngredient} totalPrice={this.props.totalPrice} ordered={this.updateOrdering} canOrder={this.canOrder()}/>
        </Auxilliary>;
    }
}

const mapStateToProps = state=>{
    return {ings:state.burgerBuilder.ingredients, 
        totalPrice:state.burgerBuilder.totalCost,
        isLoading:state.burgerBuilder.isLoading, 
        error:state.burgerBuilder.error
    };
};

const mapDispatchToProps = dispatch=>{
    return {
        addIngredient:(ingredientType)=>{return dispatch(actions.addIngredient(ingredientType));},
        removeIngredient:(ingredientType)=>{return dispatch(actions.removeIngredient(ingredientType));},
        setIngredients:()=>{return dispatch(actions.initIngredients());},
        initPurchase:()=>{return dispatch(actions.purchaseInit());}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,AxiosInstance));