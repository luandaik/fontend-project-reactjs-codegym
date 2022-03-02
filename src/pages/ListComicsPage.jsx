import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import ListComics from '../components/ListComics/ListComics'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ListComicsPage extends Component {
  componentDidMount =()=>{
    window.document.title = "List Comics";
  }
  render() {
    return (
       <Fragment>
           <TopNavigation />
           <PageTop pagetitle="List comic"/>
           <ListComics/>
           <Footer />
       </Fragment>
    )
  }
}

export default ListComicsPage