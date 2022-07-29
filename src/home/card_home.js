import React from 'react'
import Videoe from './react.mp4'
function card_home({ cardData }) {
    console.log(cardData);
  return (
    <>
    <div className='container'>
      <div className='row'>
       <video autoplay loop muted>
           <source src={Videoe} type="video/mp4">
           </source>
       </video>
       </div>
     </div>   
       <div className="container pt-2">
        <div className="row">
      {cardData.map((cuElement) => {
      return(
      <> 
        <div className="col-4 pt-2" key={cuElement.id}>
          <div className='card vh-50' style={{backgroundImage: "url(" + cuElement.img + ")"}}>
            <div className="card-body">
            {/* <img  className="card-img-top" alt="asdfg" style={{height:"200px"}} /> */}
               <div>{cuElement.id}</div>
                 {/* <span>{cuElement.tile}</span> */}
                   {/* <h5 className="card-title">{props.title}</h5> */}
                   <p className="card-text text-white text-center">{cuElement.tile}.</p>
            </div>
          </div>
          </div>
      </>
      )
    })
    }
    </div>
  </div>       
    </>
  )
}

export default card_home