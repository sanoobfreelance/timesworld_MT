import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

function CuntrySlider() {
  const contriList = useSelector(
    (state) => state.dashboardData?.filteredCountries
  );

  return (
    <Carousel fade>
      {contriList?.slice(0, 5)?.map((country, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block mx-auto"
            src={country.flag}
            alt={country.name}
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{country.name}</h3>
            <p>{country.region}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CuntrySlider;
