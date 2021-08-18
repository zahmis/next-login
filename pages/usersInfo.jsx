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
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="row">
                  <div className="col-1">
                    <Image src={user.avatar} width="64px" height="64px"/>
                  </div>
                  <div className="col-2">
                    <a href="#" className ="btn btn-primary d-flex justify-content-center a">SHOW DETAIL</a>
                  </div>
              </div>
              <div className="row">
                <span>name &nbsp;&nbsp;　{user.first_name}{user.last_name}</span>
                <span>email &nbsp;&nbsp;　{user.email}</span>
              </div>
            </div>
          </div>
      </div>   
     
        )}
    </>
      )
}
