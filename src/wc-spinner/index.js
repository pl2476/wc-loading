import Vue from 'vue'
import SpinnerComponent from './SpinnerComponent'

let instance;

let SpinnerConstructor = Vue.extend(SpinnerComponent);

let initInstance = () => {
	instance = new SpinnerConstructor({
		el: document.createElement('div'),
		data: {
			show: false // 之所以在这里定义, 为了方便模板的定义
		}
	});
	document.body.appendChild(instance.$el);
}

let Spinner = {
	start () {
		if (!instance) {
			initInstance();
		}
		instance.show = true;
	},
	stop () {
		instance.show = false;
	}
}

export default {
	install (Vue, options={}) {
		Vue.prototype.$spinner = Spinner;
	}
}