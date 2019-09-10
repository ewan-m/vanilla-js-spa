'use-strict';

export class Router {
    constructor(routes, containerId) {
        this.containerId = containerId;
        this.routes = routes;
        this.handleLocationChanges();
        this.activateNewRoute();
    }

    handleLocationChanges() {
        window.addEventListener('hashchange', () => {
            (window.location.hash.length > 0)
                ? this.activateNewRoute()
                : this.activateDefaultRoute();
        });
    }

    activateDefaultRoute = () =>
        this.routes.find(route => route.isDefault).activateRoute(this.containerId);

    activateNewRoute = () =>
        this.routes.find(route => route.isActiveRoute()).activateRoute(this.containerId);
}
