import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListComponent } from "./list.component";
import { HomeComponent } from "~/home/home.component";

const routes: Routes = [
    { path: "", component: ListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListRoutingModule { }
