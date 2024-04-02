import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

// Je me connecte à mon compte Stripe
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

function Payment() {
  // On imagine qu'on a reçu le prix de la future transaction

  const price = {data.product_price}
  
  const [data, setData] = useState({});
 const [price, setPrice] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}.product_price`
        );
        setPrice(response._id.product_price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); 



  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };

  // Le composant Elements doit contenir toute la logique de paiement
  // On lui donne la preuve qu'on s'est connecté à notre compte et les options de paiement
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;
