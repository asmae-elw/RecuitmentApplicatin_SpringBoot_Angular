import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostuleInfosService } from '../_services/postuleInfosService';
import { PostuleInfos } from './postuleInfos';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

 

  public infos: PostuleInfos[];

  
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  tokenStorageService: any;

   constructor(private postuleInfosService: PostuleInfosService){}

  ngOnInit() {
    this.getPostuleInfos();
  }
  

  // ajouter pour le button postuler

  public onAddPostuleInfos(addForm: NgForm): void {
    document.getElementById('add-postuleInfos-form').click();
    this.postuleInfosService.addPostuleInfos(addForm.value).subscribe(
      (response: PostuleInfos) => {
        console.log(response);
        this.getPostuleInfos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public getPostuleInfos(): void {
    this.postuleInfosService.getPostuleInfos().subscribe(
      (response: PostuleInfos[]) => {
        this.infos = response;
        console.log(this.infos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(postuleInfos: PostuleInfos, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPostuleInfosModal');
    }
    container.appendChild(button);
    button.click();
  }

}
