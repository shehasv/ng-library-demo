import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAComponent} from './test-a/test-a.component'
import { TestBComponent} from './test-b/test-b.component'


@NgModule({
  declarations: [
    TestAComponent,
    TestBComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TestAComponent,TestBComponent]
})
export class ComponentsModule { }
