/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import Menubar from 'primevue/menubar';

// Import PrimeVue new theme
import Aura from '@primeuix/themes/lara';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			prefix: 'p',
			darkModeSelector: 'system',
			cssLayer: false,
		},
	},
});
app.component('Card', Card);
app.component('Button', Button);
app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);
app.component('Menubar', Menubar);

app.mount('#app');
