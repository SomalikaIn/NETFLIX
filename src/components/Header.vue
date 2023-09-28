<template>
     <div class = "header">
        <div class = "text-content">
            <img class = "title" src = "@/assets/video-logo.webp">
            <p>
                After discovering his entranged daughter's link to mysterious <br>
                murders,a forensic detective and Asperger's syndrome risks <br>
                everything to solve the case.
            </p>
        </div>
        <video autoplay muted loop class = "header-video">
            <source src = "@/assets/video.mp4">
        </video>
        <form class="btn-header">
                <a class = "btn" href = "https://www.imdb.com/title/tt12079212/">
                    <button class="btn-play" type="button">
                        <span class = "icon-play"><i class="fa-solid fa-play"></i></span>
                        <span class = "txt-play">Play</span>
                    </button>
                </a>
                <router-link class = "btn" to = "/detail">
                    <button class="btn-more" type="button">
                        <span class = "icon-more"><i class="fa-solid fa-circle-info"></i></span>
                        <span class = "txt-more">More Info</span>
                    </button>
            </router-link>
                <!-- <a class = "btn" href = "#">
                    <button class="btn-more" type="button">
                        <span class = "icon-more"><i class="fa-solid fa-circle-info"></i></span>
                        <span class = "txt-more">More Info</span>
                    </button>
                </a> -->
        </form>
    </div>
</template>
<style scoped>
*{
    margin:0; 
    padding: 0;
    box-sizing: border-box;
}
.header-video{
    width:100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    left: 0%;
    top: 0%;
    z-index: -1;
}
.header{
    position:relative;
    text-align: left;
    margin: auto;
    padding: 160px 50px;
}
.title{
    width: 500px;
    padding-bottom: 20px;
}
p{
    padding-bottom: 20px;
    color: white;
}
.btn .btn-play,
.btn-more{
    padding: 5px 30px;
    background-color: white;
    border-radius: 5px;
    margin-right: 5px;
    border: none;
}
.icon-play,
.icon-more{
    font-size: 25px;
    padding-right: 10px;
}
.txt-play ,
.txt-more{
    font-weight:bold;
    font-size: 17px;
    transform: translateY(-10%);
    display: inline-flex;
}





</style>