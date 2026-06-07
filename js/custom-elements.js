var bioStyleSheets = `
    .bio-link {
    	text-decoration: none;
	    background-image: linear-gradient(currentColor, currentColor);
	    background-position: 0% 100%;
	    background-repeat: no-repeat;
	    background-size: 0% 1px;
	    transition: background-size .3s;
    	color: #010101;
    }
    .bio-link:hover {
    	background-size: 100% 1px;
    }
    span {
    	cursor: initial;
    }
    `;
var allClasses = 'bio-link';
var allTargets = '_blank';

class ChristinaHarrington extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});;
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var christinaLink = document.createElement('a');
		christinaLink.setAttribute('href', 'https://www.christinaharrington.me');
		christinaLink.setAttribute('class', allClasses);
		christinaLink.setAttribute('target', allTargets);
		var christinaText = document.createTextNode('Designer and qualitative researcher passionate about health and racial equity');
		christinaLink.appendChild(christinaText);
		wrapper.appendChild(christinaLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('christina-harrington', ChristinaHarrington);

class JasonKillinger extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var jasonLink = document.createElement('a');
		jasonLink.setAttribute('href', 'https://jasonkillinger.com');
		jasonLink.setAttribute('class', allClasses);
		jasonLink.setAttribute('target', allTargets);
		var jasonText = document.createTextNode('Jason Killinger creates visual languages to help organizations communicate the meaningfulness of their work');
		jasonLink.appendChild(jasonText);
		wrapper.appendChild(jasonLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('jason-killinger', JasonKillinger);

class NicoleRodill extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var nicoleLink = document.createElement('a');
		nicoleLink.setAttribute('href', 'https://www.instagram.com/smithnpacific/');
		nicoleLink.setAttribute('class', allClasses);
		nicoleLink.setAttribute('target', allTargets);
		var nicoleText = document.createTextNode('Trend forecaster, Boriqua Taino, rabble rouser, granddaughter of OG Brujas');
		nicoleLink.appendChild(nicoleText);
		wrapper.appendChild(nicoleLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('nicole-rodill', NicoleRodill);

class JeanneLaika extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var jeanneSpan = document.createElement('span');
		var jeanneText = document.createTextNode('Queer anarchist parent who enjoys dirt & punk');
		jeanneSpan.appendChild(jeanneText);
		wrapper.appendChild(jeanneSpan);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('jeanne-laika', JeanneLaika);

class FawziyyaHeart extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var fawziyyaLink = document.createElement('a');
		fawziyyaLink.setAttribute('href', 'https://www.fawziyyaheart.com');
		fawziyyaLink.setAttribute('class', allClasses);
		fawziyyaLink.setAttribute('target', allTargets);
		var fawziyyaText = document.createTextNode('Philly native singer/songwriter');
		fawziyyaLink.appendChild(fawziyyaText);
		wrapper.appendChild(fawziyyaLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('fawziyya-heart', FawziyyaHeart);

class SameerSoleja extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var sameerSpan = document.createElement('span');
		var sameerText = document.createTextNode('Energy Tech entrepreneur');
		sameerSpan.appendChild(sameerText);
		wrapper.appendChild(sameerSpan);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('sameer-soleja', SameerSoleja);

class ValerieFrolova extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var valerieLink = document.createElement('a');
		valerieLink.setAttribute('href', 'https://www.aware-house.com');
		valerieLink.setAttribute('class', allClasses);
		valerieLink.setAttribute('target', allTargets);
		var valerieText = document.createTextNode('Valerie is an environmentalist with passion for sustainable living and design');
		valerieLink.appendChild(valerieText);
		wrapper.appendChild(valerieLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('valerie-frolova', ValerieFrolova);

class MarionLeary extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var marionSpan = document.createElement('span');
		var marionText = document.createTextNode('Marion Leary is a nurse, public health practitioner, and activist');
		marionSpan.appendChild(marionText);
		wrapper.appendChild(marionSpan);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('marion-leary', MarionLeary);

class KimiaPourrezaei extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var kimiaLink = document.createElement('a');
		kimiaLink.setAttribute('href', 'https://www.instagram.com/the___kp/');
		kimiaLink.setAttribute('class', allClasses);
		kimiaLink.setAttribute('target', allTargets);
		var kimiaText = document.createTextNode('Kimia is an artist & psychiatrist with dilettante tendencies & polymath ambitions. She lives & works in NYC');
		kimiaLink.appendChild(kimiaText);
		wrapper.appendChild(kimiaLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('kimia-pourrezaei', KimiaPourrezaei);

class LaraDurback extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var laraLink = document.createElement('a');
		laraLink.setAttribute('href', 'https://www.instagram.com/undurbs/');
		laraLink.setAttribute('class', allClasses);
		laraLink.setAttribute('target', allTargets);
		var laraText = document.createTextNode('Poet & rollerskater & gardener & neighbor in Oakland on Chochenyo Ohlone land');
		laraLink.appendChild(laraText);
		wrapper.appendChild(laraLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('lara-durback', LaraDurback);

class SadieRedWing extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var sadieLink = document.createElement('a');
		sadieLink.setAttribute('href', 'https://www.sadieredwing.com/');
		sadieLink.setAttribute('class', allClasses);
		sadieLink.setAttribute('target', allTargets);
		var sadieText = document.createTextNode('Her Shawl Is Yellow | Indigenous Design Lakȟóta/Dakȟóta Educator | Wakpá šíca (Ft Pierre, SoDak) | American Indian College Fund');
		sadieLink.appendChild(sadieText);
		wrapper.appendChild(sadieLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('sadie-red-wing', SadieRedWing);

class KatieHincheyWise extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var sadieLink = document.createElement('a');
		sadieLink.setAttribute('href', 'http://bit.ly/khwlink');
		sadieLink.setAttribute('class', allClasses);
		sadieLink.setAttribute('target', allTargets);
		var sadieText = document.createTextNode('Katie Hinchey-Wise, MSc is a project & program operations expert, sociologist & data storyteller, lgbtq+ activist, and youth and care worker advocate.');
		sadieLink.appendChild(sadieText);
		wrapper.appendChild(sadieLink);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('katie-hinchey-wise', KatieHincheyWise);

class Anonymous extends HTMLElement {
  	constructor() {
	    super();
	    var shadow = this.attachShadow({mode: 'open'});
	    var wrapper = document.createElement('slot');
		var style = document.createElement('style');
		style.textContent = bioStyleSheets;

    	var anonSpan = document.createElement('span');
		var anonText = document.createTextNode('A few of the participants in this project chose to remain anonymous. Their quotes are aggregated here under a singular identity');
		anonSpan.appendChild(anonText);
		wrapper.appendChild(anonSpan);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  	};
};
customElements.define('anon-ymous', Anonymous);