import React from 'react'
import Howitworks from '../components/Howitworks'
import Sectionheaders from '../components/Sectionheaders'
import Sectionheadersright from '../components/Sectionheadersright'
import Testheader from '../components/Testheader'
import Sectionheadersleft from '../components/Sectionheadersleft'
import Founderbio from '../components/Founderbio'



export const metadata = {
  title: 'About: Pure Purpose',
  description: 'Collecting waste packaging and used containers from their consumers and distributing them to recycling facilities and branches as per their requirements, as well as reselling the reusable glass bottles and containers.',
}

function page() {
  return (
    <>
        <Founderbio></Founderbio>
        <Sectionheaders></Sectionheaders>
        <Sectionheadersleft></Sectionheadersleft>
        <Sectionheadersright></Sectionheadersright>
        <Testheader></Testheader>
        <Howitworks></Howitworks>
    </>
  )
}

export default page