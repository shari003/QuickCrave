import React from 'react';
import { Link } from 'react-router-dom';

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {name, address, designation} = this.props;
        return (
            <main className='flex justify-center items-center'>
                <div className='my-2 font-black text-xl'>
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>Website: <Link className='text-blue-800 underline' to={'https://shri-dev.vercel.app'}>Portfolio</Link></p>
                </div>
            </main>
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

export default UserClass;