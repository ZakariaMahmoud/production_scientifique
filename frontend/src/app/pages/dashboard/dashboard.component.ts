import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Chart from 'chart.js';
import { PublicationService } from 'src/app/services/publication.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  closeResult = '';
  publications:[];

  constructor(private modalService: NgbModal,private publication:PublicationService) {}
  
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

  createPublication(title,year,indexType,journal) {
   const data = {"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
   this.publication.addPublication(data).subscribe(res=>{
    console.log(res);
    
   }) 
  }

  getPublications(){
      this.publication.getPublications().subscribe(res=>{
        this.publications = res;
      })
  }

  updatePublication(id,title,year,indexType,journal){
   const data = {"titre":title,"annee":year,"type_revu":indexType,"journal":journal}
   this.publication.updatePublication(id,data).subscribe(res=>{
    console.log(res);
    
   })
  }

  deletePublication(id){
    this.publication.deletePublication(id).subscribe(res=>{
      console.log(res);
     })
  }
}
