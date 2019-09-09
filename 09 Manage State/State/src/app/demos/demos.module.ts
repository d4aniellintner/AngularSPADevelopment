import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { StatefulComponent } from "./samples/stateful/stateful.component";
import { SimpleDataStoreComponent } from "./samples/simple-data-store/simple-data-store.component";
import { EvtBusComponent } from "./samples/evt-bus/evt-bus.component";
import { VouchersService } from "./samples/voucher.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { VouchersListComponent } from "./samples/simple-data-store/voucher-list/vouchers-list.component";
import { KpiBarComponent } from "./samples/simple-data-store/kpi-bar/kpi-bar.component";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { NgrxVouchersComponent } from "./samples/ngrx-vouchers/ngrx-vouchers.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "stateful", component: StatefulComponent },
      { path: "simpleds", component: SimpleDataStoreComponent },
      { path: "evtbus", component: EvtBusComponent },
      { path: "ngrx", component: NgrxVouchersComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    StatefulComponent,
    SimpleDataStoreComponent,
    EvtBusComponent,
    VouchersListComponent,
    KpiBarComponent,
    MarkdownEditorComponent,
    NgrxVouchersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([CurrencyEffects]),
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [DemoService, VouchersService]
})
export class DemosModule {}
