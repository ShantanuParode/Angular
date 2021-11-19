
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextService } from './text.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  words: any;
  constructor (private textService: TextService) { }
  ngOnInit() {
    this.words = this.textService.get();
  }
  
  b = true;
  i= true;
  u = true;

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.textService.add(f.value);
    f.reset();
    this.b = true;
    this.i = true;
    this.u = true;

  }
  bold(f: NgForm) {
    if(f.value.bold ==='bold'){
      this.textService.notBold(f.value);
      this.b = !this.b;
    }
    else{
      this.textService.bold(f.value);
      this.b = !this.b;
    }
  }
  italic(f: NgForm) {
    if(f.value.italic ==='italic'){
      this.textService.notItalic(f.value);
      this.i = !this.i;
    }
    else{
      this.textService.italic(f.value);
      this.i = !this.i;
    }
  }
  und(f: NgForm) {
    if(f.value.bold ==='underline'){
      this.textService.notUnd(f.value);
      this.u = !this.u;
    }
    else{
      this.textService.und(f.value);
      this.u = !this.u;
    }
  }
  emptyView(){
    this.textService.emptyView();
  }
}
