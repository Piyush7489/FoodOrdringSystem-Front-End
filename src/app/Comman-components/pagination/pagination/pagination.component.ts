import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input()totalItem:any;
  @Input()currentpage:any;
  @Input()itemPerPage:any;
  @Output() onClick:EventEmitter<number>=new EventEmitter()
  totalPage=0;
  pages:number[]=[]
  constructor(){
   
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    this.totalItem = changes['totalItem']?.currentValue;
  
    if(this.totalItem){
      this. totalPage=Math.ceil(this.totalItem/this.itemPerPage);
      this.pages=Array.from({length:this.totalPage},(_,i)=>i);
      console.log(this.pages);
      
        }
  }

  pageClicked(page: number) {
    if(page>this.totalPage) return;
    this.onClick.emit(page);
    }
   
   
     
}
