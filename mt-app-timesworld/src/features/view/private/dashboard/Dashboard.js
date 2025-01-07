import { useEffect, useState } from "react";
import AppBar from "../../../layout/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { countrielistAsync } from "../../../../app/redux/home/dashboardSlice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CuntrySlider from "./CuntrieSlider";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [displayCount, setDisplayCount] = useState(15);

  const contriList = useSelector(
    (state) => state.dashboardData?.filteredCountries
  );

  useEffect(() => {
    dispatch(countrielistAsync());
  }, [dispatch]);
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 15);
  };

  return (
    <>
      <AppBar />
      <Container className="my-4">
        <CuntrySlider />
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {contriList?.slice(0, displayCount)?.map((country, i) => (
            <Col key={i}>
              <Card>
                <Row noGutters>
                  <Col xs={4}>
                    <Card.Img
                      src={country.flag}
                      alt={country.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Col>

                  <Col xs={8}>
                    <Card.Body>
                      <Card.Title>{country.name}</Card.Title>
                      <Card.Text>{country.region}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        {contriList?.length > 10 && (
          <Button
            variant="dark"
            className="d-block mx-auto my-4"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </Container>
    </>
  );
};
export default Dashboard;
