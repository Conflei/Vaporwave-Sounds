import { Component, OnInit } from "@angular/core";
import { User } from "~/shared/user/user.model";
import { UserService } from "~/shared/user/user.service";
import { Router } from "@angular/router"
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user: User;
    isLoggingIn = true;

    constructor(private page: Page, private router: Router, private userService: UserService) {
        this.user = new User();
        this.user.email = "c@c.c";
        this.user.password = "c"
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    submit() {
        console.log("Submit");
        if (this.isLoggingIn) {
          this.login();
        } else {
          this.signUp();
        }
      }
      
      login() {
        this.userService.login(this.user)
          .subscribe(
            () =>  this.router.navigate(["/list"]),
            (error) => alert("Unfortunately we could not find your account.")
          );
      }
      

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    signUp() {
        this.userService.register(this.user)
          .subscribe(
            () => {
              alert("Your account was successfully created.");
              console.log("Your account was successfully created.")
              this.toggleDisplay();
            },
            () => {
                alert("Unfortunately we were unable to create your account.");
                console.log("Unfortunately we were unable to create your account.");
            }
          );
      }
}
