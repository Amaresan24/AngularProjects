import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input("brandsinput")brands: String[];

  // use  to  check  create or not create List 
  ngOnChanges() {
    console.log("List Created ")
      }

  /// this is check your brands length  check only ones 
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  if(this.brands.length == 0){
    this.brands.push("Welcome");
    console.log(" Data Load")
  }
  }

  // check Every Time values will added 
len :number = 0; 
ngDoCheck(){
if(this.brands.length > this.len ){
this.len = this.brands.length;
console.log("Arrays Values Added ");
}
}

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
   console.log("Successfully destory on List");
}

ngAfterContentInit(){
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  console.log("Ts install sucessfully");
}

ngAfterContentChecked() {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  console.log("Content Checked Succesfully");
}




}
