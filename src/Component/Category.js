import Card from "react-bootstrap/Card";
import "./HomePage.css";

function Category() {
  return (
    <div className="container">
      <div className="categories">
        <div className="card"><Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  width='280px' height='280px'/>
          <Card.Body>
            <Card.Title>Men's Cloth Title</Card.Title>
          </Card.Body>
        </Card></div>
        <div className="card"> <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" width='280px' height='280px' />
          <Card.Body>
            <Card.Title>Jewellery</Card.Title>
           
          </Card.Body>
        </Card></div>
        <div className="card"> <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"  width='280px' height='280px'/>
          <Card.Body>
            <Card.Title> Technology</Card.Title>
            
          </Card.Body>
        </Card></div>
        <div className="card"><Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"  width='280px' height='280px' />
          <Card.Body>
            <Card.Title> Women's cloth</Card.Title>
           
          </Card.Body>
        </Card></div>
        
       
       
        
      </div>
    </div>
  );
}

export default Category;
