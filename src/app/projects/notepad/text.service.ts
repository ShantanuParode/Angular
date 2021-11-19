
import { Injectable } from "@angular/core";
import { empty } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TextService {
    words = [
        {
            text: "",
            bold: "",
            italic: "",
            und: ""

        }
    ];

    get() {
        return this.words;
    }

    add(word: { text: string; bold: string; italic: string; und: string}) {
        this.words.push(word);
    }
     
    bold(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('bold');
        word.bold = 'bold';
    }
    notBold(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('not bold');
        word.bold = 'auto';
    }
    italic(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('italic');
        word.italic = 'italic';
    }
    notItalic(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('not bold');
        word.italic = 'italic';
    }
    und(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('und');
        word.und = 'underline';
    }
    notUnd(word: { text: string; bold: string; italic: string; und: string}) {
        console.log('not und');
        word.und = 'auto';
    }
    emptyView() {
        console.log(this.words.length)
        this.words.length = 1;
    }
}