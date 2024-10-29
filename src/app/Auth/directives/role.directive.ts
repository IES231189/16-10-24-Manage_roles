import { Directive, TemplateRef, ViewContainerRef ,Input } from '@angular/core';
import { AuthService } from '../Services/services.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  private currentRole : string | null = null;

  constructor(private authService:AuthService,
    private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef)
  {
    const currentUser = this.authService.getCurrentUsers();
    this.currentRole = currentUser ? currentUser.role : null;
  }

  @Input() set appRole(allowedRoles:string[]){

    if(allowedRoles.includes(this.currentRole!)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }
}
