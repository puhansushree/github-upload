import React, { Component } from 'react';
import axios from 'axios';

class PricingDeveloper extends Component {

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
                        tprice: "17999",
                        sprice:"750"
                    });
            }
            else if (data.country_code === "GB") {
                this.setState(
                    {

                        currency_code: "£",
                        tprice: "480",
                        sprice:"21"
                    });
            }
            else {
                this.setState(
                    {
                        currency_code: "US$",
                        tprice: "648",
                        sprice:"27"
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
                <p className="p-pricing-color"><b>Developer Certificate</b></p>
                <p>12 Weeks - 24 Classes</p>
                <p><b>Price: {this.state.currency_code} {this.state.tprice} only</b></p>
                <p>[Price per session - {this.state.currency_code} {this.state.sprice}]</p>
            </div>
        )
    }

}

export default PricingDeveloper;