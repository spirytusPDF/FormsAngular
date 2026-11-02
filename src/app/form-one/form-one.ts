import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
export interface UserRecord {
  login: string;
  gender: string;
  city:string,
  faveGames: string[];
  aboutSelf: string;
}
@Component({
  imports: [FormsModule],
  selector: 'app-form-one',
  styleUrl: './form-one.css',
  templateUrl: './form-one.html',
})
export class FormOne {
  user:any = {
    login:"",
    password:"",
    confirmPass:"",
    gender:"",
    city:"",
    faveGames:[],
    aboutSelf:""
  }
  usersList: UserRecord[] = [];
  get passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPass;
  }
  genderChoice:string[] = [
    'female',
    'male'
  ]


  cities:string[] = [
    "Zhytomyr",
    "Kyiv",
    "Odessa",
    "Other"
  ]
  gamesChoice:string[]=[
    'football',
    'basketball',
    'volleyball',
    'chess',
    'world of tanks'
  ]
  gamesChose:string[] = [];
  
  gameChoosing(game:string, isChecked:boolean){
    if(isChecked){
      if(!this.gamesChose.includes(game))
        this.gamesChose.push(game);
    }
    else this.gamesChose = this.gamesChose.filter(g=>g!=game);
  }
  sendForm(form:NgForm){
   if (form.valid && this.passwordsMatch) {
      const newUser: UserRecord = {
        login: this.user.login,
        gender: this.user.gender,
        city:this.user.city,
        faveGames: [...this.gamesChose],
        aboutSelf: this.user.aboutSelf
      };

      this.usersList.push(newUser);

      form.resetForm();
      this.gamesChose = [];
    } else {
      console.log('Form validation failed.');
    }
  }
}
