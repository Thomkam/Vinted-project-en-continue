import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Component</h2>
      <span>The product id is : {id}</span>
    </div>
  );
};

export default Product;
