"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_model_1 = require("../shared/artist/artist.model");
var artist_service_1 = require("../shared/artist/artist.service");
var config_1 = require("~/shared/config");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(artistService) {
        this.artistService = artistService;
        this.isDetail = false;
        this.artist = new artist_model_1.Artist(config_1.Config.newElementId, config_1.Config.newElementName, config_1.Config.newElementFinished, config_1.Config.newElementLastC, config_1.Config.newElementRank);
    }
    DetailComponent.prototype.submit = function () {
        if (this.isDetail)
            this.update();
        else
            this.add();
    };
    DetailComponent.prototype.add = function () {
        var _this = this;
        this.artistService.add(this.artist.name, this.artist.finished, this.artist.lastc, this.artist.rank)
            .subscribe(function (artistObject) {
            _this.artist.name = "";
            _this.artist.finished = "";
            _this.artist.lastc = "";
            _this.artist.rank = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.artist.name = "";
            _this.artist.finished = "";
            _this.artist.lastc = "";
            _this.artist.rank = "";
        });
    };
    DetailComponent.prototype.update = function () {
        var _this = this;
        {
            this.artistService.update(this.artist.id, this.artist.name, this.artist.finished, this.artist.lastc, this.artist.rank)
                .subscribe(function (artistObject) {
                _this.artist.name = "";
                _this.artist.finished = "";
                _this.artist.lastc = "";
                _this.artist.rank = "";
            }, function () {
                alert({
                    message: "An error occurred while updating an item to your list.",
                    okButtonText: "OK"
                });
                _this.artist.name = "";
                _this.artist.finished = "";
                _this.artist.lastc = "";
                _this.artist.rank = "";
            });
        }
    };
    DetailComponent.prototype.ngOnInit = function () {
        if (this.artist.name.length < 1) {
            this.isDetail = false;
        }
        else {
            this.isDetail = true;
        }
        throw new Error("Method not implemented.");
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: "gr-list",
            templateUrl: "detail/detail.component.html",
            styleUrls: ["detail/detail.component.css"],
            providers: [artist_service_1.ArtistService]
        }),
        __metadata("design:paramtypes", [artist_service_1.ArtistService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsOERBQXNEO0FBQ3RELGtFQUErRDtBQUkvRCwwQ0FBeUM7QUFTekM7SUFJSSx5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGaEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUlqQixXQUFNLEdBQVcsSUFBSSxxQkFBTSxDQUFDLGVBQU0sQ0FBQyxZQUFZLEVBQUUsZUFBTSxDQUFDLGNBQWMsRUFBRSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsZUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFGaEcsQ0FBQztJQUluRCxnQ0FBTSxHQUFOO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJO1lBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCw2QkFBRyxHQUFIO1FBQUEsaUJBcUJDO1FBbkJHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2xHLFNBQVMsQ0FDUixVQUFBLFlBQVk7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQUEsaUJBc0JDO1FBckJHLENBQUM7WUFDRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDcEgsU0FBUyxDQUNSLFVBQUEsWUFBWTtnQkFDVixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUNEO2dCQUNFLEtBQUssQ0FBQztvQkFDSixPQUFPLEVBQUUsd0RBQXdEO29CQUNqRSxZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQ0YsQ0FBQTtRQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FDN0IsQ0FBQztZQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXhFUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDN0IsQ0FBQzt5Q0FNcUMsOEJBQWE7T0FKdkMsZUFBZSxDQXlFM0I7SUFBRCxzQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcnRpc3QgfSBmcm9tIFwiLi4vc2hhcmVkL2FydGlzdC9hcnRpc3QubW9kZWxcIlxuaW1wb3J0IHsgQXJ0aXN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aXN0L2FydGlzdC5zZXJ2aWNlXCIgXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwifi9zaGFyZWQvY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJkZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJkZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbQXJ0aXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaXNEZXRhaWwgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aXN0U2VydmljZTogQXJ0aXN0U2VydmljZSl7fVxuXG4gICAgYXJ0aXN0OiBBcnRpc3QgPSBuZXcgQXJ0aXN0KENvbmZpZy5uZXdFbGVtZW50SWQsIENvbmZpZy5uZXdFbGVtZW50TmFtZSwgQ29uZmlnLm5ld0VsZW1lbnRGaW5pc2hlZCwgQ29uZmlnLm5ld0VsZW1lbnRMYXN0QywgQ29uZmlnLm5ld0VsZW1lbnRSYW5rKTtcblxuICAgIHN1Ym1pdCgpXG4gICAge1xuICAgICAgICBpZih0aGlzLmlzRGV0YWlsKSB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBlbHNlIHRoaXMuYWRkKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFkZCgpXG4gICAge1xuICAgICAgICB0aGlzLmFydGlzdFNlcnZpY2UuYWRkKHRoaXMuYXJ0aXN0Lm5hbWUsIHRoaXMuYXJ0aXN0LmZpbmlzaGVkLCB0aGlzLmFydGlzdC5sYXN0YywgdGhpcy5hcnRpc3QucmFuaylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBhcnRpc3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5maW5pc2hlZCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5sYXN0YyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5yYW5rID0gXCJcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QuZmluaXNoZWQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QubGFzdGMgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QucmFuayA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS51cGRhdGUodGhpcy5hcnRpc3QuaWQsdGhpcy5hcnRpc3QubmFtZSwgdGhpcy5hcnRpc3QuZmluaXNoZWQsIHRoaXMuYXJ0aXN0Lmxhc3RjLCB0aGlzLmFydGlzdC5yYW5rKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgYXJ0aXN0T2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGlzdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGlzdC5maW5pc2hlZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpc3QubGFzdGMgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aXN0LnJhbmsgPSBcIlwiO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpc3QuZmluaXNoZWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lmxhc3RjID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGlzdC5yYW5rID0gXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmFydGlzdC5uYW1lLmxlbmd0aDwxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzRGV0YWlsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzRGV0YWlsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG59Il19