import Vue from 'vue'
// import SpinnerComponent from './SpinnerWithMaskComponent'
import SpinnerComponent from './SpinnerComponent'
import merge from './utils/merge'

let instance;

let SpinnerConstructor = Vue.extend(SpinnerComponent);

let initInstance = () => {
	instance = new SpinnerConstructor({
		el: document.createElement('div')
	});
	document.body.appendChild(instance.$el);
}

let Spinner = {
	start (content, options={}) {
		if (!instance) {
			initInstance();
		}
		options.content = content;
		merge(instance.$data, options);
		instance.showSpinner = true;
	},
	stop () {
		instance.showSpinner = false;
	}
}

export default {
	install (Vue, options={}) {
		Vue.prototype.$spinner = Spinner;
	}
}