export interface RouteItem {
  label: string;
  url: string;
  children?: RouteItem[];
}
