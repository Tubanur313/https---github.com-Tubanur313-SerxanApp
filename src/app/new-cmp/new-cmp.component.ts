import { Component, OnInit } from '@angular/core';
import { ListMember } from '../models/listMember';


@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.scss']
})



export class NewCmpComponent implements OnInit {

  panelOpenState = false;
  test = "Test 1";
  test_2 = "Test 2";
  test_3 = this.test + " " + this.test_2;

  num: number = 4;
  txt: string = "";
  test_4 : any;
  test_5 = 67;
  arr : Array<number> = [];
  list_member : Array<ListMember> = [];

  constructor() {
    this.setArray();
    console.log(this.arr.length);
    let itm = new ListMember();
    itm.name = "Serxan";
    itm.surname = "Hacibeyov";
    itm.age = 21;
    this.list_member.push(itm)

    let itm2 = new ListMember();
    itm2.name = "Xadica";
    itm2.surname = "Allahverdi";
    itm2.age = 22;
    this.list_member.push(itm2)
   }

  ngOnInit(): void {
    let a = 5;
    this.test = "AAA";

  }
  setArray(){
    this.arr = [2,4,6,7,9];
  }

  sum(a: any,b: any){
    return a + b;
  }

}
