import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/fa/css/all.css';

class MyFooter extends Component {
    render() {
        return (
            <div className="container footer-color">
                <br></br>
                <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <p className="p-2">
                            Copyright Lejhro Technology Pvt. Ltd. © 2020. All Rights Reserved
                        </p>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <p className="p-2 text-right">
                            Vocal for Local
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFooter;

