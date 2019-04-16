import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "zl-text",
  template: `
    <h2>
      {{ data.title }}
    </h2>
    <h4>{{ data.subtitle }}</h4>
  `,
  styles: []
})
export class TextComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
