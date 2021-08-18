import React, { useEffect, useState } from "react";
import Image from 'next/image'

export default function UsersInfo() {

    const [users, setUsers] = useState([])
    const getUsersInfo = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users?page=2", true);
        xhr.onload = function(){
            const fetchUserDataFromReqRes = JSON.parse(xhr.responseText)  
            setUsers(fetchUserDataFromReqRes.data)
        };
        xhr.send();
    }
    useEffect(async()=>{
        await getUsersInfo()
    },[users])

  return (
    <>
      {users == null ? "Now Loading" : users.map((user) =>     
      <div className="container">
        <div class="row card">
          <div class="card-body">
            <div>
              <Image src={user.avatar} width="64px" height="64px"/>
              <a href="#" class="btn btn-primary">Show Detail</a>
              name {user.first_name}{user.last_name} 
              email {user.email}
            </div>
          </div>
        </div>
      </div>   
     
        )}
    </>
      )
}
