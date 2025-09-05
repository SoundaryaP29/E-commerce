import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import banner1 from "../../assets/image/banner1.jpg";
import "./productCard.css";
import { Link } from 'react-router';

interface ProductCardTypes {
  productInfo: any;
  onClick: (data: any) => void;
}

// function buttonClick(data:String){
//   alert(data);
// }

function ProductCard(params: ProductCardTypes) {
  function buttonClick(data: any) {
    params.onClick(data);
  }
  return (
    <Card  className='card-container'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={params.productInfo.thumbnail} />
      <Card.Body>
        <Link className='link-tag' to={`/product/${params.productInfo.id}`}>
          <Card.Title className='title'>{params.productInfo.title}</Card.Title>
        </Link>
        <Card.Text>
          {params.productInfo.description}
        </Card.Text>
        <div className="rating">
          {'★'.repeat(Math.round(params.productInfo.rating)) + '☆'.repeat(5 - Math.round(params.productInfo.rating))}
        </div>
        <Button onClick={() => buttonClick(params.productInfo)} className='button' variant="primary">Add to cart</Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;