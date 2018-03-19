import { Component } from "@angular/core";
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Observable } from "rxjs/Observable";

export interface ConfirmDialogResultModel {
    okClicked: boolean;
    cancelClicked: boolean;
}

export interface ConfirmDialogModel {
    title: string;
    message: string;
}

@Component({
    template: require("./confirm-dialog.component.html")
})
export class ConfirmDialogComponent extends SimpleModalComponent<ConfirmDialogModel, ConfirmDialogResultModel>{
    dataModel: ConfirmDialogModel;

    constructor() {
        super();
    }

    okClicked() {
        console.log('ok');
        this.result = {
            okClicked: true,
            cancelClicked: false
        };
        this.close();
    }

    mapDataObject(data: ConfirmDialogModel): void {
        this.dataModel = data;
    }

    /*mapDataObject(data: ConfirmDialogModel): void
        this.dataModel = data;
    }*/

}