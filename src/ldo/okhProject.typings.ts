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
  type?: {
    "@id": "Component";
  };
  /**
   * Label for this object
   */
  label?: string;
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: {
    "@id": string;
  }[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: {
    "@id": string;
  }[];
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
  type?: (
    | {
        "@id": "Component";
      }
    | {
        "@id": "Module";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: {
    "@id": string;
  }[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: {
    "@id": string;
  }[];
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
  repo?: WebsiteURL;
  /**
   * LOSH-Krawler takes the commit hash from the version tag and creates this permalink
   */
  repoSnapshot?: WebsiteURL;
  /**
   * version of this Component, preferably in the semantic versioning scheme (semver.org)
   */
  version?: string;
  /**
   * A resource from which this work is derived or from which it is a modification or adaption.
   */
  forkOf?: {
    "@id": string;
  };
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
  organization?: {
    "@id": string;
  };
  /**
   * view complete list under https://spdx.org/licenses/
   */
  spdxLicense?: {
    "@id": string;
  };
  /**
   * URL to legal code of a license without SPDX identifier, hence OSHWA-compliance is to be checked manually
   */
  alternativeLicense?: {
    "@id": string;
  }[];
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
  attestation?: {
    "@id": string;
  }[];
  /**
   * design files of this OSH modules have been peer reviewed in a scientific publication
   */
  hasPublication?: {
    "@id": string;
  }[];
  /**
   * International Patent Classification (IPC)
   */
  cpcPatentClass?: {
    "@id": string;
  }[];
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
   * Metadata addressing functionality, such as dimensions, material, weight, RPM,??? (not standardised)
   */
  functionalMetadata?: string[];
  /**
   * production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness
   */
  productionMetadata?: {
    "@id": string;
  }[];
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
  release?: {
    "@id": string;
  }[];
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
  hardwareLicense?: {
    "@id": string;
  };
  /**
   * sotware license as stated at OSHWA
   */
  softwareLicense?: {
    "@id": string;
  };
  /**
   * documentation license as stated at OSHWA
   */
  documentationLicense?: {
    "@id": string;
  };
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
  type?: (
    | {
        "@id": "Component";
      }
    | {
        "@id": "Part";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: {
    "@id": string;
  }[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: {
    "@id": string;
  }[];
  /**
   * fork of
   */
  forkOf?: {
    "@id": string;
  };
  /**
   * IETF language tag following the BCP 47 standard e.g. en-GB denotes the language of the documentation for the component subject
   */
  documentationLanguage?: string;
  /**
   * production-relevant metadata, such as material, manufacturing technology, outer dimensions, smallest tolerance, finest surface roughness
   */
  productionMetadata?: {
    "@id": string;
  }[];
  /**
   * smallest tolerance class (following ISO 286)
   */
  smallestToleranceClass?: {
    "@id": string;
  };
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
  type?: (
    | {
        "@id": "Component";
      }
    | {
        "@id": "Software";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * e.g. auto (fully integrated platforms) or manifest file (for connected platforms)
   */
  uploadMethod?: string;
  /**
   * complies with a technical standard
   */
  compilesWith?: {
    "@id": string;
  }[];
  /**
   * links to the corresponding Image
   */
  hasImage?: Image[];
  /**
   * Identifier for the applying Technology-specific Documentation Criteria according to DIN SPEC 3105-1, e.g. `tsdc:3DP`
   */
  relatedTsDC?: {
    "@id": string;
  }[];
  /**
   * URL to release
   */
  release?: {
    "@id": string;
  }[];
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
  /**
   * unambiguous reference
   */
  type?: {
    "@id": "Reference";
  };
  /**
   * Label for this object
   */
  label?: string;
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
  type?: (
    | {
        "@id": "Reference";
      }
    | {
        "@id": "WebsiteUrl";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
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
  type?: {
    "@id": "Publication";
  };
  /**
   * this publication has a digital object identifier (DOI)
   */
  doi?: string;
  /**
   * Label for this object
   */
  label?: string;
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
  type?: {
    "@id": "Standard";
  };
  /**
   * Document Identifier for the technical Standard
   */
  standardID?: string;
  /**
   * Label for this object
   */
  label?: string;
}

/**
 * File Type
 */
export interface File {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: {
    "@id": "File";
  };
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
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
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "ManifestFile";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
  /**
   * version of OKH specification the metadata is following (different version ??? different data fields)
   */
  okhv?: string;
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
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "Readme";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
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
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "ContibutionFile";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * Image Type
 */
export interface Image {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "Image";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * BoM Type
 */
export interface BoM {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "BoM";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * SourceFile Type
 */
export interface SourceFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "SourceFile";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * ExportFile Type
 */
export interface ExportFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "ExportFile";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * AuxiliaryFile Type
 */
export interface AuxiliaryFile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "AuxiliaryFile";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * ManufacturingInstructions Type
 */
export interface ManufacturingInstructions {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "ManufacturingInstructions";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
}

/**
 * UserManual Type
 */
export interface UserManual {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * File
   */
  type?: (
    | {
        "@id": "File";
      }
    | {
        "@id": "UserManual";
      }
  )[];
  /**
   * Label for this object
   */
  label?: string;
  /**
   * File extension. For example 'JPG'
   */
  fileFormat?: string;
  /**
   * The url of the file
   */
  fileUrl: {
    "@id": string;
  };
  /**
   * A permanent url for the file
   */
  permaURL?: {
    "@id": string;
  };
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
  type?: {
    "@id": "OuterDimensions";
  };
  /**
   * material
   */
  openScad?: string[];
  unit?: string[];
  /**
   * Label for this object
   */
  label?: string;
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
  type?: {
    "@id": "Mass";
  };
  unit?: string[];
  /**
   * value
   */
  value?: number[];
  /**
   * Label for this object
   */
  label?: string;
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
  type?: {
    "@id": "OTRL";
  };
  /**
   * Goal or purpose of this OTRL/ODRL
   */
  goal?: string;
  /**
   * Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf
   */
  exitCriteria?: string;
  /**
   * Label for this object
   */
  label?: string;
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
  type?: {
    "@id": "Odrl";
  };
  /**
   * Goal or purpose of this OTRL/ODRL
   */
  goal?: string;
  /**
   * Criteria to exit this OTRL for the next OTRL; inspired by: https://www.nasa.gov/pdf/458490main_TRL_Definitions.pdf
   */
  exitCriteria?: string;
  /**
   * Label for this object
   */
  label?: string;
}
