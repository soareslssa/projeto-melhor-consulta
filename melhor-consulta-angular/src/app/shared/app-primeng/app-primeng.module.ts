import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';


@NgModule({
  exports: [
    TableModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    InputMaskModule,
    CalendarModule,
    StepsModule,
    AvatarModule,
    InputNumberModule,
    DividerModule,
    TabViewModule,
    PasswordModule,
    RadioButtonModule,
    ToastModule,
    InputSwitchModule,
    ConfirmDialogModule,
    BadgeModule,
    MenubarModule,
    TagModule

  ],
})
export class AppPrimengModule { }
