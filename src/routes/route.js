import { template as home } from "../pages/Home";
import { template as portfolio } from "../pages/Portfolio";
import { template as contact } from "../pages/Contact";

import { listeners as navibarListeners } from "../components/Navbar";

export const routes = {
    "/": {title: "Home", render: home},
    "/portfolio": {title: "Portfolio", render: portfolio},
    "/contact": {title: "Contact", render: contact},
}



export const router = () => {
    let page = routes[location.pathname]
    if (page) {
        document.title = page.title;
        document.querySelector("#app").innerHTML = page.render()
        navibarListeners();
        
    }
}