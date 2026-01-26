import { getCollection } from "astro:content";
import { BASE_ARTICLE_PATH, BASE_CASE_STUDY_PATH } from "@/consts";
import type { SimpleRouteObject } from "@/types";

export async function getRouteObjects(): Promise<SimpleRouteObject[]> {
  const articles = (await getCollection("article")).flatMap((item) => ({
    title: item.data.title,
    url: `${BASE_ARTICLE_PATH}/${item.id}`,
  })) as SimpleRouteObject[];
  const caseStudies = (await getCollection("caseStudy")).flatMap((item) => ({
    title: item.data.title,
    url: `${BASE_CASE_STUDY_PATH}/${item.id}`,
  })) as SimpleRouteObject[];
  const contents = (await getCollection("pageContent")).flatMap((item) => ({
    title: item.data.title,
    url: `/${item.id}`,
  })) as SimpleRouteObject[];

  const astroPagesGlob = import.meta.glob("../pages/**/*.astro", {
    eager: true,
  });
  const astroPages: SimpleRouteObject[] = Object.entries(astroPagesGlob).map(
    ([_path, context]) => {
      const typedContext = context as SimpleRouteObject;
      return {
        title: typedContext.title,
        url: typedContext.url === "" ? "/" : typedContext.url,
      };
    },
  );

  return [...articles, ...caseStudies, ...contents, ...astroPages];
}
