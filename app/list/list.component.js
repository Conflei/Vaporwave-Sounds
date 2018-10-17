"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_model_1 = require("../shared/artist/artist.model");
var artist_service_1 = require("../shared/artist/artist.service");
var router_1 = require("@angular/router");
var config_1 = require("~/shared/config");
var page_1 = require("tns-core-modules/ui/page");
var ListComponent = /** @class */ (function () {
    function ListComponent(artistService, router, page) {
        this.artistService = artistService;
        this.router = router;
        this.page = page;
        this.artists = [];
        this.artist = new artist_model_1.Artist("", "", "", "", "");
        this.isLoading = false;
        this.listLoaded = false;
        this.page.on(page_1.Page.navigatingToEvent, function () {
            console.log("Im on page again");
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.artistService.load()
            .subscribe(function (loadedArtists) {
            loadedArtists.forEach(function (artistObject) {
                _this.artists.unshift(artistObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.createEntry = function () {
        this.router.navigate(["/detail"]);
    };
    ListComponent.prototype.add = function () {
        config_1.Config.newElementName = "";
        config_1.Config.newElementFinished = "";
        config_1.Config.newElementLastC = "";
        config_1.Config.newElementRank = "";
        this.router.navigate(["/detail"]);
    };
    ListComponent.prototype.itemTapped = function (args) {
        var artist = args.object.bindingContext;
        config_1.Config.newElementId = artist.id;
        config_1.Config.newElementName = artist.name;
        config_1.Config.newElementFinished = artist.finished;
        config_1.Config.newElementLastC = artist.lastc;
        config_1.Config.newElementRank = artist.rank;
        var index = this.artists.indexOf(artist);
        this.router.navigate(["/detail"]);
        console.log("Item Tapped " + index);
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    ListComponent.prototype.delete = function (args) {
        var _this = this;
        var artist = args.object.bindingContext;
        this.artistService.delete(artist.id)
            .subscribe(function () {
            var index = _this.artists.indexOf(artist);
            _this.artists.splice(index, 1);
        });
    };
    __decorate([
        core_1.ViewChild("artistTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "artistTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "gr-list",
            templateUrl: "list/list.component.html",
            styleUrls: ["list/list.component.css"],
            providers: [artist_service_1.ArtistService]
        }),
        __metadata("design:paramtypes", [artist_service_1.ArtistService, router_1.Router, page_1.Page])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw4REFBc0Q7QUFDdEQsa0VBQStEO0FBSS9ELDBDQUF3QztBQUN4QywwQ0FBeUM7QUFDekMsaURBQWdEO0FBUWhEO0lBUUksdUJBQW9CLGFBQTRCLEVBQVUsTUFBYSxFQUFVLElBQVM7UUFBdEUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBSztRQVAxRixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQVcsSUFBSSxxQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLakIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTthQUN4QixTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3RCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdB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b0VDO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcnRpc3QgfSBmcm9tIFwiLi4vc2hhcmVkL2FydGlzdC9hcnRpc3QubW9kZWxcIlxuaW1wb3J0IHsgQXJ0aXN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aXN0L2FydGlzdC5zZXJ2aWNlXCIgXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCJ+L3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3QvbGlzdC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0FydGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFydGlzdHM6IEFycmF5PEFydGlzdD4gPSBbXTtcbiAgICBhcnRpc3Q6IEFydGlzdCA9IG5ldyBBcnRpc3QoXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZChcImFydGlzdFRleHRGaWVsZFwiKSBhcnRpc3RUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGlzdFNlcnZpY2U6IEFydGlzdFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBwYWdlOlBhZ2Upe1xuICAgICAgdGhpcy5wYWdlLm9uKFBhZ2UubmF2aWdhdGluZ1RvRXZlbnQsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW0gb24gcGFnZSBhZ2FpblwiKTtcbiAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRBcnRpc3RzID0+IHtcbiAgICAgICAgbG9hZGVkQXJ0aXN0cy5mb3JFYWNoKChhcnRpc3RPYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmFydGlzdHMudW5zaGlmdChhcnRpc3RPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUVudHJ5KClcbiAgICB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsXCJdKTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICBDb25maWcubmV3RWxlbWVudE5hbWUgPSBcIlwiO1xuICAgICAgQ29uZmlnLm5ld0VsZW1lbnRGaW5pc2hlZCA9IFwiXCI7XG4gICAgICBDb25maWcubmV3RWxlbWVudExhc3RDID0gXCJcIjtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50UmFuayA9IFwiXCI7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsXCJdKTtcbiAgICB9XG5cbiAgICBpdGVtVGFwcGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICBsZXQgYXJ0aXN0ID0gPEFydGlzdD5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50SWQgPSBhcnRpc3QuaWRcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50TmFtZSA9IGFydGlzdC5uYW1lO1xuICAgICAgQ29uZmlnLm5ld0VsZW1lbnRGaW5pc2hlZCA9IGFydGlzdC5maW5pc2hlZDtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50TGFzdEMgPSBhcnRpc3QubGFzdGM7XG4gICAgICBDb25maWcubmV3RWxlbWVudFJhbmsgPSBhcnRpc3QucmFuaztcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYXJ0aXN0cy5pbmRleE9mKGFydGlzdCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsXCJdKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgXCIraW5kZXgpO1xuICAgIH1cblxuICAgIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PihcImRlbGV0ZS12aWV3XCIpO1xuICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICBsZXQgYXJ0aXN0ID0gPEFydGlzdD5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbiAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS5kZWxldGUoYXJ0aXN0LmlkKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFydGlzdHMuaW5kZXhPZihhcnRpc3QpO1xuICAgICAgICAgIHRoaXMuYXJ0aXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19