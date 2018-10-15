import { Component, OnInit } from "@angular/core";
import { User } from "~/shared/user/user.model";
import { UserService } from "~/shared/user/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user: User;
    email = "felix@a.bcad";
    isLoggingIn = true;

    constructor(private userService: UserService) {
        this.user = new User();
        this.user.email = "as@a.a";
        this.user.password = "12"
    }

    ngOnInit(): void {
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
        // TODO: Define
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
