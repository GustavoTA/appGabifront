import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private modal: ModalController) {
    this.userService.getUser()
      .subscribe(resp => {
        resp.then(user =>  this.user = user);
      });
  }

  ngOnInit() {
  }

}
