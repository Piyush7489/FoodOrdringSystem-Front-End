
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Toasts from 'src/app/Utils/Toast';
import { ViewCategoryResponse } from 'src/app/payload/server-response/view-category-response';
import { AdminService } from 'src/app/servicce/admin.service';
import { GlobalCategoryService } from 'src/app/servicce/global-category.service';
import Swal from 'sweetalert2';
declare var bootstrap: any;
@Component({
  selector: 'app-view-all-category',
  templateUrl: './view-all-category.component.html',
  styleUrls: ['./view-all-category.component.css']
})
export class ViewAllCategoryComponent implements AfterViewInit {



 
  constructor(private service: AdminService,private catService:GlobalCategoryService,private fb:FormBuilder) { 

    this.categoryForm=this.fb.group({
      catName:['',[Validators.required]],
      catDescription:['',[Validators.required]],
     });
  }
  categoryForm!:FormGroup;
  currentpage :number= 0;
  itemPerPage :number= 10;
  length: number = 0;
 

  v: ViewCategoryResponse[] = [];
  catResponse:ViewCategoryResponse = new ViewCategoryResponse;
  ngAfterViewInit(): void {
    this.getData(this.currentpage,this.itemPerPage);
  }
  changePage(page: number) {
    this.currentpage = page;
    this.getData(this.currentpage,this.itemPerPage);
  }

  get PaginatedData() {
    const start = this.currentpage  * this.itemPerPage;
    const end = (this.currentpage +1)* this.itemPerPage;
    return this.v
  }
  deleteCategory(id:any)
  {
    Swal.fire({
      title:'Are you sure?',
      text:'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if(result.isConfirmed){
       this.catService.deleteCategory(id).subscribe((response)=>{
        this.v=this.v.filter((cat)=>cat.catId!=id);
        Swal.fire(
          'Deleted!',
          'Your category has been deleted.',
          'success'
        );
       },(error)=>{
        Swal.fire(
          'Error!',
          'Failed to delete category.',
          'error'
        );
       }
       )
      }
    })    
  }
 
 
  
  openUpdateModal(item: any) {
     this.catResponse=item;
     const content = document.getElementById('content');
    const modal = document.getElementById('updateModal');
    if (modal) {
      modal.classList.add('show');
      content?.classList.add('blur-background')
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('updateModal');
    const content = document.getElementById('content');
    if (modal) {
      modal.classList.remove('show');
      content?.classList.remove('blur-background')
      modal.style.display = 'none';
    }
  }

  saveChanges() {
    if(!this.categoryForm.valid)
    {
      this.categoryForm.markAllAsTouched();
      return;
    }
   this.catService.updateCategory(this.catResponse).subscribe((data:any)=>
    {

    Toasts.fire({
      icon: 'success',
      text: data.message,
      timer: 1500
    })
    this.closeModal();
   }
   
   );
  }
  
  toggleStatus(id:any,status:any) {
    this.catService.updateStatus(id, status).subscribe(response => { 
    }, error => {
      console.log(error);
      
    });
  }

  getData(currentpage:number,itemPerPage:number)
  { 
    this.catService.getDataOfCategory(currentpage,itemPerPage).subscribe((data:any)=>{
      this.v = data.message.content;
      console.log(this.v);
      this.length =  data.message.totalElements;
      
    })
  }
}
   