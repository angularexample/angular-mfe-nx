import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app-one',
    // eslint-disable-next-line @nx/enforce-module-boundaries
    loadComponent: () => import('@angular-mfe-nx/app-one/app.component').then(m => m.AppComponent)
  },
  {
    path: 'app-two',
    // eslint-disable-next-line @nx/enforce-module-boundaries
    loadComponent: () => import('@angular-mfe-nx/app-two/app.component').then(m => m.AppComponent)
  },
];

