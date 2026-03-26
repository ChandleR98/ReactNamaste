import React from "react";



class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1,
            userInfo:{
                userEmail:'dummy',

            }
        }
    }
    async componentDidMount(){
        const data=await fetch('https://fakerestaurantapi.runasp.net/api/User');
        const jsonData=await data.json();
        console.log(jsonData[0])
        this.setState({userInfo:jsonData?.[0]})
    }
    componentDidUpdate(){
        console.log('component did update')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
render(){
    const {name,location}=this.props;
    const {count,count2,userInfo}=this.state;
    return(<>
    <h1>{userInfo?.userEmail}</h1>
    {/* <button onClick={()=>{
        this.setState({
            count:this.state.count+1
        })
    }}>Counter</button> */}
    </>)
}
}
export default UserClass;