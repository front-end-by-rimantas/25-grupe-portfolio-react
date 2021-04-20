class Achievements {
    constructor (selector, data){
        this.selector = selector;
        this.data = data;
        
        this.DOM = null;

        this.init();
    }
    init (){
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius');
            return false;
            console.log(this.selector);
        }
        if (!this.isValidData()) {
            console.error('ERROR: nevalidus duomenys');
            return false;
        }
    }
    isValidSelector(){
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selektorius turi buti tekstas');
            return false;
        }
        if (this.selector === '') {
            console.warn('ERROR: selektorius turi buti ne tuscias tekstas');
            return false;
        }
        return true;
    }
    isValidData(){
        if (typeof this.data !== 'object' || Array.isArray(this.data)) {
            console.warn('ERROR: duomenys turi buti objekto tipo');
            return false;
        }
        if (this.data.list === undefined || !Array.isArray(this.data.list)) {
            console.warn('ERROR: Duomenys esantys list elemente turi buti array tipo ');
            return false;
        }
        if (this.data.list.length === 0) {
            console.warn('ERROR: Duomenyse esantis list turi buti ne tuscias array');
            return false;
        }
        return true;
    }
}
export { Achievements }