let pathName = window.location.pathname.split('/'),
		url = pathName[pathName.length - 1].substring(0,pathName[pathName.length - 1].indexOf('.'));

function nav(){
	let defaults = {
		dom: {
			nav: document.querySelectorAll('.header-nav li')
		}
	},

	config,nav,

	renderAddClass,
	_init;

	nav = defaults.dom.nav;


	/**
	 * DOM元素添加class
	 * [renderAddClass description]
	 * @return {[type]} [description]
	 */
	renderAddClass = function(){
		Object.keys(nav).forEach(function(k){
			nav[k].className = nav[k].getAttribute('data-type') === url 
				? 'on text-center' 
				: 'text-center';		
		})
	};
	

	/**
	 * 初始化事件
	 * [_init description]
	 * @return {[type]} [description]
	 */
	_init = function(){
		renderAddClass()
	};

	_init();
}

function subNav(){
	let defaults = {
		dom: {
			subNav: document.querySelectorAll('.sub-nav li'),
			nav: document.querySelector('[data-type="install"]')
		}
	},
	dom,

	renderAddClass,
	_init;

	subNav = defaults.dom.subNav;
	nav = defaults.dom.nav;

	/**
	 * DOM元素添加class
	 * [renderAddClass description]
	 * @return {[type]} [description]
	 */
	renderAddClass = function(){
		if(subNav.length){
			nav.className = 'on text-center';
			Object.keys(subNav).forEach((i)=>{
				subNav[i].className = subNav[i].getAttribute('data-type') === url 
					? 'on' 
					: '';
			})
		}	
	};

	/**
	 * 初始化事件
	 * [_init description]
	 * @return {[type]} [description]
	 */
	_init = function(){
		renderAddClass();
	};

	_init();
}

nav();
subNav();

