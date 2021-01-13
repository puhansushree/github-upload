import React, { Component } from 'react';
import axios from 'axios';

class PricingExpert extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            countryCode: '',
            currency_code: '',
            tprice: '',
            sprice:''
        }
    }

    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            if (data.country_code === "IN") {
                this.setState(
                    {
                        currency_code: "₹",
                        tprice: "35999",
                        sprice:"750"
                    });
            }
            else if (data.country_code === "GB") {
                this.setState(
                    {

                        currency_code: "£",
                        tprice: "864",
                        sprice:"19"
                    });
            }
            else {
                this.setState(
                    {
                        currency_code: "US$",
                        tprice: "1200",
                        sprice:"25"
                    });
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.getGeoInfo();
    }

    render() {
        return (
            <div>
                <p className="p-pricing-color"><b>Expert Developer</b></p>
                <p>24 Weeks - 48 Classes</p>
                <p><b>Price: {this.state.currency_code} {this.state.tprice} only</b></p>
                <p>[Price per session - {this.state.currency_code} {this.state.sprice}]</p>
            </div>
        )
    }

}

export default PricingExpert;