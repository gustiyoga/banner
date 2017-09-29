function init() {
    var frame1 = document.getElementById("frame-1");
    var frame2 = document.getElementById("frame-2");
    var fadeTimeTransition = 5;
    var tl = new TimelineMax({onComplete: restart});


    // set first background image transition
    tl.to(frame1, 7, {
        backgroundPosition: '0px 0px',
        ease: Power1.easeOut
    })
    .add('frame1', '0.5')
    .add('frame2', '7');


    // frame 1
    tl.staggerTo('.trans-1', 0.5, {
        opacity: 1,
        ease: Power4.easeOut
    }, 3, 'frame1')

    .to('.item__bg', 1, {
        width: '135px',
        ease: Power4.easeOut
    }, 'frame1')

    .to('.item__bg', 0, {
        width: '0px'
    }, 'frame1+=3')

    .to('.item__bg', 1, {
        width: '135px',
        ease: Power4.easeOut
    }, 'frame1+=3.5')

    .staggerTo('.trans-1', 1, {
        opacity: 0,
    }, 4, 'frame1+=2.5');


    // frame 2
    tl.to(frame2, 0.2, {
        x: -150,
        y: -125,
        width:  '300px',
        height: '250px'
    }, 'frame2')

    .to('#item-3a', 0.5, {
        opacity: 1
    }, 'frame2+=0.5')

    .to('#item-3b', 0.5, {
        width: '70px'
    }, 'frame2+=1.5')

    .staggerTo('.trans-2', 0.5, {
        opacity: 1,
        ease: Power4.easeOut
    }, 4, 'frame2+=0.5')

    .staggerTo('.trans-2', 0.5, {
        opacity: 0,
    }, 5, 'frame2+=4')

    .to(['#item-4b', '#item-4c'], 0, {
        opacity: 1
    }, 'frame2+=5')

    .to('#item-4b', 0.5, {
        y: -32,
        ease: Power4.easeOut
    }, 'frame2+=5')

    .to('#item-4c', 0.5, {
        x: 300,
        ease: Power4.easeOut
    }, 'frame2+=5.5');


    function restart() {
        tl.restart();
    }
}
