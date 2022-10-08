import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * solidContext: JSONLD Context for solid
 * =============================================================================
 */
export const solidContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@container": "@set",
  },
  Container: "http://www.w3.org/ns/ldp#Container",
  modified: {
    "@id": "http://purl.org/dc/terms/modified",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  contains: {
    "@id": "http://www.w3.org/ns/ldp#contains",
    "@type": "@id",
    "@container": "@set",
  },
  Resource: "http://www.w3.org/ns/ldp#Resource",
  mtime: {
    "@id": "http://www.w3.org/ns/posix/stat#mtime",
    "@type": "http://www.w3.org/2001/XMLSchema#decimal",
    "@container": "@set",
  },
  size: {
    "@id": "http://www.w3.org/ns/posix/stat#size",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
    "@container": "@set",
  },
};
