'use-strict';

export class Route {
    constructor(name, isDefault) {
        this.name = name;
        this.isDefault = isDefault;
        this.htmlPath = `pages/${name}.html`;
    }

    isActiveRoute = () => window.location.hash.replace('#', '') === this.name

    activateRoute = (containerId) => {
        const request = new XMLHttpRequest();
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                document.getElementById(containerId).innerHTML = request.responseText;
            }
        };
        request.open('GET', this.htmlPath, true);
        request.send();
    }
}