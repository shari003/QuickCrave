import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {name, address, designation} = this.props;
        return (
            <div>
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Designation: {designation}</p>
            </div>
        )
    }
}

// const User = ({name, address, designation}) => {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Address: {address}</p>
//             <p>Designation: {designation}</p>
//         </div>
//     )
// }

export default UserClass