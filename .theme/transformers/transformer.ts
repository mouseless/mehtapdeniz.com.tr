// @ts-ignore
import { defineTransformer } from "@nuxt/content/transformers";

const proseComponents: { [key: string]: boolean } = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  hr: true,
  img: true,
  li: true,
  ul: true,
  ol: true,
  p: true,
  em: true,
  table: true
};

export default defineTransformer({
  name: "learn-transformer",
  extensions: [".md"],
  transform (content: any) {
    const elements: Array<object> = content.body.children.filter((f: any) => proseComponents[f.tag]);

    if(elements.length <= 0) {
      return content;
    }

    elements.forEach((value: object) => {
      const divElement = {
        type: "element",
        tag: "div",
        props: {
          class: "container"
        },
        children: [value]
      };

      const index = content.body.children.findIndex((obj: any) => obj === value);
      content.body.children[index] = divElement;
    });

    return content;
  }
});
