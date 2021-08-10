# slider
Native JS slider with pointer

This slider contain object as argument-list with 7 options.

slider({
    slide: main selector of slide,
    nextArrow: button selector with arrow to next slide,
    prevArrow: button selector with arrow to previous slide,
    totalCounter: element selector that shows total count slides,
    currentCounter: element selector that shows current count slide,
    wrapper: contains our slides,
    field: inner (located as child of wrapper)
})

Example: 
```
<div class="offer__slider">
    <div class="offer__slider-counter">
        <div class="offer__slider-prev">
            <img src="icons/left.svg" alt="prev">
        </div>
        <span id="current">03</span>
        /
        <span id="total"></span>
        <div class="offer__slider-next">
            <img src="icons/right.svg" alt="next">
        </div>
    </div>
    <div class="offer__slider-wrapper">
        <div class="offer__slider-inner">
            <div class="offer__slide">
                <img src="img/slider/pepper.jpg" alt="pepper">
            </div>
            <div class="offer__slide">
                <img src="img/slider/food-12.jpg" alt="food">
            </div>
            <div class="offer__slide">
                <img src="img/slider/olive-oil.jpg" alt="oil">
            </div>
            <div class="offer__slide">
                <img src="img/slider/paprika.jpg" alt="paprika">
            </div>
        </div>
    </div>
</div>
```
At arguments: 
```
slider({
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
```
