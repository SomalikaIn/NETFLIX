<template>
    <div class = "container-fluid pt-5">
      <Carousel/>
    </div>
    <div class = "container-fluid pt-3 pb-5">
          <div class = "box pt-4">
            <!-- row 1 -->
              <div class = "row pb-3">
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/chainsaw.webp">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/chainsaw.webp">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/chainsaw.webp">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/chainsaw.webp">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
              </div>
              <!-- row 2 -->
              <div class = "row pb-3">
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
              </div>
  
              <!-- row 3 -->
                <div class = "row pb-3">
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
                  <div class = "col-3">
                      <img class = "img-fluid" src = "@/assets/myname.jpg">
                      <a href = ""><button class = "btn-play" type = "button"><i class = "fa-solid fa-play"></i></button></a>
                  </div>
              </div>
            </div>
          </div>
  </template>
    
    <script>
    import Carousel from '@/components/Carousel.vue'
    
    export default {
      name: 'App',
      components: {
        Carousel,
      }
    }
    </script>
  
  <style scoped>
  .container-fluid{
      justify-content: center;
      background-color: black;
  }
  
  .img-fluid {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 12px 4px rgba(78, 78, 78, 0.433);
  }
  
  .col-3:hover .img-fluid{
      opacity: 0.5;
  }
  .btn-play {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-size: 50px;
    background-color:transparent;
    border: none;
    color: white;
  }
  .col-3:hover .btn-play {
    opacity: 1;
  }
  </style>
    
    

