import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Detail.css'
const Detail = () => {
    const [user, setUser] = useState();
    const {id}= useParams();

    const fechdetail= (id) => {
        axios.get("https://jsonplaceholder.typicode.com/users/"+id)
          .then((res) => setUser(res.data));
      };
      useEffect(() => {
        fechdetail(id);
        console.log(id)
      },[id]);

  return (
    <div> <h1 className='title'>Detail</h1> <br/>
       <span>Name:</span>  {user && user.company.name}  <br/>
       <span>catchPhrase:</span> {user && user.company.catchPhrase}  <br/>

       <span>bs:</span>{user && user.company.bs}

    </div>
  )
}

export default Detail