import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = (token /* , title, product_price */) => {
  console.log(token);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  /* const [title, setTitle] = useState();
  const [productPrice, setProductPrice] = useState(); */

  const { id } = useParams();
  //   const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>Loadind ...</p>
  ) : (
    <main>
      <h1>Offer</h1>
      <img src={data.product_image.secure_url} alt="img produit" />
      <p>
        {data.product_price} €
        <Link to={token ? "/Payment" : "/LogIn"}>
          <button>Acheter</button>
        </Link>
      </p>
      <div>
        {data.product_details.map((detail) => {
          const keys = Object.keys(detail);
          const keyName = keys[0];
          return (
            <p key={keyName}>
              {keyName} {detail[keyName]}
            </p>
          );
        })}
      </div>
    </main>
  );
};

export default Offer;
