const replaceInnerHtmlWithNewPage = (response, element) => {
    if (response.readyState === 4 && response.status === 200) {
        element.innerHTML = response.responseText;
    }
};

const loadPage = (pageName, routerOutletId) => {
    const element = document.getElementById(routerOutletId);
    const request = new XMLHttpRequest();
    request.onload = () => replaceInnerHtmlWithNewPage(request, element);
    request.open("GET", `pages/${pageName}.html`, true);
    request.send();
};

const getNewRoute = (routes, defaultRoute) =>
    routes.find(route => window.location.hash.replace("#", "") === route) ||
    defaultRoute;

export const enableRouting = (routes, defaultRoute, routerOutletId) => {
    loadPage(getNewRoute(routes, defaultRoute), routerOutletId);
    window.addEventListener("hashchange", () =>
        loadPage(getNewRoute(routes, defaultRoute), routerOutletId)
    );
}
