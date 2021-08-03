function NewSlider() {
    // property
    this.imgArray = [];
    this.numberImage = 0;
    this.prevBtn = null;
    this.nextBtn = null;
    this.imageChange = null;

    // methods

    this.start = function(elId) {

        let that = this;
        let elSelector = ('#' + elId);
        let el = document.querySelector(elSelector);
        
        this.prevBtn = el.querySelector('.prevBtn');
        this.nextBtn = el.querySelector('.nextBtn');
        this.imageChange = el.querySelector('.image');

        this.imgArray.push('https://w-dog.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-kot-morda-vzglyad.jpg');
        this.imgArray.push('https://proprikol.ru/wp-content/uploads/2020/12/kartinki-ryzhih-kotov-1.jpg');
        this.imgArray.push('https://w-dog.ru/wallpapers/5/16/366565424945900/kot-seryj-morda-vzglyad-priroda.jpg');


        this.imageChange.src = this.imgArray[this.numberImage];

        this.prevBtn.addEventListener('click', function(e){
            that.onPrevBtn(e)
        });
        this.nextBtn.addEventListener('click', function(e){
            that.onNextBtn(e)
        });

        this.prevBtn.disabled = true;
    }

    this.onPrevBtn = function() {
        this.numberImage--;
        this.imageChange.src = this.imgArray[this.numberImage];
        this.nextBtn.disabled = false;

        if (this.numberImage === 0){this.prevBtn.disabled = true};

    };

    this.onNextBtn = function() {
        this.numberImage++;
        this.imageChange.src = this.imgArray[this.numberImage];
        this.prevBtn.disabled = false;

        if (this.numberImage === this.imgArray.length - 1){this.nextBtn.disabled = true};

    }
}

let imageChange = document.querySelector('.image');

function addImage(){
    // let srcImg = null;
    let imageChangeContent = imageChange.outerHTML;
    imageChange.outerHTML = `${imageChangeContent}<img src="{srcImg}" alt="" class="image">`;
}




addImage()