import React from 'react'
import Footersection from '../components/footer'
import Layout from '../components/layout'
import Gallerys from '../components/gallery'

const Gallery = () => (
  <Layout>
    <div>
      {/* <CarouselImage /> */}
      <Gallerys />
    </div>
    <div className="footer">
      <Footersection />
    </div>
  </Layout>
)

export default Gallery
