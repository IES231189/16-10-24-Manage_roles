import { Component, EventEmitter, Input , Output } from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './component.table.component.html',
  styleUrl: './component.table.component.css'
})
export class ComponentTableComponent {
 @Input() data : any[] = [];
 @Input() columns: any[] = [];

 @Output() edit = new EventEmitter<any>();
 @Output() delete = new EventEmitter<any>();


 onEdit( row : any){
  this.edit.emit(row);
 }

 onDelete(row:any){
  this.delete.emit(row);
 }

}
