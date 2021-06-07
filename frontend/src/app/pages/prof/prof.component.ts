import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfService } from 'src/app/services/prof.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  profs =[];
  closeResult = '';

  constructor(private modalService: NgbModal,private prof:ProfService) {}
  
  ngOnInit(): void {
    this.getProfs();
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

  createProf(nom,prenom,grade,cin) {
   const data = {"nom":nom,"prenom":prenom,"grade":grade,"cin":cin}
   this.prof.addProf(data).subscribe(res=>{
    console.log(res);
    
   }) 
  }

  getProfs(){
      this.prof.getProfs().subscribe(res=>{
        this.profs = res;
      })
  }

  updateProf(id,nom,prenom,grade,cin){
   const data = {"id":id,"nom":nom,"prenom":prenom,"grade":grade,"cin":cin}
   this.prof.updateProf(data).subscribe(res=>{
    console.log(res);
    
   })
  }

  deleteProf(id){
    this.prof.deleteProf(id).subscribe(res=>{
      console.log(res);
     })
  }
}
