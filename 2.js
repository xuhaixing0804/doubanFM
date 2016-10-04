(function(){
var tupian = document.getElementById("img_tupian");
var text_1 = document.getElementsByClassName("left_text_1")[0];
var text_2 = document.getElementsByClassName("left_text_2")[0];
var text_3 = document.getElementsByClassName("left_text_3")[0];
function c(){
if(tupian.src.match("tu1.jpg")){
  tupian.src = "images/tu2.jpg";
  text_1.innerHTML = "Almost Lover 系MHz";
  text_2.innerHTML = "为你推荐与 A Fine Frenzy - Almost Lover 相似的歌曲";
  text_3.innerHTML = "兆赫详情";
} else if(tupian.src.match("tu2.jpg")){
  tupian.src = "images/tu3.jpg";
  text_1.innerHTML = "Love Pardise(英) 系MHz";
  text_2.innerHTML = "为你推荐与 陈慧琳 - Love Pardise(英) 相似的歌曲";
  text_3.innerHTML = "兆赫详情";
} else if(tupian.src.match("tu3.jpg")){
  tupian.src = "images/tu4.jpg";
  text_1.innerHTML = " Need You Now 系MHz";
  text_2.innerHTML = "为你推荐与 Adele - Need You Now (Live at CMT Artists of the Year Awards) 相似的歌曲";
  text_3.innerHTML = "兆赫详情";
} else if(tupian.src.match("tu4.jpg")){
  tupian.src = "images/tu5.jpg";
  text_1.innerHTML = "时间煮雨 系MHz";
  text_2.innerHTML = "为你推荐与 郁可唯 - 时间煮雨 相似的歌曲";
  text_3.innerHTML = "兆赫详情";
} else if(tupian.src.match("tu5.jpg")){
  tupian.src = "images/tu6.jpg";
  text_1.innerHTML = "SK-II 最初的梦MHz";
  text_2.innerHTML = "热门歌曲：夜空中最亮的星 / 最初的梦想（Cover 范玮琪） / 一万次悲伤";
  text_3.innerHTML = "50首歌曲 兆赫详情";
} else if(tupian.src.match("tu6.jpg")){
  tupian.src = "images/tu1.jpg";
  text_1.innerHTML = "舒缓MHz";
  text_2.innerHTML = "心情舒缓的时候听什么";
  text_3.innerHTML = "热门歌曲：You're Beautiful / You Are My Sunshine / Scream & Shout (Feat. Britney Spears)<br>兆赫详情";
} 
}
 setInterval(c,1000);


  
}(window))