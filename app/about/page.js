import React from 'react'
import Howitworks from '../components/Howitworks'
import Sectionheaders from '../components/Sectionheaders'
import Sectionheadersright from '../components/Sectionheadersright'
import Testheader from '../components/Testheader'
import Sectionheadersleft from '../components/Sectionheadersleft'
import Founderbio from '../components/Founderbio'

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