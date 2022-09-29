import { Schema } from "shexj";

/**
 * =============================================================================
 * okhProjectSchema: ShexJ Schema for okhProject
 * =============================================================================
 */
export const okhProjectSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Component",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ComponentShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Component",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Either a module (MOSH) or Part (POSH); more component types may be added in the future",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#uploadMethod",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "e.g. auto (fully integrated platforms) or manifest file (for connected platforms)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#compilesWith",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "complies with a technical standard",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasImage",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Image",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "links to the corresponding Image",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#relatedTsDC",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Module",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ModuleShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ComponentShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Module",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Module of Open Source Hardware (MOSH)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#dataSource",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "platform, where the crawler found the metadata (e.g. GitHub, Wikifactory)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repoHost",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "platform, where the OSH documentation is located (e.g. GitLab, Wikifactory or any self-hosted website or wiki)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repository",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURL",
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "URL to the place where development happens (typically the repository) following this link people shall be able to contribute to the development (reporting issues, suggesting changes, connecting to the team etc.)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repoSnapshot",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURL",
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "LOSH-Krawler takes the commit hash from the version tag and creates this permalink",
                },
              },
            ],
          },
          {
            type: "OneOf",
            expressions: [
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#version",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#string",
                },
                min: 0,
                max: 1,
              },
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#version",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#decimal",
                },
                min: 0,
                max: 1,
              },
            ],
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "version of this Component, preferably in the semantic versioning scheme (semver.org)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#forkOf",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "A resource from which this work is derived or from which it is a modification or adaption.",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#versionOf",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Module",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "connects specific versions of Modules with their versionless superclass",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#documentationLanguage",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "IETF language tag following the BCP 47 standard e.g. en-GB denotes the language of the documentation for the component subject",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#licensor",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "organization/individual behind the hardware design (holder of intellectual property)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#organization",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "organization representing (most) contributors of this project",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#spdxLicense",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "view complete list under https://spdx.org/licenses/",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#alternativeLicense",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "URL to legal code of a license without SPDX identifier, hence OSHWA-compliance is to be checked manually",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#technologyReadinessLevel",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#OTRL",
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Technology Readiness Level (TRL) using the OTRL definitions",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#documentationReadinessLevel",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#Odrl",
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Documentation Readiness Level (DLR) using the ODRL definitions",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#attestation",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "permanent URL to evidence of compliance (OSHWA, FSF, DIN SPEC 3105)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasPublication",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "design files of this OSH modules have been peer reviewed in a scientific publication",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#cpcPatentClass",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "International Patent Classification (IPC)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#function",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "functional description, e.g. what it actually does, what problem it solves, for whom, under which conditions etc. so if you wish that someone finds & uses your okh specifically e.g. for COVID-19-crisis response, include relevant keywords in this field optional: description of input, output and interfaces",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasReadme",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Readme",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "links to the corresponding Readme",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasContributionGuide",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ContributionGuide",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "links to the corresponding Contribution Guide",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasBoM",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#BoM",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "links to the corresponding Bill of Materials",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasComponent",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Part",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "links to parts of the module",
                },
              },
            ],
          },
          {
            type: "OneOf",
            expressions: [
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#usesModule",
                valueExpr:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Module",
                min: 0,
                max: -1,
              },
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#useModule",
                valueExpr:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURL",
                min: 0,
                max: -1,
              },
            ],
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "refers to a *release*/snapshot of an (external) OSH Module used in this design (should also appear in the BoM)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#functionalMetadata",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Metadata addressing functionality, such as dimensions, material, weight, RPM,… (not standardised)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#productionMetadata",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManifestFile",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManifestFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has manifest file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#timestamp",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "following ISO 8601",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#source",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SourceFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "relative link to a source file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#export",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ExportFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "URL to a (generated) exported source file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#auxiliary",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#AuxiliaryFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "reference to an auxiliary file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasUserManual",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#UserManual",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has user manual",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManufacturingInstructions",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManufacturingInstructions",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has Manufacturing Instructions",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasSoftware",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Software",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has Software",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#release",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "URL to release",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#primaryType",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "primary category as stated at OSHWA - possilbe values: 3D Printing, Agriculture, Arts, Education, Electronics, Enclosure, Environmental, Home Connection, IOT, Manufacturing, Other, Robotics, Science, Sound, Space, Tool, Wearables",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#additionalType",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "additional category as stated at OSHWA",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#hardwareLicense",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "harward license as stated at OSHWA",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#softwareLicense",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "sotware license as stated at OSHWA",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#documentationLicense",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "documentation license as stated at OSHWA",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#country",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "origin (country) as stated at OSHWA",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#certificationDate",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#date",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "certification date as state at OSHWA",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Part",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#PartShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ComponentShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Part",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Piece of Open Source Hardware (POSH)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#forkOf",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "fork of",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#documentationLanguage",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "IETF language tag following the BCP 47 standard e.g. en-GB denotes the language of the documentation for the component subject",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#productionMetadata",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#smallestToleranceClass",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "smallest tolerance class (following ISO 286)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManifestFile",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManifestFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has manifest file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#source",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SourceFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "relative link to a source file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#export",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ExportFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "URL to a (generated) exported source file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#auxiliary",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#AuxiliaryFile",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "reference to an auxiliary file",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManufacturingInstructions",
            valueExpr:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManufacturingInstructions",
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "has Manufacturing Instructions",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Software",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SoftwareShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ComponentShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Software",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Software (including firmware) needed to run & use the OSH",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#release",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "URL to release",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#installationGuide",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Installation Guide",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Reference",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ReferenceShape",
        type: "TripleConstraint",
        predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
        valueExpr: {
          type: "NodeConstraint",
          values: [
            "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Reference",
          ],
        },
        annotations: [
          {
            type: "Annotation",
            predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
            object: {
              value: "unambiguous reference",
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURL",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURLShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ReferenceShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#WebsiteUrl",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Website URL",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "https://schema.org/url",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#",
                object: {
                  value: "URL of the item.",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Publication",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#PublicationShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Publication",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "_scientific_ (that is: peer reviewed) publication that _contains_ the design files",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#doi",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "this publication has a digital object identifier (DOI)",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Standard",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#StandardShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Standard",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "official standard used in the _design_ (not e.g. DIN SPEC 3105-1)",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#standardID",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Document Identifier for the technical Standard",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#File",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShape",
        type: "TripleConstraint",
        predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
        valueExpr: {
          type: "NodeConstraint",
          values: [
            "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#File",
          ],
        },
        annotations: [
          {
            type: "Annotation",
            predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
            object: {
              value: "File",
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManifestFile",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManifestFileShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ManifestFile",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "file holding the metadata",
                },
              },
            ],
          },
          {
            type: "OneOf",
            expressions: [
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#okhv",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#string",
                },
                min: 0,
                max: 1,
              },
              {
                type: "TripleConstraint",
                predicate:
                  "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#okhv",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#decimal",
                },
                min: 0,
                max: 1,
              },
            ],
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "version of OKH specification the metadata is following (different version → different data fields)",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Readme",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ReadmeShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Readme",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ContributionGuide",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ContributionGuideShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShape",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ContibutionFile",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Image",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ImageShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Readme",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#BoM",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#BoMShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#BoM",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SourceFile",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SourceFileShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#SourceFile",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ExportFile",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ExportFileShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ExportFile",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#AuxiliaryFile",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#AuxiliaryFileShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#AuxiliaryFile",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManufacturingInstructions",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManufacturingInstructionsShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ManufacturingInstructions",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#UserManual",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#UserManualShape",
        type: "EachOf",
        expressions: [
          "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#FileShpae",
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#UserManual",
              ],
            },
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#OuterDimensions",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#OuterDimensionsShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#OuterDimensions",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "outer dimensions of a module or part",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#openScad",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "material",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#unit",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#",
                object: {
                  value: "mm, cm, m, g, kg",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Mass",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#MassShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Mass",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "mass of a module or part",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#unit",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#",
                object: {
                  value: "mm, cm, m, g, kg",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#value",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#decimal",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "value",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#OTRL",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#OTRLShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#OTRL",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Technology Readiness Level for open source hardware",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#goal",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Goal or purpose of this OTRL/ODRL",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#exitCriteria",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    {
      id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#Odrl",
      type: "Shape",
      expression: {
        id: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#OdrlShape",
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: [
                "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#Odrl",
              ],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Documentation Readiness Level for open source hardware",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#goal",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Goal or purpose of this OTRL/ODRL",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate:
              "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#exitCriteria",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
  ],
};
