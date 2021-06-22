import "router-slot";

import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { DaysPage } from './pages/DaysPage';
import { Day } from './pages/Day';
import { ResourcesPage } from './pages/ResourcesPage';
import { HelpPage } from './pages/HelpPage';

function sessionGuard() {
  if (sessionStorage.getItem("username") == null) {
		history.replaceState(null, "", "login");
		return false;
  }
	return true;
}

const menu = document.querySelector('w-nav-menu');
window.addEventListener("navigationend", (evt) => {
  menu.requestUpdate();
});


customElements.whenDefined("router-slot").then(async () => {
const routerSlot = document.querySelector("router-slot");
  await routerSlot.add([
    {
      path: "login",
      component: Login
    },
    {
      path: "home",
      component: HomePage,
      guards: [sessionGuard]
    },
    {
      path: "profile",
      component: ProfilePage
    },
    {
      path: "days/:day",
      component: Day,
      setup: (component, info) => {
        component.day = info.match.params.day;
      }
    },
    {
      path: "days",
      component: DaysPage
    },
    
    {
      path: "resources",
      component: ResourcesPage
    },
    {
      path: "help",
      component: HelpPage
    },
    {
			path: "**",
			redirectTo: `home`,
			preserveQuery: true
		}
  ]);
});

customElements.define("w-nav-menu", Menu);