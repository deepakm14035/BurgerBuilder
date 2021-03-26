import React, { Component } from 'react';
import Spinner from '../../components/UI/spinner';
import Axios from '../../axios-orders';
import Input from '../../components/UI/Input/input';
import  styles  from "./contactData.module.css";
import withErrorHandler from '../../hoc/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/order';
import { Redirect } from 'react-router';
class contactData extends Component{
    state={
        name:'',
        phoneNo:'',
        loading:false,
        orderForm:{
            name:{
                type:"input",
                inputType:"input",
                value:"",
                validation:{
                    required:true,
                    minLength:5
                },
                valid:false,
                touched:false
            },
            phoneNo:{
                type:"input",
                inputType:"input",
                value:""
            },
            email:{
                type:"email",
                inputType:"input",
                value:""
            },
            deliveryType:{
                type:"select",
                value:"fastest",
                options:[
                    {value:"fastest", displayName:"Fastest"},
                    {value:"cheapest", displayName:"Cheapest"}
                ]
            },
        },
        formIsValid:false
    }

    submitContactDetails=()=>{
        this.setState({loading:true});
        console.log(this.props.ingredients);
        const orderData = {
            ingredients:this.props.ingredients,
            name:this.state.orderForm.name.value,
            phoneNo:this.state.orderForm.phoneNo.value,
            email:this.state.orderForm.email.value
            
        };
        // Axios.post('/completeData.json',orderData).then(res=>{
        //     this.setState({loading:false});
        // }).catch(ex=>{
        //     this.setState({loading:false});
        // });

        this.props.orderBurger(orderData);
    }

    checkValidity=()=>{}

    valueChanged=(event,key)=>{
        //console.log(event.target.value);
        let newObj = {...this.state.orderForm[key]};
        newObj.value=event.target.value;
        let formObj = {...this.state.orderForm};
        formObj[key]=newObj;
        //check validity here
        let isValid=true;
        for(let i in this.state.orderForm){
            if(key==i){
                if(event.target.value.length==0){
                    isValid=false;
                    break;
                }
            }else{
                if(this.state.orderForm[i]==0){
                    isValid=false;
                    break;
                }
            }
                
        }
        this.setState({orderForm:formObj, formIsValid:isValid});
    }

    render(){
        let formFields=null;
        formFields = Object.keys(this.state.orderForm).map(key=>{
            return <Input key={key} {...this.state.orderForm[key]} title={key} valueChanged={(event)=>this.valueChanged(event,key)}></Input>;
        });
        const redirectOnPurchase = this.props.purchased?<Redirect to="/"/>:null;
        let data = (<div>
            <form suppressContentEditableWarning>
            {formFields}
            <button onClick={this.submitContactDetails} disabled={!this.state.formIsValid}>submit</button>
            </form>
            </div>);

            if(this.state.loading){
                data=<Spinner></Spinner>
            }

        return (<div className={styles.ContactData} style={{display:"block", boxShadow:"0 2px 3px #ccc"}}>
            {redirectOnPurchase}
            {data}
        </div>);
    }
}
const mapStateToProps = state=>{
    return {ings:state.burgerBuilder.ingredients, 
        totalPrice:state.burgerBuilder.totalCost,
        isLoading:state.order.isLoading, 
        error:state.burgerBuilder.error,
        purchased:state.order.purchased
    };
};
const mapDispatchToProps = dispatch=>{
    return {
        orderBurger:(orderData)=>{return dispatch(actions.purchaseBurger(orderData));}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(contactData, Axios));