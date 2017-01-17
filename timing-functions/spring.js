// based on:
// https://github.com/michaelvillar/dynamics.js/blob/master/src/dynamics.coffee

const M = 0.8;

export default class Spring {

    constructor(options) {
        this.options = Object.assign({
            friction: 100,
            frequency: 300,
            anticipationSize: 0,
            anticipationStrength: 1
        }, options);
        this.s = this.options.anticipationSize / 1000;
        this.decal = Math.max(0, this.s);
        this.frequency = Math.max(1, this.options.frequency / 20);
        this.friction = Math.pow(20, this.options.friction / 100);
    }

        A1 (t) {
            let x0 = this.s / (1 - this.s);
            let b = (x0 - M * 0) / (x0 - 0);
            let a = (M - b) / x0;
            return a * t * this.options.anticipationStrength / 100 + b;
        }

        A2 (t) {
            return Math.pow(this.friction / 10, -t) * (1 - t);
        }

        interpolate(t) {
            let frictionT = t / (1 - this.s) - this.s / (1 - this.s);
            if (t < this.s) {
                let yS = this.s / (1 - this.s) - this.s / (1 - this.s);
                let y0 = 0 / (1 - this.s) - this.s / (1 - this.s);
                let b = Math.acos(1 / this.A1(yS));
                let a = (Math.acos(1 / this.A1(y0)) - b) / (this.frequency * -this.s);
                return 1 - this.A1(frictionT) * Math.cos(this.frequency * (t - this.s) * a + b);
            } else {
                A = this.A2.bind(this);
                return 1 - this.A2(frictionT) * Math.cos(this.frequency * (t - this.s));
            }
        };
}