import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponentComponent } from './user-component/user-component.component';
import { DisplayBoardComponentComponent } from './display-board-component/display-board-component.component';
import { HeaderComponentaComponent } from './header-componenta/header-componenta.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    DisplayBoardComponentComponent,
    HeaderComponentaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }