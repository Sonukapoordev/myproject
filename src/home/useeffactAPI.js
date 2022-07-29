import React, { useEffect, useState } from 'react'

const UseeffactAPI = () => {

    const [users, setUsers] = useState([]);
 
    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        // const data = await response.json();
        // console.log(data);
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);
  return (
    <>
       
       <div className='container'>
       <h2>List Of GitHub Users</h2>
           <div className='row text-center'>
               {
                   users.map((curElem) => {
                       return(
                    
                          <div className='col-4 col-sm-4 col-sm-4'>
                             <div className='card p-2'>
                                <div className='align-item-center'>
                                   <div className='image'><img src={curElem.avatar_url} className='rounded' width="155"></img></div>
                                     <div className='justify-content-between rounded  stats'>
                                     <div className='fw-bold'>{curElem.login}</div>
                                     <div >{curElem.node_id}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                       )
                   })
               }
               
           </div>
       </div>
    </>
  )
}

export default UseeffactAPI