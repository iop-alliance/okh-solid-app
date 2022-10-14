import React from "react";
import ReactMarkdown from 'react-markdown';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

const markdown = `
# About the OKH Solid App

## Overview
...

## Motivation 

To realize a future of production defined by decentralized manufacturing and shared 
knowledge, the [Internet of Production Alliance](https://www.internetofproduction.org/) 
is developing data portability-enhancing protocols and tooling so that people can quickly 
create and fabricate products made from a combination of locally sourced materials and 
global designs. 

Makers, designers, engineers, and others who are involved in collaborative 
and distributed manufacturing projects need to share their hardware projects’ design and 
documentation files with collaborators. They are currently not able to do so in a simple 
way that maintains the integrity of the project’s data and files. Makers are either forced 
to store all project files and data centrally on a platform, or they are forced to rely on 
unstandardised bundling of project files that could be missing critical data about component
parts. 

Our project helps solve this challenge in a way that will free people from platform lock-in, 
terms & conditions changes and extractive high fees. 

## What is Solid?

Solid is a specification that lets people store their data securely in decentralized data 
stores called Pods, which are like secure personal web servers for data. When data is stored 
in someone's Pod, they control which people and applications can access it.

* [About Solid Servers and Pods](https://solidproject.org/about)
* [Solid Protocol](https://solidproject.org/TR/protocol)
* [Solid Developer Resources](https://solidproject.org/developers/)
* [Adding login to a Solid Application](https://www.youtube.com/shorts/tNUxIs5d8FA)
* [Parsing RDF data with N3.js](https://www.youtube.com/shorts/5QXFcjW6OVs)
* [Access Control Policies in Solid](https://www.youtube.com/shorts/XZSOTAcq9uE)

## What is OKH?
...

## OKH Solid App Team

### Software Development

**Jackson Morgan:** runs O.team, a freelance dev shop for Solid, the decentralized web platform. He also contributes to Solid's open source specs and devtools.

**Max Wardeh**

### Research and testing

**Sarah Hutton**

## Support

**DAPSI**

**IOPA**
`

export default function About () {
  return(
    <Row className="mt-4 justify-content-md-center">
      <Col md={9}>
        <ReactMarkdown children={markdown} />
      </Col>
    </Row>
  )
}