"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_1 = require("../config");
var artist_model_1 = require("./artist.model");
var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
    }
    ArtistService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
            var artistList = [];
            data.forEach(function (artist) {
                artistList.push(new artist_model_1.Artist(artist._id, artist.Name));
            });
            return artistList;
        }), operators_1.catchError(this.handleErrors));
    };
    ArtistService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
            return new artist_model_1.Artist(data._id, name);
        }), operators_1.catchError(this.handleErrors));
    };
    ArtistService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.catchError(this.handleErrors));
    };
    ArtistService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    ArtistService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    ArtistService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ArtistService);
    return ArtistService;
}());
exports.ArtistService = ArtistService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnRpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsNkJBQWtDO0FBQ2xDLDRDQUFzRDtBQUV0RCxvQ0FBbUM7QUFDbkMsK0NBQXdDO0FBR3hDO0lBR0ksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLFlBQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztJQUVsQyxDQUFDO0lBRW5DLDRCQUFJLEdBQUo7UUFDSSwwR0FBMEc7UUFDMUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxFQUN0QixlQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0osSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO2dCQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCwyQkFBRyxHQUFILFVBQUksSUFBWTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3ZDLENBQUMsSUFBSSxDQUNGLGVBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsRUFDdEIsZUFBRyxDQUFDLFVBQUEsSUFBSTtZQUNKLE1BQU0sQ0FBQyxJQUFJLHFCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUN2QixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDLElBQUksQ0FDRixlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLHNCQUFVLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBNURRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSTtPQUhyQixhQUFhLENBNkR6QjtJQUFELG9CQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBBcnRpc3QgfSBmcm9tIFwiLi9hcnRpc3QubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFydGlzdFNlcnZpY2Uge1xuICAgIGJhc2VVcmwgPSBDb25maWcuYXBpVXJsICsgXCJhcHBkYXRhL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL0dyb2Nlcmllc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIC8vIEtpbnZleS1zcGVjaWZpYyBzeW50YXggdG8gc29ydCB0aGUgZ3JvY2VyaWVzIGJ5IGxhc3QgbW9kaWZpZWQgdGltZS4gRG9u4oCZdCB3b3JyeSBhYm91dCB0aGUgZGV0YWlscyBoZXJlLlxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuYXBwZW5kKFwic29ydFwiLCBcIntcXFwiX2ttZC5sbXRcXFwiOiAxfVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFydGlzdExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGFydGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcnRpc3RMaXN0LnB1c2gobmV3IEFydGlzdChhcnRpc3QuX2lkLCBhcnRpc3QuTmFtZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnRpc3RMaXN0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLFxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnRpc3QoZGF0YS5faWQsIG5hbWUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsICsgXCIvXCIgKyBpZCxcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvciAodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIktpbnZleSBcIiArIENvbmZpZy50b2tlbik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19