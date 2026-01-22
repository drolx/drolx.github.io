export interface RouteItem {
  label: string;
  url: string;
  children?: RouteItem[];
}

export type SkillItem = {
  label: string;
  icon: string;
};
