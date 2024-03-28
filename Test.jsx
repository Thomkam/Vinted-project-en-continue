import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <h1>home page</h1>
          {data.map((offer) => {
            return <span key={offer._id}>{offer.product_name}</span>;
          })}
          <ul className="offer-id"></ul>
        </main>
      )}
      {/*         <Link to="/offer">lien vers une offre</Link> */}
    </>
  );
};

export default Home;
