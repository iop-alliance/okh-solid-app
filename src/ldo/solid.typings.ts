import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for solid
 * =============================================================================
 */

/**
 * Container Type
 */
export interface Container {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * A container on a Solid server
   */
  type?: "Container";
  /**
   * Date modified
   */
  modified?: string;
  /**
   * Defines a Solid Resource
   */
  contains?: Resource[];
  /**
   * ?
   */
  mtime?: number;
  /**
   * size of this container
   */
  size?: number;
}

/**
 * Resource Type
 */
export interface Resource {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Any resource on a Solid server
   */
  type?: "Resource";
  /**
   * Date modified
   */
  modified?: string;
  /**
   * ?
   */
  mtime?: number;
  /**
   * size of this container
   */
  size?: number;
}
