function make_tweet_link(count){
	var base_url = 'https://twitter.com/intent/tweet';
	var text = '�����[��{�^����' + count + '�����[�񂵂܂���';
	var url = 'https://kaibasira.github.io/MomonButton/';
	var via = '�����[��{�^��';
	var hashtags = '�����[��';
	
	var tweet_link = '<a href="' + base_url +
		'?text=' + encodeURIComponent(text) +
		'&url=' + url +
		'&via=' + encodeURIComponent(via) + 
		'&hashtags=' + encodeURIComponent(hashtags) +
		'" target="_blank">���[�Ƃ���</a>';
		
	document.getElementById('momon_tweet_link').innerHTML = tweet_link;
}

window.onload = function(){
	var momon_count = 0;	
	document.getElementById('momon_button').onclick = function(){
		momon_count++;
		document.getElementById('momon_count').innerHTML = momon_count + '�����[��';
		make_tweet_link(momon_count);
	}
}