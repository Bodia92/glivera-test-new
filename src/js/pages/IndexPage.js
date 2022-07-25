import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import postSectionInit from '../components/postSectionInit';
import postListInit from '../components/postListInit';
import burgerMenu from '../components/burgerMenu';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		postSectionInit();
		postListInit();
		burgerMenu();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
