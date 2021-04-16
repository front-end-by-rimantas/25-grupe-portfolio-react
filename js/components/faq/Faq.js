class Faq {
    constructor (selector, data){
        this.selector = selector;
        this.data = data;
        
        this.DOM = null;
        this.init();
    }

    init(){
        if (!this.isValidSelector) {
            console.error('ERROR: pateiktas selektorius nevalidus');
            return false;
        }
        if (!this.isValidData) {
            console.error('ERROR: pateikti duomenys nera teisingi');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        this.DOM = DOM;
        if (!DOM) {
            console.error('ERROR: nepavyko rasti elemonto pagal nurodyta selektoriu');
            return false;
        }
        this.DOM.classList.add('faqSection');

        this.render ();
    }

    isValidSelector () {
        return true;
    }
    isValidData () {
        return true;
    }
    render(){
        const titleAndText = `<div class="row">
        <h2 class="title col-12 col-lg-6 ml-lg-3">${this.data.mainTitle}</h2>
        <p class="text-grey center col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2">${this.data.text}</p>
        <div class="row faqList"></div>
        <div>`;

        const parentDOM = this.DOM.querySelectorAll('.row');
        console.log(parentDOM);
        let HTML = '';
        for (const item of this.data.list) {
            HTML += `<div class="faqItem col-12 col-md-6">
            <p class="faq">${item.title}</p>
            <p class="text-grey"> ${item.text}</p>
            </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}
export { Faq }
