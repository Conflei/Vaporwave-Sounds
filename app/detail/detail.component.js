"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_model_1 = require("../shared/artist/artist.model");
var artist_service_1 = require("../shared/artist/artist.service");
var config_1 = require("~/shared/config");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(artistService) {
        this.artistService = artistService;
        this.artist = new artist_model_1.Artist("", config_1.Config.newElementName, config_1.Config.newElementFinished, config_1.Config.newElementLastC, config_1.Config.newElementRank);
    }
    DetailComponent.prototype.submit = function () {
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
    DetailComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsOERBQXNEO0FBQ3RELGtFQUErRDtBQUkvRCwwQ0FBeUM7QUFTekM7SUFHSSx5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFaEQsV0FBTSxHQUFXLElBQUkscUJBQU0sQ0FBQyxFQUFFLEVBQUUsZUFBTSxDQUFDLGNBQWMsRUFBRSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsZUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFGL0UsQ0FBQztJQUluRCxnQ0FBTSxHQUFOO1FBQUEsaUJBcUJDO1FBbkJHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2xHLFNBQVMsQ0FDUixVQUFBLFlBQVk7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBRUksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFqQ1EsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzdCLENBQUM7eUNBS3FDLDhCQUFhO09BSHZDLGVBQWUsQ0FrQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXJ0aXN0IH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpc3QvYXJ0aXN0Lm1vZGVsXCJcbmltcG9ydCB7IEFydGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2FydGlzdC9hcnRpc3Quc2VydmljZVwiIFxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIn4vc2hhcmVkL2NvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJnci1saXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiZGV0YWlsL2RldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0FydGlzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpc3RTZXJ2aWNlOiBBcnRpc3RTZXJ2aWNlKXt9XG5cbiAgICBhcnRpc3Q6IEFydGlzdCA9IG5ldyBBcnRpc3QoXCJcIiwgQ29uZmlnLm5ld0VsZW1lbnROYW1lLCBDb25maWcubmV3RWxlbWVudEZpbmlzaGVkLCBDb25maWcubmV3RWxlbWVudExhc3RDLCBDb25maWcubmV3RWxlbWVudFJhbmspO1xuXG4gICAgc3VibWl0KClcbiAgICB7XG4gICAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS5hZGQodGhpcy5hcnRpc3QubmFtZSwgdGhpcy5hcnRpc3QuZmluaXNoZWQsIHRoaXMuYXJ0aXN0Lmxhc3RjLCB0aGlzLmFydGlzdC5yYW5rKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGFydGlzdE9iamVjdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LmZpbmlzaGVkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lmxhc3RjID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LnJhbmsgPSBcIlwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5maW5pc2hlZCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5sYXN0YyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5yYW5rID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG59Il19