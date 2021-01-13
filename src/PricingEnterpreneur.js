import React, { Component } from 'react';
import axios from 'axios';

class PricingEnterpreneur extends Component {

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
                        tprice: "71999",
                        sprice:"750"
                    });
            }
            else if (data.country_code === "GB") {
                this.setState(
                    {

                        currency_code: "£",
                        tprice: "1440",
                        sprice:"17"
                    });
            }
            else {
                this.setState(
                    {
                        currency_code: "US$",
                        tprice: "1104",
                        sprice:"23"
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
                <p className="p-pricing-color"><b>Entrepreneur</b></p>
                <p>48 Weeks - 96 Classes</p>
                <p><b>Price: {this.state.currency_code} {this.state.tprice} only</b></p>
                <p>[Price per session - {this.state.currency_code} {this.state.sprice}]</p>
            </div>
        )
    }

}

export default PricingEnterpreneur;