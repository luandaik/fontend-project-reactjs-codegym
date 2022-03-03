import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppUrl from "../API/AppUrl";
import RestClient from "../API/RestClient";
import ComicPayment from "../components/ComicPayment/ComicPayment";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";


function PaymentPage() {
  const { comicID} = useParams();
  const [data,setData] = useState({});
  useEffect(() => {
    window.scroll(0, 0);
    window.document.title = "Payment";
    
    RestClient.GetRequest(AppUrl.DetailComicData+comicID).then(result=>{
      setData(result[0]);
    }) 

  },[]);
  
  return (
    <Fragment>
      <TopNavigation />
      <PageTop pagetitle="Thanh toán" />
      <ComicPayment dataComic={data} />
      <Footer />
    </Fragment>
  );
}

export default PaymentPage;
