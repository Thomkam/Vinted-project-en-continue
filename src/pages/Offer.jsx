/* import { useParams } from "react-router-dom";
 */ import { Link } from "react-router-dom";

const Offer = () => {
  //   const params = useParams();
  //   console.log(params.id);
  /*   const { id } = useParams();
   */
  return (
    <>
      <h1>Je suis sur la page de offre dont id est </h1>;
      <Link to="/">
        <div>
          <section>
            <p>Retour vers Home</p>
          </section>
        </div>
      </Link>
      ;
    </>
  );
};

export default Offer;
