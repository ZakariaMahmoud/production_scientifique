import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DoctorantService } from 'src/app/services/doctorant.service';


@Component({
  selector: 'app-doctorant',
  templateUrl: './doctorant.component.html',
  styleUrls: ['./doctorant.component.css']
})
export class DoctorantComponent implements OnInit {
  closeResult = '';
  doctorants =[];

  constructor(private modalService: NgbModal,private doctorant:DoctorantService) {}
  
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

  createdoctorant(title,year,indexType,journal) {
    const data = {"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
    this.doctorant.addDoctorant(data).subscribe(res=>{
     console.log(res);
     
    }) 
   }
 
   getdoctorants(){
       this.doctorant.getDoctorant().subscribe(res=>{
         this.doctorants = res;
       })
   }
 
   updatedoctorant(id,title,year,indexType,journal){
    const data = {"id":id,"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
    this.doctorant.updateDoctorant(data).subscribe(res=>{
     console.log(res);
    })
   }
 
   deletedoctorant(id){
     this.doctorant.deleteDoctorant(id).subscribe(res=>{
       console.log(res);
      })
   }

}
