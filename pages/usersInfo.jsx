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
      <div>Users</div>
      {users == null ? "Now Loading" : users.map((user) =>     
      <div>
          <Image src={user.avatar} width="50px" height="50px"/>
        <div>
          name {user.first_name}{user.last_name} 
        </div>
      </div>   
     
        )}
    </>
      )
}
