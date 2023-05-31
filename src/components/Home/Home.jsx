import React from 'react'
import '../css/Home.css'
import Projects from './Projects';
import Compare from './Compare';
import Info from './Info';
import Start from './Start';
import Feedback from './Feedback'


export default function Home(props) {

  return (<>
    <Start />
    <Projects />
    <Compare />
    <Info />
    <Feedback/>
  </>
  )
}
