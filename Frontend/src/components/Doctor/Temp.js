import React from 'react';
import UserServiceFetch from './UserServiceFetch';
import UserService from './UserService';
class Temp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
   
    componentDidMount()
    {
        UserService.getUsers().then((response)=>
        {
            this.setState({users:response.data})
        }
        );
    }
    // componentDidMount()
    // {
    //     UserServiceFetch.getAllDoctors().then((res)=>
    //     {
    //         this.setState({users: res})
    //     }
    //     );
    // }
    render()
    {
        return(
            <div>
                <h1 className="text-center">User Lisst</h1>
                    <p >this.state.users</p>
            </div>
        )
    }
}
export default Temp;