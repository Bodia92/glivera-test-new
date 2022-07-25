import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import postSectionInit from '../components/postSectionInit';
import postListInit from '../components/postListInit';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		postSectionInit();
		postListInit();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
