import React from 'react'


const ProductCards = (props) => {
  return (
    <div>
      <div className="card" 
                style={{ 
                  width: '200px', 
                  height: '350px',
                  }}>
                <img src={props.item.image} className="card-img-top" alt="img" width="200px" height='200px'/>
                <div className="card-body">
                  <h5 className="card-title">{props.item.title.slice(0,20)}</h5>
                  <button className="btn btn-primary">${props.item.price}</button>
                </div>
              </div>
              
      
    </div>
  
  )
}

export default ProductCards
