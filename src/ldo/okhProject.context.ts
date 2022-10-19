import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * okhProjectContext: JSONLD Context for okhProject
 * =============================================================================
 */
export const okhProjectContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@container": "@set",
  },
  Component:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Component",
  label: {
    "@id": "http://www.w3.org/2000/01/rdf-schema#label",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  uploadMethod: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#uploadMethod",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  compilesWith: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#compilesWith",
    "@type": "@id",
    "@container": "@set",
  },
  hasImage: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasImage",
    "@type": "@id",
    "@container": "@set",
  },
  File: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#File",
  fileFormat: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#fileFormat",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  fileUrl: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#fileUrl",
    "@type": "@id",
  },
  permaURL: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#permaURL",
    "@type": "@id",
  },
  Image: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Image",
  relatedTsDC: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#relatedTsDC",
    "@type": "@id",
    "@container": "@set",
  },
  Module:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Module",
  dataSource: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#dataSource",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  repoHost: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repoHost",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  repo: {
    "@id": "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repo",
    "@type": "@id",
  },
  Reference:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Reference",
  WebsiteUrl:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#WebsiteUrl",
  url: {
    "@id": "https://schema.org/url",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  repoSnapshot: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#repoSnapshot",
    "@type": "@id",
  },
  version: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#version",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  forkOf: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#forkOf",
    "@type": "@id",
    "@container": "@set",
  },
  versionOf: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#versionOf",
    "@type": "@id",
    "@container": "@set",
  },
  documentationLanguage: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#documentationLanguage",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  licensor: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#licensor",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  organization: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#organization",
    "@type": "@id",
  },
  spdxLicense: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#spdxLicense",
    "@type": "@id",
  },
  alternativeLicense: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#alternativeLicense",
    "@type": "@id",
    "@container": "@set",
  },
  technologyReadinessLevel: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#technologyReadinessLevel",
    "@type": "@id",
  },
  OTRL: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#OTRL",
  goal: {
    "@id": "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#goal",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  exitCriteria: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#exitCriteria",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  documentationReadinessLevel: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#documentationReadinessLevel",
    "@type": "@id",
  },
  Odrl: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL.ttl#Odrl",
  attestation: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#attestation",
    "@type": "@id",
    "@container": "@set",
  },
  hasPublication: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasPublication",
    "@type": "@id",
    "@container": "@set",
  },
  cpcPatentClass: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#cpcPatentClass",
    "@type": "@id",
    "@container": "@set",
  },
  function: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#function",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  hasReadme: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasReadme",
    "@type": "@id",
    "@container": "@set",
  },
  Readme:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Readme",
  hasContributionGuide: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasContributionGuide",
    "@type": "@id",
    "@container": "@set",
  },
  ContibutionFile:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ContibutionFile",
  hasBoM: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasBoM",
    "@type": "@id",
    "@container": "@set",
  },
  BoM: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#BoM",
  hasComponent: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasComponent",
    "@type": "@id",
    "@container": "@set",
  },
  Part: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Part",
  productionMetadata: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#productionMetadata",
    "@type": "@id",
    "@container": "@set",
  },
  smallestToleranceClass: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#smallestToleranceClass",
    "@type": "@id",
  },
  hasManifestFile: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManifestFile",
    "@type": "@id",
    "@container": "@set",
  },
  ManifestFile:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ManifestFile",
  okhv: {
    "@id": "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#okhv",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  source: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#source",
    "@type": "@id",
    "@container": "@set",
  },
  SourceFile:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#SourceFile",
  export: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#export",
    "@type": "@id",
    "@container": "@set",
  },
  ExportFile:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ExportFile",
  auxiliary: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#auxiliary",
    "@type": "@id",
    "@container": "@set",
  },
  AuxiliaryFile:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#AuxiliaryFile",
  hasManufacturingInstructions: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasManufacturingInstructions",
    "@type": "@id",
    "@container": "@set",
  },
  ManufacturingInstructions:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#ManufacturingInstructions",
  usesModule: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#usesModule",
    "@type": "@id",
    "@container": "@set",
  },
  useModule: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#useModule",
    "@type": "@id",
    "@container": "@set",
  },
  functionalMetadata: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#functionalMetadata",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  timestamp: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#timestamp",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
    "@container": "@set",
  },
  hasUserManual: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasUserManual",
    "@type": "@id",
    "@container": "@set",
  },
  UserManual:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#UserManual",
  hasSoftware: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#hasSoftware",
    "@type": "@id",
    "@container": "@set",
  },
  Software:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Software",
  release: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#release",
    "@type": "@id",
    "@container": "@set",
  },
  installationGuide: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#installationGuide",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  primaryType: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#primaryType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  additionalType: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#additionalType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  hardwareLicense: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#hardwareLicense",
    "@type": "@id",
  },
  softwareLicense: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#softwareLicense",
    "@type": "@id",
  },
  documentationLicense: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#documentationLicense",
    "@type": "@id",
  },
  country: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#country",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  certificationDate: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl/oshwa=#certificationDate",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  Publication:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Publication",
  doi: {
    "@id": "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#doi",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  Standard:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Standard",
  standardID: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#standardID",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  OuterDimensions:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#OuterDimensions",
  openScad: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#openScad",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  unit: {
    "@id": "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#unit",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  Mass: "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Mass",
  value: {
    "@id":
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#value",
    "@type": "http://www.w3.org/2001/XMLSchema#decimal",
    "@container": "@set",
  },
};
