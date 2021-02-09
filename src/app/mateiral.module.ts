import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';




@NgModule({
    imports:[MatButtonModule, 
        MatIconModule, 
        MatToolbarModule, 
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSidenavModule,
        MatSelectModule,
        MatBadgeModule,
        MatTableModule,

    ],
        
    exports:[MatButtonModule, 
        MatIconModule, 
        MatToolbarModule, 
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSidenavModule,
        MatSelectModule,
        MatBadgeModule,
        MatTableModule,


    ]
})
export class MaterialModule {}
