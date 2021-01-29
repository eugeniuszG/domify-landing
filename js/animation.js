var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   

var speedAnimation = document.getElementById('speed');
var flexebilityAnimation = document.getElementById('flexebilityVisible');
var agregationAnimation = document.getElementById('agregationVisible');
console.log(speedAnimation, flexebilityAnimation, agregationAnimation);

function dealWithScrolling(e) {

    // if (window.outerWidth < 500) {
    //     console.log('inside');
    //     if (true) {
    //         anime({
    //             targets: '#flexability',
    //             translateX: '-95rem',
    //             easing: 'easeOutCubic',
    //             duration: 1200
    //         });
    //     }
    // }

    if (isFullyVisible(speedAnimation)) {
        anime({
            targets: '#rocket',
            translateX: '-680px',
            easing: 'easeOutCubic',
            duration: 1200
        });
    }
    if (isFullyVisible(flexebilityAnimation)) {
        anime({
            targets: '#flexability',
            translateX: '45rem',
            easing: 'easeOutCubic',
            duration: 1200
        });
    }
    if (isFullyVisible(agregationAnimation)) {
        anime({
            targets: '#agregation',
            translateX: '-780px',
            easing: 'easeOutCubic',
            duration: 1200
        });
        
    }    
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
   
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
   
    return ((top >= 0) && (bottom <= window.innerHeight));
}



//animation for iphone
anime({
    targets: '#iphone',
    translateX: '-95rem',
    easing: 'easeOutCubic',
    duration: 1500
});