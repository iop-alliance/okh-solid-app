import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

const markdown = `
# About the OKH Solid App

## Overview

Open infrastructures of the Internet (protocols, data standards and systems) granted power 
to create and distrbute digital content to anyone almost everywhere. However, the open 
infrastructures needed to grant power to create physical things have emerged more slowly. 

The means for production of physical things do exist (e.g. digital fabrication machines, 
open hardware, makerspaces/FabLabs,) and are spreading globally - they just aren’t connected yet. 
We, at the <a target="_blank" rel="noreferrer" href="https://www.internetofproduction.org/">Internet 
of Production Alliance</a> are developing those connections.

The <a target="_blank" rel="noreferrer" href="https://www.internetofproduction.org/open-know-how">Open
Know-How (OKH)</a> specification is a unique standard that allows for describing the necessary data 
fields for hardware project metadata and identifying project files for extraction, bundling, and 
moving between platforms.

The Solid ecosystem and protocols are an ideal way of storing and sharing project files, and this 
app addresses the specific needs of makers and designers for decentralised storing of hardware 
project files. We hope that makers, designers, engineers, and others who are involved in 
collaborative and distributed manufacturing projects will benefit from this app and the related 
standards and ontologies.

<hr class="border border-secondary opacity-25 w-75 mx-auto mt-4 mb-3">

## Motivation 

To realize a future for the production of goods that is defined by decentralized manufacturing and 
shared knowledge, the <a target="_blank" rel="noreferrer" 
href="https://www.internetofproduction.org/">Internet of Production Alliance</a> is developing 
data portability-enhancing protocols and tooling so that people can quickly create and fabricate 
products made from a combination of locally sourced materials and global designs. 

Makers, designers, engineers, and others who are involved in collaborative and distributed 
manufacturing projects need to share their hardware projects’ design and documentation files with 
collaborators. They are currently not able to do so in a simple way that maintains the integrity 
of the project’s data and files. Makers are either forced to store all project files and data 
centrally on a platform, or they are forced to rely on unstandardised bundling of project files 
that could be missing critical data about component parts. 

Our project helps solve this challenge in a way that will free people from platform lock-in and
terms & conditions changes. 

<hr class="border border-secondary opacity-25 w-75 mx-auto mt-4 mb-3">

## What is Solid?

Solid is a specification that lets people store their data securely in decentralized data 
stores called Pods, which are like secure personal web servers for data. When data is stored 
in someone's Pod, they control which people and applications can access it.

* <a target="_blank" rel="noreferrer" href="https://youtube.com/shorts/vjyWrYmachE">What even is 
  Solid?</a> (video)
* <a target="_blank" rel="noreferrer" href="https://youtube.com/shorts/B4ZBUos74sc">Why Solid
  Apps?</a> (video)
* <a target="_blank" rel="noreferrer" href="https://solidproject.org/about">About Solid Servers 
  and Pods</a>
* <a target="_blank" rel="noreferrer" href="https://solidproject.org/TR/protocol">Solid Protocol</a>
* <a target="_blank" rel="noreferrer" href="https://solidproject.org/developers/">Solid Developer 
  Resources</a>

<hr class="border border-secondary opacity-25 w-75 mx-auto mt-4 mb-3">

## What is OKH?

<a target="_blank" rel="noreferrer" href="https://www.internetofproduction.org/open-know-how">Open 
Know-How</a> is an initiative that includes open data models and tooling developed by members of 
the <a target="_blank" rel="noreferrer" href="https://www.internetofproduction.org/">Internet of 
Production Alliance</a> for sharing hardware designs and documentation about how something can 
be made. The initiative encomapses efforts to enable the discoverability, portability and 
interactivity of hardware projects towards enabling a decentralised manufacturing ecosystem.

<hr class="border border-secondary opacity-25 w-75 mx-auto mt-4 mb-3">

## OKH Solid App Team

This app was developed with contributions from:

**Max Wardeh**: Technical Coodinator of the <a target="_blank" rel="noreferrer" 
href="https://www.internetofproduction.org/">Internet of Production Alliance</a> and founder of the
<a target="_blank" rel="noreferrer" href="https://okconnect.org">Open Knowledge Connective</a>. Max
conceptualised the app and defines the functionality. He is also actively involved in developing the 
app's functionality and is responsible for the design and implemention of the user interface (so 
please reach out to him if you have any suggestions or complaints about it 🙂). <span 
style="color: #acacac;">&nbsp;|&nbsp;</span> <a target="_blank" rel="noreferrer" 
href="https://twitter.com/lurnid"><img alt="Twiiter Logo" src="/twitter-logo.png" width="24"></a>
<span style="color: #acacac;">&nbsp;|&nbsp;</span> <a target="_blank" rel="noreferrer" 
href="https://www.linkedin.com/in/mwardeh"><img alt="Linked In Logo" src="/li-logo.png" width="24"></a>

**Jackson Morgan:** Runs <a target="_blank" rel="noreferrer" href="https://www.o.team/">O.team</a>, 
a freelance dev shop for Solid, the decentralized web platform. He also contributes to Solid's open 
source specs and devtools. Jackson helps guide us through the ins and outs of the Solid specifications
and protocols, and implements the Solid-related functionality in the app.

**Sarah Hutton**: Research and Community Engagement Lead  at the <a target="_blank" 
rel="noreferrer" href="https://www.internetofproduction.org/">Internet of Production Alliance</a>, 
and Research Affiliate at <a target="_blank" rel="noreferrer" 
href="https://www.umass.edu/education/center/student-success">UMass Amherst Center for Student 
Success Research</a>. Sarah ensures that we have a research-led understanding of our users' 
requirements and the use-cases we're solving for. She designs and conducts the user testing which 
helps keep us on the right track to building something that the community will not only find useful, 
but also enjoy using 🤩. <span style="color: #acacac;">&nbsp;|&nbsp;</span> <a target="_blank" 
rel="noreferrer" href="https://twitter.com/schutton"><img alt="Twitter Logo" src="/twitter-logo.png"
width="24"></a>
<span style="color: #acacac;">&nbsp;|&nbsp;</span> <a target="_blank" rel="noreferrer" 
href="https://www.linkedin.com/in/sarahhutton"><img alt="Linked In Logo" src="/li-logo.png" width="24"></a>

<hr class="border border-secondary opacity-25 w-75 mx-auto mt-4 mb-3">

## Support

This project was made possible thorugh the generous support of:

<div class="row mb-4">
  <div class="col-md-3">
    <img alt="Logo of the Next Generation Internet Data Portability and Services Incubator"
      src="/ngi-dapsi-logo.png" class="w-100">
  </div>
  <div class="col-md-9">
    <strong>NGI-DAPSI:</strong> this project was funded by a grant from the 
    <a href="https://www.ngi.eu/" target="_blank" rel="noreferrer">Next Generation Internet (NGI)</a>
    <a href="https://dapsi.ngi.eu/" target="_blank" rel="noreferrer">Data Portability and Services 
    Incubator (DAPSI)</a> as part of the Open Call 3 cohort. This funding supported the development 
    of this app as well as other aspects of the <a 
    href="https://dapsi.ngi.eu/hall-of-fame/okh-pi-open-know-how-data-standard-for-portability-interoperability/"
    target="_blank" rel=noreferrer">NGI-DAPSI Open Know-How Portability & Interoperability (OKH P&I)</a>
    project.
  </div>
</div>
<div class="row">
  <div class="col-md-3">
    <img alt="Logo of the Internet of Production Alliance"
      src="/iopa-logo.png" class="w-100">
  </div>
  <div class="col-md-9">
    <strong>IOPA:</strong> The 
    <a href="https://www.internetofproduction.org/" target="_blank" rel=noreferrer">Internet of 
    Production Alliance(IOPA)</a> brings together people from around the world to build open 
    infrastructures enabling anyone, everywhere to participate in production. This project builds 
    on the work of the IOPA community and its initiatives, in particular the <a target="_blank" 
    rel=noreferrer" href="https://www.internetofproduction.org/open-know-how">Open Know-How</a>
    initiative and specification.
  </div>
</div>
`

export default function About () {
  return(
    <Row className="mt-4 justify-content-md-center">
      <Col md={9}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
      </Col>
    </Row>
  )
}