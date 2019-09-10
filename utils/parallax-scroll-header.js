'use-strict';

export function configureParallaxScrollHeader() {
    let lastScrollY = window.scrollY;
    let lastChangePositive = false;

    const calculateVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    calculateVh();
    window.addEventListener('resize', calculateVh);

    const setNewHeight = (height) => document.getElementById('header').style.height = height;

    window.addEventListener('scroll', () => {
        let currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY && !lastChangePositive;
        const isScrollingUp = currentScrollY < lastScrollY && lastChangePositive;

        if (isScrollingDown) {
            lastChangePositive = true;
            setNewHeight(0);
        } else if (isScrollingUp) {
            lastChangePositive = false;
            setNewHeight('17vh');
        }

        if (currentScrollY === 0) {
            setNewHeight(`${window.innerHeight}px`);
            calculateVh();
        }

        lastScrollY = currentScrollY;
    });
}