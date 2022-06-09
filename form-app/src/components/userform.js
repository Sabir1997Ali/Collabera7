
   
import React, { Component } from "react";

import './user.css'

const regExpMD = RegExp(
    /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi);
const regExp=RegExp(
    /[1-9]/g
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productid: '',
            productname: '',
            productprice: '',
           
            manudate: '',
            expdate:'',
            isError: {
                productid: '',
                productname: '',
                productprice: '',
               
                manudate: '',
                expdate:''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state)
            setInterval('window.location.reload()', 3000);
        } else {
            
            console.log("invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "productid":
                
                isError.productid = regExp.test(value)
                ? ""
                : "Id  must be Number ";
                break;
                case "productname":
                isError.productname =
                    value.length < 3 ? "Atleast 3 characaters required" : "";
                break;
            case "productprice":
                isError.productprice = regExp.test(value)
                ? ""
                : "Price  must be Number ";
                break;
            
                case "manudate":
                    isError.manudate = regExpMD.test(value)
                        ? ""
                        : "Only Valid type";
                    break;
                    case "expdate":
                    isError.expdate = regExpMD.test(value)
                        ? ""
                        : "Only Valid type";
                    break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <form onSubmit={this.onSubmit}  className="w-50 p-5 container bg-primary text-light">
                <div className="all">
                <div className="form-group ">
                    <label>Product ID</label>
                    <input
                        type="text"
                        className={isError.productid.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="productid"
                        onChange={this.formValChange}
                    />
                    {isError.productid.length > 0 && (
                        <span className="invalid-feedback">{isError.productid}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        className={isError.productname.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="productname"
                        onChange={this.formValChange}
                    />
                    {isError.productname.length > 0 && (
                        <span className="invalid-feedback">{isError.productname}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Product Price</label>
                    <input
                        type="productprice"
                        className={isError.productprice.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="productprice"
                        onChange={this.formValChange}
                    />
                    {isError.productprice.length > 0 && (
                        <span className="invalid-feedback">{isError.productprice}</span>
                    )}
                </div>

               
                <div className="form-group">
                    <label>Manu Date</label>
                    <input
                        placeholder="ex : 16-05-22"
                        type="tel"
                        className={isError.manudate.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="manudate"
                        onChange={this.formValChange}
                    />
                    {isError.manudate.length > 0 && (
                        <span className="invalid-feedback">{isError.manudate}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Exp Date</label>
                    <input placeholder="ex : 16-05-22"
                        type="tel"
                        className={isError.expdate.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="expdate"
                        onChange={this.formValChange}
                    />
                    {isError.expdate.length > 0 && (
                        <span className="invalid-feedback">{isError.expdate}</span>
                    )}
                </div>

                <button type="submit" className="btn btn-block btn-danger" >Submit</button>
                </div>
            </form>
        );
    }
}
