/* import { Link } from "react-router-dom";
 */ import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="home">
        <h1>home page</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="offer-id">
            {offers.map((offer) => {
              return <p key={offer._id}>{offer.product_name}</p>;
            })}
          </ul>
        )}
        {/*         <Link to="/offer">lien vers une offre</Link> */}
      </div>
    </>
  );
};

export default Home;
