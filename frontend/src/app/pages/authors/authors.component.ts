import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authorss =[];
  closeResult = '';

  constructor(private modalService: NgbModal,private authors:AuthorsService) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  createauthors(pubId,title,year,indexType,journal) {
    const data = {"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
    this.authors.addAuthors(pubId,data).subscribe(res=>{
     console.log(res);
     
    }) 
   }
 
   getauthorss(){
       this.authors.getAuthors().subscribe(res=>{
         this.authorss = res;
       })
   }
 
   updateauthors(id,title,year,indexType,journal){
    const data = {"id":id,"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
    this.authors.updateAuthor(data).subscribe(res=>{
     console.log(res);
     
    })
   }
 
   deleteauthors(id){
     this.authors.deleteAuthor(id).subscribe(res=>{
       console.log(res);
      })
   }

}
