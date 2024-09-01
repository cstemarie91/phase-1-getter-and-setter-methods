class Circle {
    #radius;
   
  
    constructor(radius) {
      this.#radius = radius;
    }
  
    set radius(newRadius) {
      this.#radius = newRadius;
    }
    
    get radius() {
        return this.#radius;
    }

    get diameter() {
      return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }
    
    get area() {
        return this.radius * this.radius * Math.PI
    }

    set diameter(diameter) {
        this.#radius = diameter / 2;
      }
  
      set circumference(circumference) {
          this.#radius = circumference / Math.PI / 2;
      }
      
      set area(area) {
         this.#radius = Math.sqrt(area / Math.PI) 
      }
  }

  let newCircle = new Circle(18)