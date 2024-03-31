import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgHeader from "../img/Fond-Homepage.jpg";
import "../assets/css/home.css";

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
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="hero">
        <img src={imgHeader} alt="" />
        <div className="box-in-hero">
          <h2>
            Prêt à faire du tri <br /> dans vos placards ?
          </h2>
          <button>Commencer à vendre</button>
        </div>
      </div>
      <div className="articles">
        {data.offers.map((offer) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <article>
                <div className="avatar">
                  <img
                    /* {offer.owner.account.avatar && ( */
                    src={offer.owner.account.avatar?.secure_url}
                    alt={offer.owner.account.username}
                  />
                  {/*  )} */}
                  <span className="username">
                    {offer.owner.account.username}
                  </span>
                </div>
                <div className="info">
                  <img
                    className="img-products"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <p className="price">{offer.product_price} €</p>
                  <p className="size">{offer.product_details[1].TAILLE}</p>
                  <p className="brand">{offer.product_details[0].MARQUE}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Home;
