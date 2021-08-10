function slider({
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    const slides = document.querySelectorAll(slide),
        currentSlide = document.querySelector(currentCounter),
        totalSlide = document.querySelector(totalCounter),
        prevSlide = document.querySelector(prevArrow),
        nextSlide = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        slideWidth = window.getComputedStyle(slidesWrapper).width,
        maxSlideWidth = +slideWidth.replace(/\D/g, '') * (slides.length - 1),
        minSlideWidth = +slideWidth.replace(/\D/g, '');

    let slideOffset = 0;
    let currentIndex = 1;

    if (slides.length < 10) {
        totalSlide.textContent = `0${slides.length}`;
        currentSlide.textContent = `0${currentIndex}`;
    } else {
        totalSlide.textContent = slides.length;
        currentSlide.textContent = currentIndex;
    }

    slidesField.style.width = `${100 * slides.length}%`;
    slidesField.style.display = `flex`;
    slidesField.style.transition = `0.5s all`;


    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = slideWidth;
    });

    nextSlide.addEventListener('click', () => {
        if (slideOffset == maxSlideWidth) {
            slideOffset = 0;
        } else {
            slideOffset += minSlideWidth;
        }

        if (currentIndex == slides.length) {
            currentIndex = 1;
        } else {
            currentIndex++;
        }

        translateSlidePoint();
        changeCurrentIndex();
        changeDotOpacity();
    });

    prevSlide.addEventListener('click', () => {
        if (slideOffset == 0) {
            slideOffset = maxSlideWidth;
        } else {
            slideOffset -= minSlideWidth;
        }

        if (currentIndex == 1) {
            currentIndex = slides.length;
        } else {
            currentIndex--;
        }

        translateSlidePoint();
        changeCurrentIndex();
        changeDotOpacity();
    });

    const dotsWrapper = document.createElement('ol'),
        dotsArr = [];

    dotsWrapper.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slidesWrapper.style.position = 'relative';
    slidesWrapper.append(dotsWrapper);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dotsArr.push(dot);
        dotsWrapper.append(dot);
    }

    dotsArr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            currentIndex = slideTo;
            slideOffset = minSlideWidth * (slideTo - 1);

            translateSlidePoint();
            changeCurrentIndex();
            changeDotOpacity();
        });
    });

    function changeCurrentIndex() {
        if (slides.length < 10) {
            currentSlide.textContent = `0${currentIndex}`;
        } else {
            currentSlide.textContent = currentIndex;
        }
    }

    function changeDotOpacity() {
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[currentIndex - 1].style.opacity = 1;
    }

    function translateSlidePoint() {
        slidesField.style.transform = `translateX(-${slideOffset}px)`;
    }
}

export default slider;