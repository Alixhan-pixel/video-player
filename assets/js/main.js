// console.log('hello');
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-filled');
const toggle = document.querySelector('.toggle');
const skipBtns = document.querySelectorAll('[data-skip]');
const range = document.querySelectorAll('.player-slider');

// working play btn toggle play and pause
toggle.addEventListener('click', function(){ 
    if(video.paused){
        video.play();
        toggle.innerHTML = '<i class="fa fa-pause"></i>';
    }else{
        video.pause();
        toggle.innerHTML = '<i class="fa fa-play"></i>';
    }
});
// making clickable video interface
video.addEventListener('click', function(){
    if(video.paused){
        video.play();
        toggle.innerHTML = '<i class="fa fa-pause"></i>';
    }else{
        video.pause();
        toggle.innerHTML = '<i class="fa fa-play"></i>';
    }
});

//Now i am going to handle skip buttons
skipBtns.forEach(button => button.addEventListener('click', function(){
    console.log('woeking');
    video.currentTime +=  parseFloat(this.dataset.skip);
}));

//now i am going to build a function for volume up and down && for Fast and Slow
range.forEach(range => range.addEventListener('change', function(){
    video[this.name] =  this.value;
}));
//now its time for filling bar and change video skip from there
