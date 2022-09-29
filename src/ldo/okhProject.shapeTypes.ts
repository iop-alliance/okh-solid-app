import { ShapeType } from "ldo";
import { okhProjectSchema } from "./okhProject.schema";
import { okhProjectContext } from "./okhProject.context";
import {
  Component,
  Module,
  Part,
  Software,
  Reference,
  WebsiteURL,
  Publication,
  Standard,
  File,
  ManifestFile,
  Readme,
  ContributionGuide,
  Image,
  BoM,
  SourceFile,
  ExportFile,
  AuxiliaryFile,
  ManufacturingInstructions,
  UserManual,
  OuterDimensions,
  Mass,
  OTRL,
  Odrl,
} from "./okhProject.typings";

/**
 * =============================================================================
 * LDO ShapeTypes okhProject
 * =============================================================================
 */

/**
 * Component ShapeType
 */
export const ComponentShapeType: ShapeType<Component> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Component",
  context: okhProjectContext,
};

/**
 * Module ShapeType
 */
export const ModuleShapeType: ShapeType<Module> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Module",
  context: okhProjectContext,
};

/**
 * Part ShapeType
 */
export const PartShapeType: ShapeType<Part> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Part",
  context: okhProjectContext,
};

/**
 * Software ShapeType
 */
export const SoftwareShapeType: ShapeType<Software> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Software",
  context: okhProjectContext,
};

/**
 * Reference ShapeType
 */
export const ReferenceShapeType: ShapeType<Reference> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Reference",
  context: okhProjectContext,
};

/**
 * WebsiteURL ShapeType
 */
export const WebsiteURLShapeType: ShapeType<WebsiteURL> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#WebsiteURL",
  context: okhProjectContext,
};

/**
 * Publication ShapeType
 */
export const PublicationShapeType: ShapeType<Publication> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Publication",
  context: okhProjectContext,
};

/**
 * Standard ShapeType
 */
export const StandardShapeType: ShapeType<Standard> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Standard",
  context: okhProjectContext,
};

/**
 * File ShapeType
 */
export const FileShapeType: ShapeType<File> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#File",
  context: okhProjectContext,
};

/**
 * ManifestFile ShapeType
 */
export const ManifestFileShapeType: ShapeType<ManifestFile> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManifestFile",
  context: okhProjectContext,
};

/**
 * Readme ShapeType
 */
export const ReadmeShapeType: ShapeType<Readme> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Readme",
  context: okhProjectContext,
};

/**
 * ContributionGuide ShapeType
 */
export const ContributionGuideShapeType: ShapeType<ContributionGuide> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ContributionGuide",
  context: okhProjectContext,
};

/**
 * Image ShapeType
 */
export const ImageShapeType: ShapeType<Image> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Image",
  context: okhProjectContext,
};

/**
 * BoM ShapeType
 */
export const BoMShapeType: ShapeType<BoM> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#BoM",
  context: okhProjectContext,
};

/**
 * SourceFile ShapeType
 */
export const SourceFileShapeType: ShapeType<SourceFile> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#SourceFile",
  context: okhProjectContext,
};

/**
 * ExportFile ShapeType
 */
export const ExportFileShapeType: ShapeType<ExportFile> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ExportFile",
  context: okhProjectContext,
};

/**
 * AuxiliaryFile ShapeType
 */
export const AuxiliaryFileShapeType: ShapeType<AuxiliaryFile> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#AuxiliaryFile",
  context: okhProjectContext,
};

/**
 * ManufacturingInstructions ShapeType
 */
export const ManufacturingInstructionsShapeType: ShapeType<ManufacturingInstructions> =
  {
    schema: okhProjectSchema,
    shape:
      "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#ManufacturingInstructions",
    context: okhProjectContext,
  };

/**
 * UserManual ShapeType
 */
export const UserManualShapeType: ShapeType<UserManual> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#UserManual",
  context: okhProjectContext,
};

/**
 * OuterDimensions ShapeType
 */
export const OuterDimensionsShapeType: ShapeType<OuterDimensions> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#OuterDimensions",
  context: okhProjectContext,
};

/**
 * Mass ShapeType
 */
export const MassShapeType: ShapeType<Mass> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH-Shapes.ttl#Mass",
  context: okhProjectContext,
};

/**
 * OTRL ShapeType
 */
export const OTRLShapeType: ShapeType<OTRL> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#OTRL",
  context: okhProjectContext,
};

/**
 * Odrl ShapeType
 */
export const OdrlShapeType: ShapeType<Odrl> = {
  schema: okhProjectSchema,
  shape:
    "https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OTRL-shapes.ttl#Odrl",
  context: okhProjectContext,
};
