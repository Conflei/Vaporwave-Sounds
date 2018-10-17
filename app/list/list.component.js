"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_model_1 = require("../shared/artist/artist.model");
var artist_service_1 = require("../shared/artist/artist.service");
var router_1 = require("@angular/router");
var config_1 = require("~/shared/config");
var ListComponent = /** @class */ (function () {
    function ListComponent(artistService, router) {
        this.artistService = artistService;
        this.router = router;
        this.artists = [];
        this.artist = new artist_model_1.Artist("", "", "", "", "");
        this.isLoading = false;
        this.listLoaded = false;
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
        console.log("Go TO DETAIL");
        config_1.Config.newElementName = "";
        config_1.Config.newElementFinished = "";
        config_1.Config.newElementLastC = "";
        config_1.Config.newElementRank = "";
        this.router.navigate(["/detail"]);
        /*if (this.artist.name.trim() === "") {
          alert("Enter a artist item");
          return;
        }
      
        // Dismiss the keyboard
        let textField = <TextField>this.artistTextField.nativeElement;
        textField.dismissSoftInput();
      
        this.artistService.add(this.artist.name, this.artist.finished, this.artist.lastc, this.artist.rank)
          .subscribe(
            artistObject => {
              this.artists.unshift(artistObject);
              this.artist.name = "";
              this.artist.finished = "";
              this.artist.lastc = "";
              this.artist.rank = "";
            },
            () => {
              alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
              });
              this.artist.name = "";
              this.artist.finished = "";
              this.artist.lastc = "";
              this.artist.rank = "";
            }
          )*/
    };
    ListComponent.prototype.itemTapped = function (args) {
        var artist = args.object.bindingContext;
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
        __metadata("design:paramtypes", [artist_service_1.ArtistService, router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw4REFBc0Q7QUFDdEQsa0VBQStEO0FBSS9ELDBDQUF3QztBQUN4QywwQ0FBeUM7QUFRekM7SUFRSSx1QkFBb0IsYUFBNEIsRUFBVSxNQUFhO1FBQW5ELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQVB2RSxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQVcsSUFBSSxxQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJc0QsQ0FBQztJQUUxRSxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTthQUN4QixTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3RCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLGVBQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGVBQU0sQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsZUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDNUIsZUFBTSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBNEJLO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUF1QjtRQUNoQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNoRCxlQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDcEMsZUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUMsZUFBTSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLGVBQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixJQUF1QjtRQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQU8sYUFBYSxDQUFDLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqRCxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNyQixXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLElBQXVCO1FBQTlCLGlCQU9DO1FBTkMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUNqQyxTQUFTLENBQUM7WUFDVCxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEY2QjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTswREFBQztJQU5qRCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDN0IsQ0FBQzt5Q0FTcUMsOEJBQWEsRUFBaUIsZUFBTTtPQVI5RCxhQUFhLENBNkZ6QjtJQUFELG9CQUFDO0NBQUEsQUE3RkQsSUE2RkM7QUE3Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFydGlzdCB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aXN0L2FydGlzdC5tb2RlbFwiXG5pbXBvcnQgeyBBcnRpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpc3QvYXJ0aXN0LnNlcnZpY2VcIiBcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIn4vc2hhcmVkL2NvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJnci1saXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdC9saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0L2xpc3QuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtBcnRpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhcnRpc3RzOiBBcnJheTxBcnRpc3Q+ID0gW107XG4gICAgYXJ0aXN0OiBBcnRpc3QgPSBuZXcgQXJ0aXN0KFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJhcnRpc3RUZXh0RmllbGRcIikgYXJ0aXN0VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpc3RTZXJ2aWNlOiBBcnRpc3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpe31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRBcnRpc3RzID0+IHtcbiAgICAgICAgbG9hZGVkQXJ0aXN0cy5mb3JFYWNoKChhcnRpc3RPYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmFydGlzdHMudW5zaGlmdChhcnRpc3RPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUVudHJ5KClcbiAgICB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsXCJdKTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdvIFRPIERFVEFJTFwiKTtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50TmFtZSA9IFwiXCI7XG4gICAgICBDb25maWcubmV3RWxlbWVudEZpbmlzaGVkID0gXCJcIjtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50TGFzdEMgPSBcIlwiO1xuICAgICAgQ29uZmlnLm5ld0VsZW1lbnRSYW5rID0gXCJcIjtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWxcIl0pO1xuICAgICAgLyppZiAodGhpcy5hcnRpc3QubmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBhIGFydGlzdCBpdGVtXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5hcnRpc3RUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgXG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UuYWRkKHRoaXMuYXJ0aXN0Lm5hbWUsIHRoaXMuYXJ0aXN0LmZpbmlzaGVkLCB0aGlzLmFydGlzdC5sYXN0YywgdGhpcy5hcnRpc3QucmFuaylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBhcnRpc3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpc3RzLnVuc2hpZnQoYXJ0aXN0T2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QuZmluaXNoZWQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QubGFzdGMgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QucmFuayA9IFwiXCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LmZpbmlzaGVkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lmxhc3RjID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LnJhbmsgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgKSovXG4gICAgfVxuXG4gICAgaXRlbVRhcHBlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgbGV0IGFydGlzdCA9IDxBcnRpc3Q+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG4gICAgICBDb25maWcubmV3RWxlbWVudE5hbWUgPSBhcnRpc3QubmFtZTtcbiAgICAgIENvbmZpZy5uZXdFbGVtZW50RmluaXNoZWQgPSBhcnRpc3QuZmluaXNoZWQ7XG4gICAgICBDb25maWcubmV3RWxlbWVudExhc3RDID0gYXJ0aXN0Lmxhc3RjO1xuICAgICAgQ29uZmlnLm5ld0VsZW1lbnRSYW5rID0gYXJ0aXN0LnJhbms7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmFydGlzdHMuaW5kZXhPZihhcnRpc3QpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbFwiXSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIFwiK2luZGV4KTtcbiAgICB9XG5cbiAgICBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJkZWxldGUtdmlld1wiKTtcbiAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSAwO1xuICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZShhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgbGV0IGFydGlzdCA9IDxBcnRpc3Q+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UuZGVsZXRlKGFydGlzdC5pZClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnRpc3RzLmluZGV4T2YoYXJ0aXN0KTtcbiAgICAgICAgICB0aGlzLmFydGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==