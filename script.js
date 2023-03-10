//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");


window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                switch( gallery[ newIndex ].querySelector( "img" ).id) {
                    case 'img1': previewImg.src = './gifs/mm1.gif';
                        break;
                    case 'img2': previewImg.src = './gifs/mm2.gif';
                        break;
                    case 'img5': previewImg.src = './gifs/mm5.gif';
                        break;
                    case 'img6': previewImg.src = './gifs/mm6.gif';
                        break;
                    case 'img15': previewImg.src = './gifs/mm15.gif';
                        break;
                    case 'img16': previewImg.src = './gifs/mm16.gif';
                        break;
                    case 'img19': previewImg.src = './gifs/mm19.gif';
                        break;
                    case 'img20': previewImg.src = './gifs/mm20.gif';
                        break;
                    case 'img24': previewImg.src = './gifs/mm24.gif';
                        break;
                    case 'img34': previewImg.src = './gifs/mm34.gif';
                        break;
                    case 'img39': previewImg.src = './gifs/mm39.gif';
                        break;
                    case 'img38': previewImg.src = './gifs/mm38.gif';
                        break;
                    case 'img69': previewImg.src = './gifs/mm69.gif';
                        break;
                    case 'img92': previewImg.src = './gifs/mm92.gif';
                        break;
                    case 'img91': previewImg.src = './gifs/mm91.gif';
                        break;
                }

                // previewImg.src = imageURL; //passing user clicked img url in previewImg src
                // }
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
    
}
