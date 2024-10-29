import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.button.component.html',
  styleUrl: './delete.button.component.css'
})
export class DeleteButtonComponent {
  @Output() delete = new EventEmitter<void>();

  onDelete(){
    this.delete.emit();
  }
}
