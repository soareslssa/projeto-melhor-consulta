import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';


@NgModule({
  exports: [TableModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule],
})
export class AppPrimengModule {}
