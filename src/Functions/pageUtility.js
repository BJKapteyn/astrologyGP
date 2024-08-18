
// Use this utility to set the title tag, and meta description and keywords inside the <head> tag
export function addPageHeaderInfo(description = '', keywords = '', title = 'TheVibeCollective', scriptSources = []) {
    const headTitle = title ?? 'The Vibe Collective';

    let titleElement = document.querySelector('title');
    let descriptionElement = document.querySelector(`meta[name=\'description\']`);
    let keywordsElement = document.querySelector(`meta[name=\'keywords\']`);

    titleElement.innerText = headTitle;
    descriptionElement.setAttribute('content', description);
    keywordsElement.setAttribute('content', keywords);

    if(scriptSources && scriptSources.length > 0)
        addScripts(scriptSources);
}

function addScripts(scripts) {
    scripts.forEach(scriptSource => {
        let scriptElement = document.createElement('script');
        scriptElement.src = scriptSource;

        document.head.appendChild(scriptElement);
    });
}