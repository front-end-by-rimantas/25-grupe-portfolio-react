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
    // col-12 col-md-6
        let itemSection = '';
        for (const item of this.data.list) {
            itemSection += `<div class="faqItem ">
            <p class="faq">${item.title}</p>
            <p class="text-grey"> ${item.text}</p>
            </div>`;
        }

        const HTML = `<div class="row">
        <h2 class="title col-12 col-lg-6 ml-lg-3 col-xl-8 ml-xl-2">${this.data.mainTitle}</h2>
        <p class="faqSubtitle text-grey center col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2 hidden-sm">${this.data.text1}</p>
        <p class="faqSubtitle text-grey center col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2 hidden visible-sm">${this.data.text2}</p></div>
        <div class="row faqList">${itemSection}
        </div>
        <div class="row">
        <p class="center col-12 faqBottomLine">${this.data.bottomLine}<a href="${this.data.href}">${this.data.linkText}</a></div>
        `;

        this.DOM.innerHTML = HTML;
    }
}
export { Faq }
