import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatTableModule} from '@angular/material/table';
import { ProductDialogComponent } from './product-page/product-dialog/product-dialog.component'
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/fieldset'
import {TimelineModule} from 'primeng/timeline';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ListboxModule} from 'primeng/listbox';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    BrowserModule,
    FieldsetModule,
    TimelineModule,
    DropdownModule,
    SelectButtonModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    ListboxModule,
    CalendarModule,
    DialogModule,
    DividerModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    ChartModule,
    MessageModule,
    MessagesModule
  ],
  exports: []
})
export class PagesModule { }
