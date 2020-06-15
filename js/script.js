$(function(){
	// 팝업창
	$("#pop span").click(function(){
		$("#pop").hide();
	});
	$("#header h1:nth-child(1)").click(function(){
		$("#pop").show();
	});
	
	//calendar
	var today = new Date();
	var date = new Date();
	var y = parseInt(date.getFullYear());	
	var m = parseInt(date.getMonth());
	var d = date.getDate();
	var yo = date.getDay();

	var theDate = new Date(y, m, 1);
	var theDay = theDate.getDay();

	var last=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];	
					
	if (y % 4 && y % 100 != 0 || y % 400 == 0) lastDate=last[1]=29;

	var lastDate=last[m];
	var row = Math.ceil((theDay + lastDate)/7);
	
	var calendar="<table border='1' width='470' height='350'>";
		calendar+="<tr>";
		calendar+="<th><font color='red'>일</font></th>";
		calendar+="<th>월</th>";
		calendar+="<th>화</th>";
		calendar+="<th>수</th>";
		calendar+="<th>목</th>";
		calendar+="<th>금</th>";
		calendar+="<th><font color='blue'>토</font></th>";
		calendar+="</tr>";
		var dNum=1;
	
	
	for(var i = 1; i <= row; i++) {	//행 생성 (tr 태그 생성)
		calendar+="<tr>";

		for(var k = 1; k <=7; k++) {	//열 생성 (td 태그 생성)
			if(i == 1 && k <= theDay || dNum > lastDate) {
				calendar+="<td> &nbsp; </td>";
			} else {
				if ( k == 1 ) {
					calendar+="<td align='center'>" + "<font color='red'>"+ dNum +"</font>"+ "</td>"; 
				} else if ( k == 7 ) {
					calendar+="<td align='center'>" + "<font color='blue'>"+ dNum +"</font>"+ "</td>"; 
				} else {
					calendar+="<td align='center'>" + dNum + "</td>"; 
				}
				dNum++;
			}
			if ( d==dNum ) {
				$(this).css({backgroundColor : "yellow"});
			}
		}
	}					
		calendar+="</tr>";	

	$(".cal").append(calendar);

	var yoil=['일', '월', '화', '수', '목', '금', '토'];
	
	if( (m+1)<10) {
	$(".txt>h1").text(y+"년 "+"0"+ (m+1) + "월");
	$(".txt>p").children("span").text(y + "." +"0"+ (m+1) + "."+ d +'('+ yoil[yo] +')');
	}
	
	$(".fas:nth-of-type(1)").click(function(){
 
	});
	$(".fas:nth-of-type(2)").click(function(){
	});
	
	//reservation
	$("#header h3").click(function(){
		$("#calendar").fadeToggle(200);
	});
	
	// gnb
	$("#gnb>li, #gnbBack").mouseover(function(){
		$("#gnb>li").children("ul").stop().slideDown();
		$("#gnbBack").stop().slideDown();
		
		var menuKo = [ '펜션전경', '객실안내', '부대시설', '서비스', '주변여행지', '교통안내', '실시간예약', '커뮤니티' ];
		$(".menu>a").each(function(aa){
			$(this).text(menuKo[aa]);
		});		
	});
	
	$("#gnb>li, #gnbBack").mouseout(function(){
		$("#gnb>li").children("ul").stop().slideUp();
		$("#gnbBack").stop().slideUp();
		
		var menuEn = [ 'LANDSCAPE', 'ROOMS', 'FACILITIES', 'SERVICE', 'TRAVEL', 'TRAFFIC', 'RESERVATION', 'COMMUNITY' ];
		$(".menu>a").each(function(aa){
			$(this).text(menuEn[aa]);
		});		
	});
	
	// top nav
	$("#top").click(function(){
		$("html, body").animate({ scrollTop:0 }, 500);
	});
	
	
	//special
	$(".service li").hover(
		function(){
			$(this).find('img').css({ opacity : '1' });
		},
		function(){
			$(this).find('img').css({ opacity : '0.7' });
		},		
	);
	
	// slide
	slide();
	
	function slide() { 

		var imgs = $('.slide');
		var icons= $('.icon li');
		var slideImg = $('.slide img');
		var iconStop = $('off');
		var max = slideImg.length-1;
		var current = 0;
		var auto;
		var autoPlay = true;  // 자동재생 
		var start = 0; // 시작설정 0부터 시작
		var interval = 4000; // 단위 1000/1초

		function show(num) {
			icons.eq(num).addClass('on');
			slideImg.eq(num).fadeIn(1500);
			} 
		
		function clear(num) { 
			icons.eq(num).removeClass('on'); 
			slideImg.eq(num).fadeOut(1500); 
		} 
			
		function next() { 
			var n = current; 
			if(n < max) {
				n++; 
			} else { 
				n = 0; 
			} 
				return n; 
		} 

		function play() { 
			icons.eq(next()).click(); 
		} 
		
		$(".slide > img:gt(0)").hide();
		slideImg.eq(start).fadeIn(1500);
		show(start);
		
		icons.eq(start).addClass('on'); 
		show(start);
				
		current = start; 

		if(autoPlay) { 
			auto = setInterval(play, interval);
			iconStop.addClass('on');
		}

		icons.hover( 
			function() { 
				if(autoPlay) { 
				clearInterval(auto); 
				} 
			}, 
			function() { 
				if(autoPlay) { 
				auto = setInterval(play, interval); 
				} 
			} 
		);
		
		icons.on('click', function(e){ 
			e.preventDefault(); 
			var idx = $(this).index(); 
			clear(current); 
			show(idx); 
			current = idx; 
		}); 		
	}
/*
	function slide(){
		var interval = 4000;

			$(".slide > img:gt(0)").hide();

			var timer;
			var container = $(".slide");
			var n=0;
			
			function slideImg(){
			  $('.slide> img:first')
				.fadeOut(1500)
				.next()
				.fadeIn(1500)
				.end()
				.appendTo('.slide');
				};

				function startTimer(){
					timer = setInterval(slideImg, interval);
				};

				function stopTimer(){
					clearInterval(timer);
				};
				
				$(".icon").find('img').hover(stopTimer, startTimer);
				
				startTimer();
	}
*/
/*		
	$(".slide > img:gt(0)").hide();
	var timer;
		timer = setInterval(function() { 
		  $('.slide> img:first')
			.fadeOut(1500)
			.next()
			.fadeIn(1500)
			.end()
			.appendTo('.slide');
		},  3000);	
/*

/*	
	var interval = 4000;
	
	$(".slide").each(function(){
		var timer;
		var container = $(this);
		
		function slideImg(){
			var imgs = container.find("img");
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			
			first.fadeOut(2000).appendTo(container);
			second.fadeIn(2000);
			};
			
			function startTimer(){
				timer = setInterval(slideImg, interval);
			};
			
			function stopTimer(){
				clearInterval(timer);
			};
			
			$(".icon").find('img').hover(stopTimer, startTimer);
			
			startTimer();
		});
*/

	
/*
	var n = 1;
	setInterval(function(){		
		$(".slide img").fadeOut(1000);
		n=n%3;
		$(".slide img").eq(n).fadeIn(2000);
		n++;
	}, 3000);
*/
});