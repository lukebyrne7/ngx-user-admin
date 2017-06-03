export var tpl = "\n<nav class=\"navbar navbar-default navbar-fixed-top\"> \n    <div class=\"container\"> \n        <div class=\"navbar-header\"> \n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"> \n                <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> \n            </button> \n            <a href=\"#\" class=\"navbar-brand\">User Admin</a> \n        </div> \n        <div class=\"collapse navbar-collapse\" id=\"navbar\"> \n            <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn()\">\n                <li>\n                    <a routerLink=\"/list\" routerLinkActive=\"active\">List Users</a>\n                </li>\n                <li>\n                    <a routerLink=\"/events\" routerLinkActive=\"active\">User Event Log</a>\n                </li>  \n                <li>\n                    <a (click)=\"clickLogout()\">Logout</a>\n                </li> \n            </ul> \n        </div> \n    </div> \n</nav>\n<div id=\"header-push\"></div>\n";
//# sourceMappingURL=header.component.tpl.js.map