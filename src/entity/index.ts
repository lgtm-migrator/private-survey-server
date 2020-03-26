import "reflect-metadata";
import { Questions } from "./question";
import { Surveys } from "./survey";
import { Answers } from "./answers";
import { Base } from "./Base";

export const entities: Base[] = [].concat(Questions).concat(Surveys).concat(Answers);
