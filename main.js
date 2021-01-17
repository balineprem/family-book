family_pics= [

    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkthONp-rr8mgBn17E6atAxWSGzA3lGlwmnw&usqp=CAU

    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygmlMHKCoNI4STOMaSildBsYkE-R6GpMPCA&usqp=CAU

    https://c8.alamy.com/comp/JA0RRW/woman-cartoon-character-young-girl-casual-vector-illustration-JA0RRW.jpg

    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShzD13B_U1LBRrh-qFF9BHr7BZlVoKLiZIw&usqp=CAU
]

var i=0;

function NextImage{
    if(i==3)
    {
    i=0;  
    }  
    document.getElementById("family_pics").src=images[i];
  i++;
  }
    

