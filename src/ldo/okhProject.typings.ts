import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for okhProject
 * =============================================================================
 */

/**
 * Component Type
 */
export interface Component {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Either a module (MOSH) or Part (POSH); more component types may be added in the future
   */
  type: "Component";
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: string[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: string[];
}

/**
 * Module Type
 */
export interface Module {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Either a module (MOSH) or Part (POSH); more component types may be added in the future | Module of Open Source Hardware (MOSH)
   */
  type: ("Component" | "Module")[];
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: string[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: string[];
  /**
   * platform, where the crawler found the metadata (e.g. GitHub, Wikifactory)
   */
  dataSource?: string;
  /**
   * platform, where the OSH documentation is located (e.g. GitLab, Wikifactory or any self-hosted website or wiki)
   */
  repoHost?: string;
  /**
   * URL to the place where development happens (typically the repository) following this link people shall be able to contribute to the development (reporting issues, suggesting changes, connecting to the team etc.)
   */
  repository?: WebsiteURL;
  /**
   * LOSH-Krawler takes the commit hash from the version tag and creates this permalink
   */
  repoSnapshot?: WebsiteURL;
  /**
   * A resource from which this work is derived or from which it is a modification or adaption.
   */
  forkOf?: string;
  /**
   * connects specific versions of Modules with their versionless superclass
   */
  versionOf?: Module[];
  /**
   * IETF language tag following the BCP 47 standard e.g. en-GB denotes the language of the documentation for the component subject
   */
  documentationLanguage?: string;
  /**
   * organization/individual behind the hardware design (holder of intellectual property)
   */
  licensor?: string;
  /**
   * organization representing (most) contributors of this project
   */
  organization?: string;
  /**
   * view complete list under https://spdx.org/licenses/
   */
  spdxLicense?: string;
  /**
   * URL to legal code of a license without SPDX identifier, hence OSHWA-compliance is to be checked manually
   */
  alternativeLicense?: string[];
  /**
   * Technology Readiness Level (TRL) using the OTRL definitions
   */
  technologyReadinessLevel?: OTRL;
  /**
   * Documentation Readiness Level (DLR) using the ODRL definitions
   */
  documentationReadinessLevel?: Odrl;
  /**
   * permanent URL to evidence of compliance (OSHWA, FSF, DIN SPEC 3105)
   */
  attestation?: string[];
  /**
   * design files of this OSH modules have been peer reviewed in a scientific publication
   */
  hasPublication?: string[];
  /**
   * International Patent Classification (IPC)
   */
  cpcPatentClass?: string[];
  /**
   * functional description, e.g. what it actually does, what problem it solves, for whom, under which conditions etc. so if you wish that someone finds & uses your okh specifically e.g. for COVID-19-crisis response, include relevant keywords in this field optional: description of input, output and interfaces
   */
  function?: string;
  /**
   * links to the corresponding Readme
   */
  hasReadme?: Readme[];
  /**
   * links to the corresponding Contribution Guide
   */
  hasContributionGuide?: ContributionGuide[];
  /**
   * links to the corresponding Bill of Materials
   */
  hasBoM?: BoM[];
  /**
   * links to parts of the module
   */
  hasComponent?: Part[];
  /**
   * Metadata addressing functionality, such as dimensions, material, weight, RPM,… (not standardised)
   */
  functionalMetadata?: string[];
  /**
   * production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness
   */
  productionMetadata?: string[];
  /**
   * has manifest file
   */
  hasManifestFile?: ManifestFile[];
  /**
   * following ISO 8601
   */
  timestamp?: string[];
  /**
   * relative link to a source file
   */
  source?: SourceFile[];
  /**
   * URL to a (generated) exported source file
   */
  export?: ExportFile[];
  /**
   * reference to an auxiliary file
   */
  auxiliary?: AuxiliaryFile[];
  /**
   * has user manual
   */
  hasUserManual?: UserManual[];
  /**
   * has Manufacturing Instructions
   */
  hasManufacturingInstructions?: ManufacturingInstructions[];
  /**
   * has Software
   */
  hasSoftware?: Software[];
  /**
   * URL to release
   */
  release?: string[];
  /**
   * primary category as stated at OSHWA - possilbe values: 3D Printing, Agriculture, Arts, Education, Electronics, Enclosure, Environmental, Home Connection, IOT, Manufacturing, Other, Robotics, Science, Sound, Space, Tool, Wearables
   */
  primaryType?: string;
  /**
   * additional category as stated at OSHWA
   */
  additionalType?: string[];
  /**
   * harward license as stated at OSHWA
   */
  hardwareLicense?: string;
  /**
   * sotware license as stated at OSHWA
   */
  softwareLicense?: string;
  /**
   * documentation license as stated at OSHWA
   */
  documentationLicense?: string;
  /**
   * origin (country) as stated at OSHWA
   */
  country?: string;
  /**
   * certification date as state at OSHWA
   */
  certificationDate?: string;
}

/**
 * Part Type
 */
export interface Part {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Either a module (MOSH) or Part (POSH); more component types may be added in the future | Piece of Open Source Hardware (POSH)
   */
  type: ("Component" | "Part")[];
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: string[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: string[];
  /**
   * fork of
   */
  forkOf?: string;
  /**
   * IETF language tag following the BCP 47 standard e.g. en-GB denotes the language of the documentation for the component subject
   */
  documentationLanguage?: string;
  /**
   * production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness
   */
  productionMetadata?: string[];
  /**
   * smallest tolerance class (following ISO 286)
   */
  smallestToleranceClass?: string;
  /**
   * has manifest file
   */
  hasManifestFile?: ManifestFile[];
  /**
   * relative link to a source file
   */
  source?: SourceFile[];
  /**
   * URL to a (generated) exported source file
   */
  export?: ExportFile[];
  /**
   * reference to an auxiliary file
   */
  auxiliary?: AuxiliaryFile[];
  /**
   * has Manufacturing Instructions
   */
  hasManufacturingInstructions?: ManufacturingInstructions[];
}

/**
 * Software Type
 */
export interface Software {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Either a module (MOSH) or Part (POSH); more component types may be added in the future | Software (including firmware) needed to run & use the OSH
   */
  type: ("Component" | "Software")[];
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: string[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: string[];
  /**
   * URL to release
   */
  release?: string[];
  /**
   * Installation Guide
   */
  installationGuide?: string[];
}

/**
 * Reference Type
 */
export interface Reference {
  "@id"?: string;
  "@context"?: ContextDefinition;
}

/**
 * WebsiteURL Type
 */
export interface WebsiteURL {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * unambiguous reference | Website URL
   */
  type: ("Reference" | "WebsiteUrl")[];
  url: string;
}

/**
 * Publication Type
 */
export interface Publication {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * _scientific_ (that is: peer reviewed) publication that _contains_ the design files
   */
  type: "Publication";
  /**
   * this publication has a digital object identifier (DOI)
   */
  doi?: string;
}

/**
 * Standard Type
 */
export interface Standard {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * official standard used in the _design_ (not e.g. DIN SPEC 3105-1)
   */
  type: "Standard";
  /**
   * Document Identifier for the technical Standard
   */
  standardID?: string;
}

/**
 * File Type
 */
export interface File {
  "@id"?: string;
  "@context"?: ContextDefinition;
}

/**
 * ManifestFile Type
 */
export interface ManifestFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File | file holding the metadata
   */
  type: ("File" | "ManifestFile")[];
}

/**
 * Readme Type
 */
export interface Readme {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type: ("File" | "Readme")[];
}

/**
 * ContributionGuide Type
 */
export interface ContributionGuide {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type: ("File" | "ContibutionFile")[];
}

/**
 * Image Type
 */
export interface Image {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "Readme";
}

/**
 * BoM Type
 */
export interface BoM {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "BoM";
}

/**
 * SourceFile Type
 */
export interface SourceFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "SourceFile";
}

/**
 * ExportFile Type
 */
export interface ExportFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "ExportFile";
}

/**
 * AuxiliaryFile Type
 */
export interface AuxiliaryFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "AuxiliaryFile";
}

/**
 * ManufacturingInstructions Type
 */
export interface ManufacturingInstructions {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "ManufacturingInstructions";
}

/**
 * UserManual Type
 */
export interface UserManual {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: "UserManual";
}

/**
 * OuterDimensions Type
 */
export interface OuterDimensions {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * outer dimensions of a module or part
   */
  type: "OuterDimensions";
  /**
   * material
   */
  openScad?: string[];
  unit?: string[];
}

/**
 * Mass Type
 */
export interface Mass {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * mass of a module or part
   */
  type: "Mass";
  unit?: string[];
  /**
   * value
   */
  value?: number[];
}

/**
 * OTRL Type
 */
export interface OTRL {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Technology Readiness Level for open source hardware
   */
  type: "OTRL";
  /**
   * Goal or purpose of this OTRL/ODRL
   */
  goal?: string;
  /**
   * Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf
   */
  exitCriteria?: string;
}

/**
 * Odrl Type
 */
export interface Odrl {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Documentation Readiness Level for open source hardware
   */
  type: "Odrl";
  /**
   * Goal or purpose of this OTRL/ODRL
   */
  goal?: string;
  /**
   * Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf
   */
  exitCriteria?: string;
}
