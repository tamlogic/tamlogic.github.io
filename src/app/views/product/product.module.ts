// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Notifications Routing
import {ProductRoutingModule} from './product-routing.module';

// Collapse Module
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Lesson Component
import {LessonComponent} from './lesson/lesson.component';
import {GrammarComponent} from './lesson/grammar/grammar.component';
import {ListenReadComponent} from './lesson/listen-read/listen-read.component';
import {AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule} from '@coreui/angular';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { ListenReadContentComponent } from './lesson/listen-read/listen-read-content/listen-read-content.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppSidebarModule,
    AppBreadcrumbModule,
    PerfectScrollbarModule,
    BsDropdownModule,
    AppHeaderModule,
    AppAsideModule,
    TabsModule,
    AppFooterModule,
    CollapseModule
  ],
  declarations: [
    LessonComponent,
    ListenReadComponent,
    GrammarComponent,
    ListenReadContentComponent
  ]
})
export class ProductModule { }
