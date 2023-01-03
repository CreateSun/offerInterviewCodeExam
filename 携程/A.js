
function A() {
    this.name = undefined
    this.getName = function() {
        return this.name
    }
    this.setName = function(name) {
        this.name = name
    }
}

function B(name) {
    this.name = name? name : undefined
    this.setName = function(name) {
        this.name = name
    }
    this.getName = function(){
        return `My name is ${this.name}`
    }
}
export default B;
export {A, B}