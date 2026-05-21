import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightType]'
})
export class HighlightType implements OnChanges {

  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) { }

  @Input('appHighlightType') type: string = '';
  types: string[] = [
    "Normal Monster",
    "Effect Monster",
    // "Link Monster",
    // "Flip Effect Monster",
    "Spell Card",
  ]

  ngOnChanges(changes: SimpleChanges): void {
    const inList: boolean = this.types.includes(this.type);

    if (inList) this.render.setStyle(this.element.nativeElement, 'background-color', 'red')
  }
}