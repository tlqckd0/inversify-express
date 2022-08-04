import { inject, injectable } from "inversify";
import { TYPES } from "./types";

@injectable()
class Point {
    x: Number;
    y: Number;
    constructor(x: Number, y: Number) {
        this.x = x;
        this.y = y;
    }
    getX(): Number {
        return this.x;
    }
    getY(): Number {
        return this.y;
    }
}

@injectable()
class Circle {
    private center: Point;
    // private color: String;
    // private redius: Number
    constructor(
        @inject(TYPES.Point) center: Point
    ) {
        this.center = center;
        // this.color = "red";
        // this.redius = 10;
    }

    print(): void {
        console.log(`Circle info -> center [${this.center.getX()},${this.center.getY()}] `);
        // and Color is ${this.color} 
        // and redis is ${this.redius}`);
    }
}

export { Point, Circle }