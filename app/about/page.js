import React from 'react'
import Howitworks from '../components/Howitworks'
import Rightimage from '../components/Rightimage'
import Leftimage from '../components/Leftimage'
import Sectionheaders from '../components/Sectionheaders'
import Sectionheadersright from '../components/Sectionheadersright'
import Testheader from '../components/Testheader'
import Sectionheadersleft from '../components/Sectionheadersleft'

function page() {
  return (
    <>
        <Sectionheaders></Sectionheaders>
        <Sectionheadersleft></Sectionheadersleft>
        <Sectionheadersright></Sectionheadersright>
        <Testheader></Testheader>
        <Howitworks></Howitworks>
    </>
  )
}

export default page