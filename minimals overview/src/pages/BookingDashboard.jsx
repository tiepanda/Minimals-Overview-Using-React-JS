import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {  Calendar2Check,  CurrencyDollar,  People,  ArrowUp,} from "react-bootstrap-icons";
import StatCard from "../components/BookingComp/StatCard";
import TotalIncomeGraph from "../components/BookingComp/TotalIncomeGraph";
import BookedStatusBar from "../components/BookingComp/BookedStatusBar";
import BookedStatusBar2 from "../components/BookingComp/BookedStatusBar2";
import ToursAvailable from "../components/BookingComp/ToursAvailable";
import Statistics from "../components/BookingComp/Statistics";
import CustomerReviews from "../components/BookingComp/CustomerReviews";
import NewestBooking from "../components/BookingComp/NewestBooking/NewestBooking";
import BookingDetails from "../components/BookingComp/BookingDetails";
import {
  statsData,
  bookedstatusdata,
  bookedStatusCircularData,
  customerReviewsData,
  newestBookings,
  bookingDetailsData,
} from "../data/dashboardData";

const BookingDashboard = () => {
  // State for newest bookings
  const [bookings, setBookings] = useState(newestBookings);

  // State for stats data
  const [stats] = useState(statsData);

  // Define the specific card data for the dashboard
  const mapStatsDataToCardData = () => {
    if (!stats || !stats.length) return [];

    return stats.map((stat, index) => {
      let cardType = "booking";
      if (stat.title.toLowerCase().includes("revenue")) {
        cardType = "sold";
      } else if (stat.title.toLowerCase().includes("customer")) {
        cardType = "canceled";
      } else if (index === 1) {
        cardType = "sold";
      } else if (index === 2) {
        cardType = "canceled";
      }

      const isPositive = cardType !== "canceled";

      return {
        id: stat.id,
        title: stat.title,
        value: stat.value,
        percentage: "2.5",
        isPositive: isPositive,
        cardType: cardType,
      };
    });
  };

  const displayCards = mapStatsDataToCardData();

  // Function to handle booking filtering
  const filterBookings = (filterType) => {
    switch (filterType) {
      case "newest":
        setBookings(
          [...newestBookings].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )
        );
        break;
      case "price-high":
        setBookings([...newestBookings].sort((a, b) => b.price - a.price));
        break;
      case "price-low":
        setBookings([...newestBookings].sort((a, b) => a.price - b.price));
        break;
      default:
        setBookings(newestBookings);
    }
  };

  return (
    <Container fluid className="">
      <Row className="my-2">
        {displayCards.map((card) => (
          <Col key={card.id} md={4}>
            <StatCard
              title={card.title}
              value={card.value}
              percentage={card.percentage}
              isPositive={card.isPositive}
              cardType={card.cardType}
            />
          </Col>
        ))}
      </Row>

      <Row className="py-2">
        <Col
          xl={8}
          lg={8}
          className="card pt-2 shadow-sm"
          style={{
            height: "0%",
            borderRadius: "16px",
            backgroundColor: "#f4f6f8",
            border: "none",
          }}
        >
          <div
            className="card "
            style={{ borderRadius: "16px", border: "none" }}
          >
            <Row className="card-body p-2 ">
              <Col xl={6} lg={6} md={6}>
                <TotalIncomeGraph />
              </Col>
              <Col xl={6} lg={6} md={6}>
                {/* Using state for BookedStatusBar */}
                <BookedStatusBar initialBookedData={bookedstatusdata} />
              </Col>
            </Row>
          </div>

          <div className="py-2">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <BookedStatusBar2
                  bookedStatusCircular={bookedStatusCircularData}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={4} className="px-2">
          <ToursAvailable />
        </Col>
      </Row>

      <Row className="">
        <Col lg={8} xl={8} className="">
          <Statistics />
        </Col>
        <Col lg={4} xl={4} className="">
          <CustomerReviews reviews={customerReviewsData} />
        </Col>
      </Row>
      <Row className="py-2">
        <div className="col-lg-12 col-xl-12">
          {/* Using state for NewestBooking */}
          <NewestBooking bookings={bookings} onFilterChange={filterBookings} />
        </div>
      </Row>

      {/* Booking Details component */}
      <Row className="p-2">
        <Col>
          <BookingDetails bookingData={bookingDetailsData} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookingDashboard;
