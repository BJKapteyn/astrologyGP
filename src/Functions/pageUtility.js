const metaTag = 'meta';
const nameAttribute = 'name';
const contentAttribute = 'content';

export function addPageHeaderInfo(title, description = '', keywords = '', scriptSources = []) {
    const headTitle = title ?? 'The Vibe Collective';

    let descriptionElement = document.createElement(metaTag);
    descriptionElement.setAttribute(nameAttribute, 'description');
    descriptionElement.setAttribute(contentAttribute, description);

    let keywordsElement = document.createElement(metaTag);
    keywordsElement.setAttribute(nameAttribute, 'keywords');
    keywordsElement.setAttribute(contentAttribute, keywords);

    if(scriptSources && scriptSources.length > 0)
        addScripts(scriptSources);

    document.title = headTitle;
    document.head.appendChild(descriptionElement);
    document.head.appendChild(keywordsElement);
}

function addScripts(scripts) {
    scripts.forEach(scriptSource => {
        let scriptElement = document.createElement('script');
        scriptElement.src = scriptSource;

        document.head.appendChild(scriptElement);
    });
}