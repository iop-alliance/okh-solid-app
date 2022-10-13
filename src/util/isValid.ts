import { LinkedDataObject, ShapeType } from "ldo";
import { Store } from "n3";
import { construct } from "@shexjs/validator";
// The typings for neighborhood-rdfjs are incorrect
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ctor } from "@shexjs/neighborhood-rdfjs";

export default async function isValid<T>(object: LinkedDataObject<T>, shapeType: ShapeType<T>) {
    const g = new Store();
    object.$dataset().forEach((quad) => {
        g.addQuad(quad);
    });
    // Validate
    const validationResult = construct(okhProjectSchema, ctor(g), {}).validate([
        {
        node: moduleId,
        shape: ModuleShapeType.shape,
        },
    ]);
    console.log(JSON.stringify(validationResult, null, 2));
    return !validationResult.errors;
}