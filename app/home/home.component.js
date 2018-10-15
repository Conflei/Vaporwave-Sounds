"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("~/shared/user/user.model");
var user_service_1 = require("~/shared/user/user.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.email = "felix@a.bcad";
        this.isLoggingIn = true;
        this.user = new user_model_1.User();
        this.user.email = "as@a.a";
        this.user.password = "12";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        console.log("Submit");
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    HomeComponent.prototype.login = function () {
        // TODO: Define
    };
    HomeComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    HomeComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            console.log("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () {
            alert("Unfortunately we were unable to create your account.");
            console.log("Unfortunately we were unable to create your account.");
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            providers: [user_service_1.UserService],
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBZ0Q7QUFDaEQsMkRBQXlEO0FBU3pEO0lBTUksdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDVDLFVBQUssR0FBRyxjQUFjLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLGVBQWU7SUFDakIsQ0FBQztJQUdILHFDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQWFHO1FBWkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7WUFDckQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRDtZQUNJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUE5Q00sYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU9tQywwQkFBVztPQU5uQyxhQUFhLENBK0N6QjtJQUFELG9CQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlcjogVXNlcjtcbiAgICBlbWFpbCA9IFwiZmVsaXhAYS5iY2FkXCI7XG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJhc0BhLmFcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMlwiXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdFwiKTtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBsb2dpbigpIHtcbiAgICAgICAgLy8gVE9ETzogRGVmaW5lXG4gICAgICB9XG4gICAgICBcblxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG5cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIilcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH1cbn1cbiJdfQ==