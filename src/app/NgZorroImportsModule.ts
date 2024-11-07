import { NgModule} from '@angular/core';

import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import{NzInputModule} from 'ng-zorro-antd/input';
import{NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
    exports:[
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzSelectModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzGridModule
    ]
})

export class NgZorroImportsModule {

}