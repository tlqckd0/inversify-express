import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import { Circle } from "./RealClass";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);


console.log(ninja.fight());
console.log(ninja.sneak());

const example_circle = myContainer.get<Circle>(TYPES.Circle);

example_circle.print();
