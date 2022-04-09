import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatButton } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
//import {AdminModule} from './admin/admin.module';
//import {UserModule} from './user/user.module'
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   // NgbModule.forRoot()
   // ,AdminModule,
   // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
