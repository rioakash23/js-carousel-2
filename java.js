var carousel=document.querySelector("img");
var image=["image/green_mountain_nature_wallpaper_hd.webp","image/th (1).jpg","image/th.jpg", ]
var num=3;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=image.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=image[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=image[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=image.length-1;
        carousel.src=image[num]
            }
            else{
              carousel.src=image[num]
            }

};