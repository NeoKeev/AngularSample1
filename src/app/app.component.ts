import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormControl,FormGroupName,FormGroup, Validators, EmailValidator} from '@angular/forms';
//import { getMaxListeners } from 'process';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title: string = 'bootstrap';
  public isCollapsed = false;
  message = "Hey thereeeee!";
  // data = {
  //   name: "fighter1",
  //   aga:25
  // }
  parentComponent1(data: string){
    console.warn(data)
  }
  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){}
    async loadAdmin()
    {
      this.viewContainer.clear();
      const {AdminlistComponent} = await import ('./adminlist/adminlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(AdminlistComponent)
      )
    }
    async loadUser()
    {
      this.viewContainer.clear();
      const {UserlistComponent} = await import ('./userlist/userlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(UserlistComponent)
      )
    }
      onSubmit(data: any){
        console.warn(data);
      }
      loginForm=new FormGroup({
        email: new FormControl('',Validators.required),
        password : new FormControl('')
      })

      userData={
        email:"kk@g.com",
        password:"12345S"
      }

      loginForm1 = new FormGroup({
        userName:new FormControl('kk'),
        password:new FormControl('123')
      })
      collectData(){
        console.warn(this.loginForm1.value)
      }
}
