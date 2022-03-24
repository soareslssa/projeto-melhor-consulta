import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  exports: [TableModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    DropdownModule],
})
export class AppPrimengModule {}
