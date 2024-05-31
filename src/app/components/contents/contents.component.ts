import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  standalone: true,
  imports: [],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss'
})

export  class ContentsComponent {
  card1 = async (idd: string) => {
    console.log(idd);
    const data = await fetch(`http://localhost:3000/documents/${idd}`).then((res) =>
      res.json()
    );
    const { id, title,descr,pub_date, author, img, pdf } = data;
    
    const authors = document.getElementById('author');
    const descrp = document.getElementById('descr');
    const pd = document.getElementById('pd');
    const pdfs = document.getElementById('pdf');
    const d_header=document.getElementById('document_header')
    
    if (authors) {
      authors.innerText = 'Author: ' + author;
    }
    if (descrp) {
      descrp.innerText = 'Description: ' + descr;
    }
    if (pd) {
      pd.innerText = 'Publish Date: ' + pub_date;
    }
    if (pdfs) {
      pdfs.setAttribute('src', pdf);
    }
    if(d_header){
      d_header.innerText = title
    }
    
    console.log(data);
  };
}
// export class ContentsComponent {

// }