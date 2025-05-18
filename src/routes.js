import React, { lazy } from 'react';

const Home = lazy(() => import('./components/pages/Home'));
const ShopTires = lazy(() => import('./components/pages/ShopTires'));
const Services = lazy(() => import('./components/pages/Services'));
const Locations = lazy(() => import('./components/pages/Locations'));
const TipsGuides = lazy(() => import('./components/pages/TipsGuides'));
const Financing = lazy(() => import('./components/pages/Financing'));
const ServicePage = lazy(() => import('./components/pages/ServicePage'));

export const routesConfig = [
  { path: '/', element: React.createElement(Home) },
  { path: '/shop-tires', element: React.createElement(ShopTires) },
  { path: '/services', element: React.createElement(Services) },
  { path: '/locations', element: React.createElement(Locations) },
  { path: '/tips-guides', element: React.createElement(TipsGuides) },
  { path: '/financing', element: React.createElement(Financing) },
  { path: '/services/:name', element: React.createElement(ServicePage) },
]

let hasPreloadedServices = false;
let hasPreloadedServicePage = false;
let hasPreloadedShopTires = false;
let hasPreloadedLocations = false;
let hasPreloadedFinancing = false;



export const preloadShopTires = () => {
    if(!hasPreloadedShopTires){
        import('./components/pages/ShopTires');
        hasPreloadedShopTires = true;
    }
}
export const preloadServices = () => {
  if (!hasPreloadedServices) {
    import('./components/pages/Services');
    hasPreloadedServices = true;
  }
};
export const preloadLocations = () => {
    if(!hasPreloadedLocations){
        import('./components/pages/Locations');
        hasPreloadedLocations = true
    }
};
export const preloadFinancing = () => {
    if(!hasPreloadedFinancing){
        import('./components/pages/Financing')
        hasPreloadedFinancing = true
    }
};
export const preloadServicePage = () => {
    if(!hasPreloadedServicePage){
        import('./components/pages/ServicePage')
        hasPreloadedServicePage = true;
    }
};
