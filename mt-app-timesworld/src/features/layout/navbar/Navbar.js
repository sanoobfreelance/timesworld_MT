import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByRegion } from "../../../app/redux/home/dashboardSlice";

function AppBar() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.dashboardData.filterdata);
  const filteredCountries = useSelector(
    (state) => state.dashboardData.filteredCountries
  );

  const handleRegionSelect = (region) => {
    dispatch(filterCountriesByRegion(region));
  };

  console.log(filteredCountries, "Filtered countries by region");

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <NavDropdown
              title="Region Filtering"
              id="collapsible-nav-dropdown"
              align="end"
            >
              {filterData?.map((item, i) => {
                return (
                  <NavDropdown.Item
                    key={i}
                    onClick={() => handleRegionSelect(item)}
                  >
                    {item}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
