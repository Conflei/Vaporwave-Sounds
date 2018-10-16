"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_service_1 = require("../shared/artist/artist.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(artistService) {
        this.artistService = artistService;
        this.artists = [];
        this.artist = "";
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
        if (this.artist.trim() === "") {
            alert("Enter a artist item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.artistTextField.nativeElement;
        textField.dismissSoftInput();
        this.artistService.add(this.artist)
            .subscribe(function (artistObject) {
            _this.artists.unshift(artistObject);
            _this.artist = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.artist = "";
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrRUFBK0Q7QUFXL0Q7SUFRSSx1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFQaEQsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUkrQixDQUFDO0lBRW5ELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGFBQWE7WUFDdEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkJBQUcsR0FBSDtRQUFBLGlCQXdCQztRQXZCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixVQUFBLFlBQVk7WUFDVixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQ0Q7WUFDRSxLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLElBQXVCO1FBQ3hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxhQUFhLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sSUFBdUI7UUFBOUIsaUJBT0M7UUFOQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQ2pDLFNBQVMsQ0FBQztZQUNULElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExRDZCO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzBEQUFDO0lBTmpELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUM3QixDQUFDO3lDQVNxQyw4QkFBYTtPQVJ2QyxhQUFhLENBaUV6QjtJQUFELG9CQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFydGlzdCB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aXN0L2FydGlzdC5tb2RlbFwiXG5pbXBvcnQgeyBBcnRpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpc3QvYXJ0aXN0LnNlcnZpY2VcIiBcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZ3ItbGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3QvbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdC9saXN0LmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbQXJ0aXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXJ0aXN0czogQXJyYXk8QXJ0aXN0PiA9IFtdO1xuICAgIGFydGlzdCA9IFwiXCI7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZChcImFydGlzdFRleHRGaWVsZFwiKSBhcnRpc3RUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGlzdFNlcnZpY2U6IEFydGlzdFNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRBcnRpc3RzID0+IHtcbiAgICAgICAgbG9hZGVkQXJ0aXN0cy5mb3JFYWNoKChhcnRpc3RPYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmFydGlzdHMudW5zaGlmdChhcnRpc3RPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgIGlmICh0aGlzLmFydGlzdC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBhIGFydGlzdCBpdGVtXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5hcnRpc3RUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgXG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UuYWRkKHRoaXMuYXJ0aXN0KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGFydGlzdE9iamVjdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFydGlzdHMudW5zaGlmdChhcnRpc3RPYmplY3QpO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QgPSBcIlwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hcnRpc3QgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PihcImRlbGV0ZS12aWV3XCIpO1xuICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICBsZXQgYXJ0aXN0ID0gPEFydGlzdD5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbiAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS5kZWxldGUoYXJ0aXN0LmlkKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFydGlzdHMuaW5kZXhPZihhcnRpc3QpO1xuICAgICAgICAgIHRoaXMuYXJ0aXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19