import { Component } from '@angular/core';
import { ToastMessage, ToastService } from '../../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  messages: ToastMessage[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toastMessages.subscribe(message => {
      this.messages.push(message);
      setTimeout(() => this.messages.shift(), 3000); 
    });
  }

}
