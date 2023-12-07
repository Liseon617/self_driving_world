class Viewport {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.zoom = 1;
        this.offset = new Point(0, 0);

        this.drag = {
            start: new Point(0, 0),
            end: new Point(0, 0),
            offset: new Point(0, 0),
            active: false
        };

        this.#addEventListeners();
    }

    getMouse(evt){
        return new Point(
            evt.offsetX * this.zoom,
            evt.offsetY * this.zoom
        );
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousewheel", this.#handleMouseWheel.bind(this));
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
        this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));
        this.canvas.addEventListener("mouseup", this.#handleMouseUp.bind(this));
    }

    #handleMouseWheel(evt){
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        //keep zoom range between 1 - 5
        this.zoom = Math.max(1, Math.min(5, this.zoom)); 
    }

    #handleMouseDown(evt){
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        //keep zoom range between 1 - 5
        this.zoom = Math.max(1, Math.min(5, this.zoom)); 
    }

    #handleMouseMove(evt){
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        //keep zoom range between 1 - 5
        this.zoom = Math.max(1, Math.min(5, this.zoom)); 
    }

    #handleMouseUp(evt){
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        //keep zoom range between 1 - 5
        this.zoom = Math.max(1, Math.min(5, this.zoom)); 
    }
}