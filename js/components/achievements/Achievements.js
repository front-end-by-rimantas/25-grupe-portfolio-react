class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }
    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius');
            return false;
            console.log(this.selector);
        }
        if (!this.isValidData()) {
            console.error('ERROR: nevalidus duomenys');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error("EROOR: nepavyko rasti elemento pagal nurodyta selektoriu");
            return false;
        }
        this.DOM = DOM;

        this.render();
        this.addEvents();
    }
    isValidSelector() {
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
    isValidData() {
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
    render() {
        const rowDOM = this.DOM.querySelector('.row');
        this.rowDOM = rowDOM;
        let HTML = '';

        for (const item of this.data.list) {
            HTML += `<div class="achievements-item ">
                <div class="number-line">
                    <span class="rising-number">0</span>
                    <span> ${item.title}</span>
                    </div>
                <p class="center">${item.subtitle}</p>
            </div>`;
        }
        rowDOM.innerHTML = HTML;
    }
    addEvents() {
        addEventListener('scroll', () => {
            const allNumbersDOM = this.rowDOM.querySelectorAll('.rising-number');

            for (let i = 0; i < allNumbersDOM.length; i++) {
                const numberDOM = allNumbersDOM[i];
                const elementTop = numberDOM.offsetTop;
                const elementHeight = numberDOM.clientHeight;

                const isVisible = scrollY + innerHeight >= elementTop + elementHeight;
                if (isVisible) {
                    this.animateNumber(numberDOM, i);
                }
            }
        })
    }
    animateNumber(elementDOM, elementIndex) {
        if (this.data.list[elementIndex].animated !== true) {
            const targetNumber = this.data.list[elementIndex].value;
            this.data.list[elementIndex].animated = true;

            const timeToAnimate = 1500;
            const fps = 30;
            const framesCount = timeToAnimate * fps / 1000;
            const numberIncrement = targetNumber / framesCount;
            let currentFrameIndex = 0;
            let printedValue = 0;

            const timer = setInterval(() => {
                printedValue += numberIncrement;
                currentFrameIndex++;
                elementDOM.innerText = Math.round(printedValue);

                if (currentFrameIndex === framesCount) {
                    clearInterval(timer);
                }
            }, 1000 / fps)

        }

    }
}
export { Achievements }