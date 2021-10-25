function init() {
    var images = document.querySelectorAll("div.thumbnails img")
    for(var i = 0; i < images.length; i++)
        images[i].onclick = function() {
            var path = this.src
            var img = document.getElementById("mainImg")
            img.setAttribute("src", path) 
        }
    var n = 1;
 
    document.getElementById("btn1").onclick = function(){
        if(n>1){
            n = n - 1
            document.getElementById("number").placeholder = n
        }
    }
        
    document.getElementById("btn2").onclick = function(){
            document.getElementById("number").placeholder = n+1
            n=n+1
    }

    var selectsize=document.querySelectorAll("div.select-swap-size .size")
    for(var i=0;i<selectsize.length;i++)
    selectsize[i].onclick=function() {
    this.setAttribute("style","background-color: rgb(223, 223, 129)")
    }

    var selectcolor=document.querySelectorAll("div.select-swap-color img")
    for(var i=0;i<selectcolor.length;i++)
    selectcolor[i].onclick=function() {
    this.setAttribute("style","border: 3px solid orange")
    }
}

window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backTop").style.display = "block";
        } else {
            document.getElementById("backTop").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


