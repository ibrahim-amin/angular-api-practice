import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PersonComponent,
    CounterComponent,
    CounterParentComponent,
    ChangecolorDirective,
    ParentColorComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(TestData),
    HttpClientModule,
    

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
