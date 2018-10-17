import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Artist } from "../shared/artist/artist.model"
import { ArtistService } from "../shared/artist/artist.service" 
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { Router } from "@angular/router"
import { Config } from "~/shared/config";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "gr-list",
    templateUrl: "list/list.component.html",
    styleUrls: ["list/list.component.css"],
    providers: [ArtistService]
})
export class ListComponent implements OnInit {
    artists: Array<Artist> = [];
    artist: Artist = new Artist("", "", "", "", "");
    isLoading = false;
    listLoaded = false;

    @ViewChild("artistTextField") artistTextField: ElementRef;

    constructor(private artistService: ArtistService, private router:Router, private page:Page){
      this.page.on(Page.navigatingToEvent, function(){
        console.log("Im on page again");
       })
    }

    ngOnInit() {
      this.isLoading = true;
      this.artistService.load()
      .subscribe(loadedArtists => {
        loadedArtists.forEach((artistObject) => {
          this.artists.unshift(artistObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
    }

    createEntry()
    {
      this.router.navigate(["/detail"]);
    }

    add() {
      Config.newElementName = "";
      Config.newElementFinished = "";
      Config.newElementLastC = "";
      Config.newElementRank = "";
      this.router.navigate(["/detail"]);
    }

    itemTapped(args: ListViewEventData) {
      let artist = <Artist>args.object.bindingContext;
      Config.newElementId = artist.id
      Config.newElementName = artist.name;
      Config.newElementFinished = artist.finished;
      Config.newElementLastC = artist.lastc;
      Config.newElementRank = artist.rank;
      let index = this.artists.indexOf(artist);
      this.router.navigate(["/detail"]);
      console.log("Item Tapped "+index);
    }

    onSwipeCellStarted(args: ListViewEventData) {
      var swipeLimits = args.data.swipeLimits;
      var swipeView = args.object;
      var rightItem = swipeView.getViewById<View>("delete-view");
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.left = 0;
      swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }
    
    delete(args: ListViewEventData) {
      let artist = <Artist>args.object.bindingContext;
      this.artistService.delete(artist.id)
        .subscribe(() => {
          let index = this.artists.indexOf(artist);
          this.artists.splice(index, 1);
        });
    }
}