import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../core/user/user';
import { UserService } from '../core/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  meuForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.meuForm = this.formBuilder.group({
      nome: ['', Validators.required],
      apelido: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  gravarNome() {
    const user: User = this.meuForm.getRawValue();
    this.userService.insert(user);
    this.router.navigate(['../quiz/']);
  }

}
