import { 
    Component, 
    OnInit, 
    Input,
    NgZone,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-side-bar-menu',
    templateUrl: './side-bar-menu.component.html',
    styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent implements OnInit {
   
    private _navItems: any[];

    @Input()
    get navItems() { 
        return this._navItems; 
    }
    set navItems(navItems: any[]) {
        this.zone.run(() => {
            this._navItems = navItems;
        });
    };   

    hovered: boolean = true;
    
    @Output()
    headerLabel: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private zone: NgZone
    ) { }

    ngOnInit() {

    }

    onItemClick(index) {
        this.headerLabel.emit(this.navItems[index]["name"]);

        this._navItems.forEach((item, idx) => {
            if (idx == index) {
                item['selected'] = true;
            } else {
                item['selected'] = false;
            } 
        });
    }
}
