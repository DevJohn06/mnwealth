import { 
    Component, 
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 

    navItems = [{
        "name": "Dashboard",
        "icon": "dashboard",
        "selected": true
    },{
        "name": "Roles and Permissions",
        "icon": "perm_data_setting",
        "selected": false
    },{
        "name": "Staff",
        "icon": "account_box",  
        "selected": false
    },{
        "name": "Activities",
        "icon": "local_activity",
        "selected": false   
    }]

    headerLabel = "Dashboard";

    constructor() { }

    ngOnInit() {

    }

    onMenuClicked(label) {
        this.headerLabel = label;
    }
}
