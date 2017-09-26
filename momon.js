function make_tweet_link(count){
	var base_url = 'https://twitter.com/intent/tweet';
	var text = 'ももーんボタンで' + count + 'ももーんしました';
	var url = 'https://kaibasira.github.io/MomonButton/';
	var via = 'ももーんボタン';
	var hashtags = 'ももーん';
	
	var tweet_link = '<a href="' + base_url +
		'?text=' + encodeURIComponent(text) +
		'&url=' + url +
		'&via=' + encodeURIComponent(via) + 
		'&hashtags=' + encodeURIComponent(hashtags) +
		'" target="_blank">ついーとする</a>';
		
	document.getElementById('momon_tweet_link').innerHTML = tweet_link;
}

// render method for requestAnimationFrame
function draw_momon(){
	var canvas = document.getElementById('momon_canvas');
	var canvas_context = canvas.getContext('2d');
	var canvas_width = canvas.width;
	var canvas_height = canvas.height;
	var time_elapsed = 0;
	
	function render_starting(){
		canvas_context.clearRect(0, 0, canvas_width, canvas_height);
		canvas_context.beginPath();
		
		var pos = canvas_height - (canvas_height / 2) * 0.12 * time_elapsed;
		
		canvas_context.font = "12px 'メイリオ'";
		canvas_context.textAlign = 'center';
		canvas_context.strokeStyle = "rgb(255,128,255)";
		canvas_context.strokeText("も", canvas_width / 2, pos);
		
		if( pos < canvas_height / 2){
			time_elapsed = 0;
			window.requestAnimationFrame(render_momon);
		}else{
			time_elapsed++;
			window.requestAnimationFrame(render_starting);
		}
	}
	
	function render_momon(){
		canvas_context.clearRect(0, 0, canvas_width, canvas_height);
		canvas_context.beginPath();
		
		// draw ももーん
		var alpha_blend = 1.0 - time_elapsed * 0.012;
		var g = Math.round(0 + 128 * (1.0 - alpha_blend)); // 最終的にピンクに変化させるための細工
		var b = Math.round(0 + 255 * (1.0 - alpha_blend)); 
		
		canvas_context.font = "39px 'メイリオ'";
		canvas_context.textAlign = 'center';
		canvas_context.strokeStyle = "rgba(255, " + g + ","+ b + ","+ alpha_blend +")";
		canvas_context.strokeText("ももーん", canvas_width / 2, canvas_height / 2 + time_elapsed * 0.145);
		
		time_elapsed++;
		if( alpha_blend < 0.0 ){} // unlessほしい
		else{
			window.requestAnimationFrame(render_momon);
		}
	}
	
	window.requestAnimationFrame(render_starting);
}

window.onload = function(){
	var momon_count = 0;	
	document.getElementById('momon_button').onclick = function(){
		momon_count++;
		document.getElementById('momon_count').innerHTML = momon_count + 'ももーん';
		make_tweet_link(momon_count);
		
		if( momon_count % 145 == 0 ){
			draw_momon();
		}
	}
}