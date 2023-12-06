import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "single-month",
  templateUrl: "./month.component.html",
  styleUrls: ["./month.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MonthComponent {
  @Input() public month!: any;

  public identify(index: number, item: any): any {
    return item?.name ?? index;
  }
}
