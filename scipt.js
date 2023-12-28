gsap.from(".page1 h1,.page1 h3,.vi-deo video",{
    y:40,
    opacity:0,
    duration: 1
})
gsap.from(".page2 .img1 img  ,.page2 .img2 img,.page2 .img3 img",{
    y:200,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
            trigger:".page2 .img2 img,.page2 .img3 img",
            scroller:"body",
            // markers:true,
    }
})
gsap.from(".about-webinar h3,.about-webinar h6,.about-webinar p,.page4",{
    y:100,
    opacity:0,
    duration:.8,
    stagger:1,
    scrollTrigger:{
            trigger:".about-webinar h3,.about-webinar h6,.about-webinar p,.page4",
            scroller:"body",
            // markers:true,
            start:"top 90%"
    }

})
gsap.from(".page3 h1",{
    opacity:0,
    y:10,
    duration:2,
    scrollTrigger:{
            trigger:".page3 h1",
            scroller:"body",
            // markers:true,
            start:"top 90%"
    }
})
gsap.from(".page4",{
    opacity:0,
    y:10,
    duration:1,
    scrollTrigger:{
            trigger:".page4",
            scroller:"body",
            // markers:true,
            start:"top 90%"
    }
})

gsap.from(".page5",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 40%",
        scrub:true
}
})
