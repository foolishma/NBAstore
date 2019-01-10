define(['jquery'],function($){
	function banner(){
		$.ajax({
			type:'get',
			url:'data/data_banner.json',
			success : function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<a href="#">
	               		<img src="${arr[i].img}" alt="">
	           		</a>`).appendTo('.banner_img');
	           		$(`<div id='circle'></div>`).appendTo($('.div_circle'));
				}

				//初始化变量
				var i = 0;
			    var imgNum = $('.banner_img a').length;
			    var ballStyle = function(point){
			         $('.div_circle div').eq(point).addClass('active').siblings().removeClass('active');
			    }

			    //第一个小圆点加样式
			    $('.div_circle div').first().addClass('active');

			    //给第一张图片添加样式
			    $('.banner_img a').first().css('display','block');

			    //点击原点切换
			    $('.div_circle div').click(function(){
			        var index = $(this).index();
			        $('.banner_img a').eq(index).fadeIn(800).siblings().fadeOut(800);
			        i = index;
			        ballStyle(i);
			    });

			    //定时函数
			    function timeing(){
			        i++;
			        if(i > imgNum){
			            i = 0;
			        }
			        $('.banner_img a').eq(i).fadeIn(800).siblings().fadeOut(800);
			        ballStyle(i);
			    }

			    timer = setInterval(timeing,2000);

			    $('.banner').mouseenter(function(){
			    	clearInterval(timer);
			    })

			     $('.banner').mouseleave(function(){
			     	clearInterval(timer);
			    	timer = setInterval(timeing,2000)
			    })
			    
			},
			error : function(msg){
				alert(msg);
			}
		})
		
	}
	

	
	return {
		banner : banner
	}
})