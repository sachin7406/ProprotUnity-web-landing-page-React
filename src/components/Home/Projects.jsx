import React from 'react'
import ProjectItem from './ProjectItem'
import '../css/project.css'

import p1 from './../../image/Property1.png'
import p2 from './../../image/Property2.png'
import p3 from './../../image/Property3.png'
import p4 from './../../image/Property4.png'
import p5 from './../../image/Property5.png'
import p6 from './../../image/Property5.png'
import Head from '../Head'

export default function Projects(props) {

  const data = ([
    {
      "slno" : "1",
      "name": "Raunak Maximum City",
      "price": " ₹ 58 lacs*",
      "area": "430-660 Sq.Ft",
      "layout": "1.2 & 3 BHK",
      "url": p1,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, GB Road"
    },
    {
      "slno" : "2",
      "name": "Raunak Unnati Woods Suoreme",
      "price": " ₹ 1.08 cr*",
      "area": "755 Sq.Ft",
      "layout": "2 BHK",
      "url": p2,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, GB Road"
    },
    {
      "slno" : "3",
      "name": "Piramal Realty Vaikunth",
      "price": " ₹ 1.24 CR*",
      "area": "430-660 Sq.Ft",
      "layout": "1.2 & 3 BHK",
      "url": p3,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, Balkum Pada"
    },

    {
      "slno" : "4",
      "name": "Raymond Realty TenX Habitat",
      "price": " ₹ 1.1 CR*",
      "area": "430-644 Sq.Ft",
      "layout": "1.2 & 3 BHK",
      "url": p4,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, Pokhran Road"
    },
    {
      "slno" : "5",
      "name": "Raymond Realty TenX Era",
      "price": " ₹ 1.42 CR*",
      "area": "595-855 Sq.Ft",
      "layout": "2 & 3 BHK",
      "url": p5,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, Pokhran Road"
    },


    {
      "slno" : "6",
      "name": "Raymond Realty Address by GS",
      "price": " ₹ 2.75 CR*",
      "area": "938-1396 Sq.Ft",
      "layout": "1.2 & 3 BHK",
      "url": p6,
      "urlToImage": "https://techcrunch.com/wp content/uploads/2021/06/Screen Shot 2021 06 06 at 2.58.51 PM e1662509071979.png?resize=1200,745",
      "status": "Ready",
      "address": "Thane, Next to Viviana Mall"
    }
  ])
  return (
    <div className='container'>
      <Head color={'warning'} text={"light"} title={"Our Projects"} des={"Explore Our Collection Of Newly Launched Prime Properties"}/>
      <div className="row">
      {data.map((element) => {
        return (
          <div className="col-lg-4  col-md-6 py-3 px-2" key={element.slno}>
              <ProjectItem name={element.name} price={element.price} area={element.area} layout={element.layout} status={element.status} address={element.address} view={element.view} imageUrl={element.url} />
            </div>
        )
      })}
      </div>

    </div>
  )
}
