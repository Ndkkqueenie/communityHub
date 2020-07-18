import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render(){
        return(
            <div className='container'>
                <div className='home-box'>
                    <h2>Teamwork</h2>
                    <p>Teamwork is an internal social network for employees of an organisation. 
                        The goal of this application is to facilitate more interaction between colleagues and promote team bonding.
                    </p>
                    <div>
                        <Button type="submit" value="submit" style={{marginRight: 20}} color="primary">Learn more</Button>
                        <span><span></span></span>
                        <Button outline color="primary">Register</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;