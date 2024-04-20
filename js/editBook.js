import { renderNavBar } from "../modules/navBar.js"
import { usersList } from "../modules/users.js"

let navBar = document.getElementById('nav-bar')

if (navBar)
    navBar.innerHTML = renderNavBar(usersList[0])