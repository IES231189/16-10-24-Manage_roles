import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.button.component.html',
  styleUrl: './edit.button.component.css'
})
export class EditButtonComponent {
  @Output() edit = new EventEmitter<void>();

  onEdit(){
    this.edit.emit();
  }


}
