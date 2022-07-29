// import React, { useEffect, useState } from 'react'
// function Alluser() {
   
//     const [user, setUser] = useState([]);

//     const getusers = async () => {
//         const response = await fetch('http://localhost:1337/getuser');
//         console.log(response);
//         // const data = await response.json();
//         // console.log(data);
//         setUser(await response.json());
//     }
     
//     useEffect(() => {
//         getusers();
//     }, [])

//   return (6
//     <>
//     <div className='container'>
//        <h2>List Of Ours Users</h2>
//            <div className='row text-center'>
//                {
//                    user.map((curElem) => {
//                        return(
                    
//                           <div className='col-4 col-sm-4 col-sm-4 p-2 bg-light'>
//                              <div className='card p-2'>
//                                 <div className='align-item-center'>
//                                    {/* <div className='image'><img src={curElem.avatar_url} className='rounded' width="155"></img></div> */}
//                                      <div className='justify-content-between rounded stats'>
//                                      <div className='fw-bold'>{curElem.name}</div>
//                                      <div >{curElem.email}</div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
                    
//                        )
//                    })
//                }
               
//            </div>
//        </div>
//     </>
//   )
// }

// export default Alluser