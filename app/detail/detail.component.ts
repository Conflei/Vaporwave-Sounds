import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Artist } from "../shared/artist/artist.model"
import { ArtistService } from "../shared/artist/artist.service" 
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { Config } from "~/shared/config";

@Component({
    selector: "gr-list",
    templateUrl: "detail/detail.component.html",
    styleUrls: ["detail/detail.component.css"],
    providers: [ArtistService]
})

export class DetailComponent implements OnInit {


    constructor(private artistService: ArtistService){}

    artist: Artist = new Artist("", Config.newElementName, Config.newElementFinished, Config.newElementLastC, Config.newElementRank);

    submit()
    {
        this.artistService.add(this.artist.name, this.artist.finished, this.artist.lastc, this.artist.rank)
        .subscribe(
          artistObject => {
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
        )
    }

    ngOnInit(): void {

        throw new Error("Method not implemented.");
    }
}