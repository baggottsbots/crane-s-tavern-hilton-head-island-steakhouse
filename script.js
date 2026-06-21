// ===== HEADER SCROLL EFFECT =====
    // Adds background and border styling when page scrolls past 40px threshold
    const hdr=document.getElementById('hdr');
    window.addEventListener('scroll',()=>{hdr.classList.toggle('scrolled',window.scrollY>40)});

    // ===== MOBILE HAMBURGER MENU TOGGLE =====
    // Toggles open/closed state on burger button and nav links
    // Prevents body scroll when mobile menu is open by adding menu-open class
    // Closes menu when a nav link is clicked and re-enables body scroll
    // Fixed positioning with full viewport height ensures menu fills screen at any scroll position
    const burger=document.getElementById('burger');
    const navlinks=document.getElementById('navlinks');
    const body=document.body;
    
    burger.addEventListener('click',()=>{
        burger.classList.toggle('open');
        navlinks.classList.toggle('open');
        body.classList.toggle('menu-open');
    });
    
    navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
        burger.classList.remove('open');
        navlinks.classList.remove('open');
        body.classList.remove('menu-open');
    }));

    // ===== MENU TAB SWITCHING =====
    // Handles switching between menu categories (Starters, Salads, Steaks, Chef)
    // Updates active tab and visible panel on click
    const tabs=document.querySelectorAll('.menu-tab');
    const panels=document.querySelectorAll('.menu-panel');
    tabs.forEach(tab=>tab.addEventListener('click',()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        panels.forEach(p=>p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.panel).classList.add('active');
    }));

    // ===== SCROLL REVEAL ANIMATION =====
    // Uses Intersection Observer to trigger reveal animations when elements enter viewport
    // Threshold set to 12% visibility before triggering animation
    const io=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // ===== GALLERY LIGHTBOX =====
    // Opens lightbox modal when gallery images are clicked
    // Displays full-size image in centered modal
    const lb=document.getElementById('lightbox');
    const lbImg=document.getElementById('lbImg');
    document.querySelectorAll('.gal-item img').forEach(img=>{
        img.parentElement.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.add('open')});
    });
    
    // ===== LIGHTBOX CLOSE FUNCTION =====
    // Closes lightbox modal via close button, escape key, or backdrop click
    function closeLb(){lb.classList.remove('open')}
    document.getElementById('lbClose').addEventListener('click',closeLb);
    lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});