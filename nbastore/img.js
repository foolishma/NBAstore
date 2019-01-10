define(['jquery'],function($){
	function img(){
		var oSelect = document.getElementById('select_img');
		for(var i = 1; i < 16; i++){
			var oA = document.createElement('a');
			var oImg = document.createElement('img');
			oImg.src = 'images/east_' + i + '.png';
			oA.href='#';
			oA.appendChild(oImg);
			oSelect.appendChild(oA);
		}
		
	}

	function img1(){
		var oSelect2 = document.getElementById('select_img2');
		for(var i = 1; i < 16; i++){
			var oA = document.createElement('a');
			var oImg = document.createElement('img');
			oImg.src = 'images/west_' + i + '.png';
			oA.href='#';
			oA.appendChild(oImg);
			oSelect2.appendChild(oA);
		}
		
	}

	function navLoad(){
		$.ajax({
			type : 'GET',
			url : 'data/data.json',
			success : function(arr){

				//一级导航栏循环创建a标签并插入到页面上
				var str = '';
				for(var i = 0; i < arr.length; i++){
					str += '<p class=p1><a href=# id=a>' + arr[i].title + '</a></p>';
					$("#nav_ul").html(str);

				}

				$("<ul></ul>").addClass("ul2").appendTo("#nav_ul");

				for(var i = 0; i < arr.data.length; i++){

					$(`<li><a>${arr.data[i]}</a></li>`).appendTo($("#nav_ul .ul2"));
				}

			},
			error : function(msg){
				alert(msg)
			}

			
		})

		$("#nav ul").on('mouseenter','#nav_ul p1 #a',function(){
			//判断是否有data数据,有则加载下拉菜单，没有则不加载
		})
	}

	
	return {
		img: img,
		img1: img1,
		navLoad : navLoad
	}
})

