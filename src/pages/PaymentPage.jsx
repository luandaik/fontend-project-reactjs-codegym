import React, { Component, Fragment } from "react";
import ComicPayment from "../components/ComicPayment/ComicPayment";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export class PaymentPage extends Component {
  componentDidMount = () => {
    window.scroll(0,0);
    window.document.title = "Payment";
  };
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Thanh toán" />
        <ComicPayment/>
        <Footer />
      </Fragment>
    );
  }
}

export default PaymentPage;
