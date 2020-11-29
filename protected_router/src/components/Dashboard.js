import React,{useState,useEffect,} from 'react';
import axios from 'axios';
import {Card,CardImg,CardBody,CardTitle,Button} from 'reactstrap';
const Dashboard = props =>{
    const url="https://reqres.in/api/users?page=2";
    const [users, setUsers] = useState([]);
    useEffect(() => {
     axios.get(url)
     .then(response=>{
       setUsers(response.data.data)
     })
    }, []);

  
  return (
    <div>
       {users && users.map((user)=>{
        return(
          <div className='user'>
            <CardImg top width='20%' src={user.avatar} alt={user.login} />
            <CardBody>
                     <CardTitle>User_Id:{ user.id }</CardTitle>
                      <CardTitle>First Name:{ user.first_name }</CardTitle>
                      <CardTitle>Last Name:{ user.last_name }</CardTitle>
                      <CardTitle>Email:{ user.email }</CardTitle>
            </CardBody>
          
        </div>
        )
      })}
      <button className="logout_button" onClick={props.handleLogout}>Log Out</button>
    </div>
  )
};

export default Dashboard;