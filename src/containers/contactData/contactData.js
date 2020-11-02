import React, { Component } from 'react';
import Spinner from '../../components/UI/spinner';
import Axios from '../../axios-orders';
import Input from '../../components/UI/Input/input';

class contactData extends Component{
    state={
        name:'',
        phoneNo:'',
        loading:false,
        orderForm:{
            name:{
                type:"input",
                value:"NAME",
                validation:{
                    required:true,
                    minLength:5
                }
            },
            phoneNo:{
                type:"input",
                value:""
            },
            email:{
                type:"email",
                value:"email"
            },
            phoneNo:{
                type:"select",
                value:"fastest",
                options:[
                    {value:"fastest", displayName:"Fastest"},
                    {value:"cheapest", displayName:"Cheapest"}
                ]
            },
        }
    }

    submitContactDetails=()=>{
        this.setState({loading:true});
        console.log(this.props.ingredients);
        Axios.post('/completeData.json',{
            ingredients:this.props.ingredients,
            name:this.state.name,
            phoneNo:this.state.phoneNo
            
        }).then(res=>{
            this.setState({loading:false});
        }).catch(ex=>{
            this.setState({loading:false});
        });
    }

    checkValidity=()=>{}

    valueChanged=(event,key)=>{
        console.log(event.target.value);
        let newObj = {...this.state.orderForm[key]};
        newObj.value=event.target.value;
        let formObj = {...this.state.orderForm};
        formObj[key]=newObj;
        this.setState({orderForm:formObj});
    }

    render(){
        let formFields=null;
        formFields = Object.keys(this.state.orderForm).map(key=>{
            return <Input key={key} {...this.state.orderForm[key]} title={key} valueChanged={(event)=>this.valueChanged(event,key)}></Input>;
        });
        let data = (<div>
            {formFields}
            <button onClick={this.submitContactDetails}>submit</button>
            </div>);

            if(this.state.loading){
                data=<Spinner></Spinner>
            }

        return (<div style={{display:"block", boxShadow:"0 2px 3px #ccc"}}>
            {data}
        </div>);
    }
}
export default contactData;