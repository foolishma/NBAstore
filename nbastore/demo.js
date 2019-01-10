require.config({
	paths:{
		img: 'img',
		jquery : 'jquery-1.11.3',
		'jquery-cookie' : 'jquery-cookie',
		parabola : 'parabola',
		banner : 'banner'
	},shim: {
		"jquery-cookie": ['jquery'],
		//声明一下，不是AMD规范的模块
		"parabola": {
			exports: "_"
		}
	}
})

require(['img','banner'],function(img,banner){
	img.img();
	img.img1();
	img.navLoad();
	banner.banner()
})