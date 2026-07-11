class Slider {
    #sliderContainerWidth = null;
    #sliderContainer = null;
    #slideWidth = null;
    #sliderRotationInterval = null;
    #sliderImages = null; 

    #track = null;
    #slides = null;
    #prevButton = null;
    #nextButton = null;
    #dotsContainer = null;
    #dots = null;

    #currentSlideIndex = null;
    #totalSlides = null;
    #timer = null;

    #play = null;
    #stop = null;
    #slider = null;

    // Mobile
    #startX = 0;
    #isMoving = false;

    // Flags
    #isRotating = false;
    #wasRotating = false;

    #sliderDelta = 240;

    #resizeTimer = null
    #ratio = 2.66;

    constructor(options = {}) {
        this.#sliderContainer = document.getElementById(options.sliderContainer);
        this.#sliderContainerWidth = options.sliderContainerWidth;
        this.slideWidth = options.slideWidth;
        this.#sliderRotationInterval = options.sliderRotationInterval;

        this.#slider = document.getElementById(options.slider);
        this.#track = document.getElementById(options.track);
        this.#slides = document.querySelectorAll(options.slides);
        this.#prevButton = document.getElementById(options.prevButton);
        this.#nextButton = document.getElementById(options.nextButton);
        this.#dotsContainer = document.getElementById(options.dotsContainer);
        this.#play = document.getElementById(options.play);
        this.#stop = document.getElementById(options.stop);
        this.#sliderImages = this.#slider.querySelectorAll('img');
        
        this.#currentSlideIndex = options.currentSlideIndex;
        this.#totalSlides = this.#slides.length;

        this.#initDots();
        this.#attachEventListener();
        this.#updateDots(this.#currentSlideIndex);
        this.startRotation();
        this.#setSliderDimensions(this.#sliderContainerWidth);
        this.#keyEventListener();
        this.#controlEventListener();

        //mobile
        this.#attacTouchEventListener();
    }

    startRotation() {
        this.#timer = setInterval(() => this.#nextSlide(), this.#sliderRotationInterval);
        this.#isRotating = true;
    }

    stopRotation() {
        if (this.#timer) {
            clearInterval(this.#timer);
            this.#timer = null;
            this.#isRotating = false;
        }
    }

    #setSliderDimensions(basicWidth) {


        this.#sliderContainer.style.width = basicWidth + 'px';
        this.#slider.style.width = basicWidth - this.#sliderDelta + 'px';
        this.#slider.style.height = (basicWidth - this.#sliderDelta) / this.#ratio + 'px'
        this.#slideWidth = basicWidth - this.#sliderDelta;

        this.#sliderImages.forEach(image => {
            image.style.width  = (basicWidth - this.#sliderDelta) + 'px';
            image.style.height = (basicWidth - this.#sliderDelta) / this.#ratio + 'px';
        });

        this.#showSlide(this.#currentSlideIndex)
    }

    #stopToPlay() {
        this.#play.classList.add('active');
        this.#stop.classList.remove('active');
    }

    #playToStop() {
        this.#stop.classList.add('active');
        this.#play.classList.remove('active');
    }

    #nextSlide () {
        this.#currentSlideIndex = this.#currentSlideIndex >= this.#totalSlides - 1 
        ? 0 
        : ++this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #showSlide(idx) {
        this.#track.style.transform = 
        `translateX(-${idx * this.#slideWidth}px)`;
        this.#updateDots(idx);
        this.#currentSlideIndex = idx;
    }

    #prevSlide() {
        this.#currentSlideIndex = this.#currentSlideIndex <= 0 
        ? this.#totalSlides - 1
        : --this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #initDots() {
        this.#slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            this.#dotsContainer.append(dot);

            dot.addEventListener('click', () => {
                this.#showSlide(index);
            });
        });

        this.#dots = document.querySelectorAll('.dot');
    }

    #updateDots(idx) {
        this.#dots.forEach(dot => dot.classList.remove('active'));
        this.#dots[idx].classList.add('active');  
    }

    #attachEventListener() {
        this.#nextButton.addEventListener('click', () => this.#nextSlide())
        this.#prevButton.addEventListener('click', () => this.#prevSlide())

        this.#slider.addEventListener(
            'mouseover', () => {
                this.#wasRotating = this.#isRotating;
                if ( this.#wasRotating === true ) {
                    this.stopRotation();
                    this.#playToStop();
                }
            }
        )

        this.#slider.addEventListener(
            'mouseout', () => {
                if ( this.#wasRotating === true ) {
                    this.startRotation();
                    this.#stopToPlay();
                } else {
                    return;
                }
            }

        )

        window.addEventListener('resize', (event) => {
            clearTimeout(this.#resizeTimer);

            this.#resizeTimer = setTimeout(() => {

                this.#setSliderDimensions(event.target.innerWidth)
            }, 500)
        })
    }

    #attacTouchEventListener() {
        this.#track.addEventListener('touchstart', (event) => {

            if (event.touches > 1) {
                return;
            }

            this.#startX = event.touches[0].clientX;
            this.#isMoving = true;
        });

        this.#track.addEventListener('touchmove', (event) => {
            const dx = event.touches[0].clientX - this.#startX;

            this.#track.style.transform = `translateX(${-this.#currentSlideIndex * this.#slideWidth + dx}px)`;
        });

        this.#track.addEventListener('touchend', (event) => {
            if (!this.#isMoving) return;
            this.#isMoving = false;

            const endX = event.changedTouches[0].clientX;
            const dx = endX - this.#startX;

            if (dx > 200) {
                this.#prevSlide();
            } else if (dx < -200) {
                this.#nextSlide();
            } else {
                this.#showSlide(this.#currentSlideIndex);
            }
        });
    }

    #keyEventListener() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.#prevSlide();
            } else if (event.key === 'ArrowRight') {
                this.#nextSlide();
            }
        });
    }

    #controlEventListener() {
        
    this.#play.classList.add('active')

        this.#play.addEventListener('click', () => {
            if (this.#isRotating === false) {
                this.#stopToPlay();
                this.startRotation();
            }
        })
            
        this.#stop.addEventListener('click', () => {
            if (this.#isRotating === true) {
                this.#playToStop();
                this.stopRotation();
            }
        })
    }
}

const slider = new Slider({
    sliderContainerWidth: 1200,
    sliderContainer: 'slider-container',
    slideWidth: 960,
    sliderRotationInterval: 1000,
    track: 'slider-track',
    slides: '.slide',
    slider: 'slider',
    prevButton: 'prev',
    nextButton: 'next',
    play: 'play',
    stop: 'stop',
    dotsContainer: 'dots',
    currentSlideIndex: 0,
    // totallSlides: 'slides.lenght',

});
