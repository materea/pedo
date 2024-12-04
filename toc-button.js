// Dynamically generate TOC from <h2> headings within <section> elements
const tocList = document.getElementById('dynamic-toc');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const headings = section.querySelectorAll('h2'); // Only select <h2> headings
    headings.forEach(heading => {
        const headingAnchor = heading.querySelector('a');
        if (headingAnchor && headingAnchor.getAttribute('href')) {
            const tocItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = headingAnchor.textContent || 'Untitled Section';
            link.href = headingAnchor.getAttribute('href');
            tocItem.appendChild(link);
            tocList.appendChild(tocItem);
        }
    });
});

// Toggle TOC panel
const tocButton = document.getElementById('toc-button');
const tocPanel = document.getElementById('toc-panel');

tocButton.addEventListener('click', () => {
    tocPanel.classList.toggle('expanded');
});