import { LdoFactory } from "ldo";
import { ContainerShapeType, ResourceShapeType } from "./solid.shapeTypes";

/**
 * =============================================================================
 * LDO Factories for solid
 * =============================================================================
 */

/**
 * Container LdoFactory
 */
export const ContainerFactory = new LdoFactory(ContainerShapeType);

/**
 * Resource LdoFactory
 */
export const ResourceFactory = new LdoFactory(ResourceShapeType);
