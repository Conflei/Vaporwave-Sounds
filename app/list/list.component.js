"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_model_1 = require("../shared/artist/artist.model");
var artist_service_1 = require("../shared/artist/artist.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(artistService) {
        this.artistService = artistService;
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
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.artist.name.trim() === "") {
            alert("Enter a artist item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.artistTextField.nativeElement;
        textField.dismissSoftInput();
        this.artistService.add(this.artist.name, this.artist.finished, this.artist.lastc, this.artist.rank)
            .subscribe(function (artistObject) {
            _this.artists.unshift(artistObject);
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
    ListComponent.prototype.itemTapped = function (args) {
        var artist = args.object.bindingContext;
        var index = this.artists.indexOf(artist);
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
        __metadata("design:paramtypes", [artist_service_1.ArtistService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw4REFBc0Q7QUFDdEQsa0VBQStEO0FBVy9EO0lBUUksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUGhELFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBVyxJQUFJLHFCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUkrQixDQUFDO0lBRW5ELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGFBQWE7WUFDdEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkJBQUcsR0FBSDtRQUFBLGlCQThCQztRQTdCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7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dkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUM3QixDQUFDO3lDQVNxQyw4QkFBYTtPQVJ2QyxhQUFhLENBNkV6QjtJQUFELG9CQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFydGlzdCB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aXN0L2FydGlzdC5tb2RlbFwiXG5pbXBvcnQgeyBBcnRpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpc3QvYXJ0aXN0LnNlcnZpY2VcIiBcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZ3ItbGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3QvbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdC9saXN0LmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbQXJ0aXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXJ0aXN0czogQXJyYXk8QXJ0aXN0PiA9IFtdO1xuICAgIGFydGlzdDogQXJ0aXN0ID0gbmV3IEFydGlzdChcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKFwiYXJ0aXN0VGV4dEZpZWxkXCIpIGFydGlzdFRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aXN0U2VydmljZTogQXJ0aXN0U2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZEFydGlzdHMgPT4ge1xuICAgICAgICBsb2FkZWRBcnRpc3RzLmZvckVhY2goKGFydGlzdE9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXJ0aXN0cy51bnNoaWZ0KGFydGlzdE9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgaWYgKHRoaXMuYXJ0aXN0Lm5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBhcnRpc3QgaXRlbVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuYXJ0aXN0VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgIFxuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLmFkZCh0aGlzLmFydGlzdC5uYW1lLCB0aGlzLmFydGlzdC5maW5pc2hlZCwgdGhpcy5hcnRpc3QubGFzdGMsIHRoaXMuYXJ0aXN0LnJhbmspXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgYXJ0aXN0T2JqZWN0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0cy51bnNoaWZ0KGFydGlzdE9iamVjdCk7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LmZpbmlzaGVkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0Lmxhc3RjID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0LnJhbmsgPSBcIlwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5maW5pc2hlZCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5sYXN0YyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFydGlzdC5yYW5rID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpdGVtVGFwcGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICBsZXQgYXJ0aXN0ID0gPEFydGlzdD5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYXJ0aXN0cy5pbmRleE9mKGFydGlzdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIFwiK2luZGV4KTtcbiAgICB9XG5cbiAgICBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJkZWxldGUtdmlld1wiKTtcbiAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSAwO1xuICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZShhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgbGV0IGFydGlzdCA9IDxBcnRpc3Q+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UuZGVsZXRlKGFydGlzdC5pZClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnRpc3RzLmluZGV4T2YoYXJ0aXN0KTtcbiAgICAgICAgICB0aGlzLmFydGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==