import { LdoFactory } from "ldo";
import {
  ComponentShapeType,
  ModuleShapeType,
  PartShapeType,
  SoftwareShapeType,
  ReferenceShapeType,
  WebsiteURLShapeType,
  PublicationShapeType,
  StandardShapeType,
  FileShapeType,
  ManifestFileShapeType,
  ReadmeShapeType,
  ContributionGuideShapeType,
  ImageShapeType,
  BoMShapeType,
  SourceFileShapeType,
  ExportFileShapeType,
  AuxiliaryFileShapeType,
  ManufacturingInstructionsShapeType,
  UserManualShapeType,
  OuterDimensionsShapeType,
  MassShapeType,
  OTRLShapeType,
  OdrlShapeType,
} from "./okhProject.shapeTypes";

/**
 * =============================================================================
 * LDO Factories for okhProject
 * =============================================================================
 */

/**
 * Component LdoFactory
 */
export const ComponentFactory = new LdoFactory(ComponentShapeType);

/**
 * Module LdoFactory
 */
export const ModuleFactory = new LdoFactory(ModuleShapeType);

/**
 * Part LdoFactory
 */
export const PartFactory = new LdoFactory(PartShapeType);

/**
 * Software LdoFactory
 */
export const SoftwareFactory = new LdoFactory(SoftwareShapeType);

/**
 * Reference LdoFactory
 */
export const ReferenceFactory = new LdoFactory(ReferenceShapeType);

/**
 * WebsiteURL LdoFactory
 */
export const WebsiteURLFactory = new LdoFactory(WebsiteURLShapeType);

/**
 * Publication LdoFactory
 */
export const PublicationFactory = new LdoFactory(PublicationShapeType);

/**
 * Standard LdoFactory
 */
export const StandardFactory = new LdoFactory(StandardShapeType);

/**
 * File LdoFactory
 */
export const FileFactory = new LdoFactory(FileShapeType);

/**
 * ManifestFile LdoFactory
 */
export const ManifestFileFactory = new LdoFactory(ManifestFileShapeType);

/**
 * Readme LdoFactory
 */
export const ReadmeFactory = new LdoFactory(ReadmeShapeType);

/**
 * ContributionGuide LdoFactory
 */
export const ContributionGuideFactory = new LdoFactory(
  ContributionGuideShapeType
);

/**
 * Image LdoFactory
 */
export const ImageFactory = new LdoFactory(ImageShapeType);

/**
 * BoM LdoFactory
 */
export const BoMFactory = new LdoFactory(BoMShapeType);

/**
 * SourceFile LdoFactory
 */
export const SourceFileFactory = new LdoFactory(SourceFileShapeType);

/**
 * ExportFile LdoFactory
 */
export const ExportFileFactory = new LdoFactory(ExportFileShapeType);

/**
 * AuxiliaryFile LdoFactory
 */
export const AuxiliaryFileFactory = new LdoFactory(AuxiliaryFileShapeType);

/**
 * ManufacturingInstructions LdoFactory
 */
export const ManufacturingInstructionsFactory = new LdoFactory(
  ManufacturingInstructionsShapeType
);

/**
 * UserManual LdoFactory
 */
export const UserManualFactory = new LdoFactory(UserManualShapeType);

/**
 * OuterDimensions LdoFactory
 */
export const OuterDimensionsFactory = new LdoFactory(OuterDimensionsShapeType);

/**
 * Mass LdoFactory
 */
export const MassFactory = new LdoFactory(MassShapeType);

/**
 * OTRL LdoFactory
 */
export const OTRLFactory = new LdoFactory(OTRLShapeType);

/**
 * Odrl LdoFactory
 */
export const OdrlFactory = new LdoFactory(OdrlShapeType);
