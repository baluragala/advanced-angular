import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<object>, propName: string, q: string): any {
    const filtered = value.filter(
      o => o[propName].search(new RegExp(q, "i")) !== -1
    );
    console.log(filtered);
    return filtered;
  }
}
