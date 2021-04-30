import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  info={
    firstName:'Salah-Eddine',
    lastName:'LACHHAB',
    phoneNumber: '0690 110 080'
  }
  items=[];
  item={id : null , msg :''  }
 
  addItem(){
    if(this.item.msg!=''){
      this.item.id=new Date();
      this.items.push(
        {
          id:this.item.id,
          msg:this.item.msg
          }
        );
        this.item.msg=''
    }
  }
}
