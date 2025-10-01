/**
 * Position vertical arrows behind SVG elements and center them horizontally
 */
function positionVerticalArrows() {
    // Only run on screens up to 991px
    if (window.innerWidth > 991) {
        return;
    }

    const verticalArrows = document.querySelectorAll('.pd-arrow-vertical');

    verticalArrows.forEach(arrow => {
        const row = arrow.closest('.row');
        if (!row) return;

        // Find all SVG elements in the row
        const svgs = row.querySelectorAll('svg');

        if (svgs.length > 0) {
            // Calculate the average horizontal position of all SVGs
            let totalLeft = 0;
            let svgCount = 0;

            svgs.forEach(svg => {
                const rect = svg.getBoundingClientRect();
                const rowRect = row.getBoundingClientRect();
                const relativeLeft = rect.left - rowRect.left + (rect.width / 2);
                totalLeft += relativeLeft;
                svgCount++;
            });

            if (svgCount > 0) {
                const averagePosition = totalLeft / svgCount;
                arrow.style.left = `${averagePosition}px`;
                arrow.style.transform = 'translateX(-50%)';
            }
        }

        // Ensure arrow is behind other elements
        arrow.style.zIndex = '0';
    });
}

/**
 * Initialize vertical arrow positioning
 */
function initVerticalArrows() {
    // Position arrows on load
    positionVerticalArrows();

    // Reposition on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(positionVerticalArrows, 100);
    });

    // Reposition when fonts are loaded (in case SVG positions change)
    document.fonts.ready.then(() => {
        setTimeout(positionVerticalArrows, 100);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVerticalArrows);
} else {
    initVerticalArrows();
}