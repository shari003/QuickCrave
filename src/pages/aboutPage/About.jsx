import React from 'react';
import UserClass from './User';

class About extends React.Component {
    render(){
        return (
            <>
                <UserClass name={"Shri"} address={"New Delhi, IN"} designation={"SE Developer"} />
            </>
        )
    }
}

export default About