import path from "path";
import affiliationYaml from "../contents/introduction/affiliation.yaml";

const introductionDirectory = path.join(process.cwd(), 'contents', 'introduction');

export function getAffiliation() {
    return affiliationYaml
}