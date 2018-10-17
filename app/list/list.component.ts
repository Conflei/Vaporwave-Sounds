import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Artist } from "../shared/artist/artist.model"
import { ArtistService } from "../shared/artist/artist.service" 
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { Router } from "@angular/router"
import { Config } from "~/shared/config";

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

    constructor(private artistService: ArtistService, private router:Router){}

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
      console.log("Go TO DETAIL");
      Config.newElementName = "";
      Config.newElementFinished = "";
      Config.newElementLastC = "";
      Config.newElementRank = "";
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
    }

    itemTapped(args: ListViewEventData) {
      let artist = <Artist>args.object.bindingContext;
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