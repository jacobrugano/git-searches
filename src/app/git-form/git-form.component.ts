import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http'; // Allows us to use HttpClient in our application
import { NgForm } from '@angular/forms';
import { User } from '../user'; // Imported the User blueprint class in src/app/user.ts

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

	ngOnInit() {
	}

}
