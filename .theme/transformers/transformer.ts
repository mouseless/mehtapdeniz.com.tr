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
    content.body.children.forEach((value: any, index: number) => {
      if(proseComponents[value.tag]) {
        const divElement = {
          type: "element",
          tag: "div",
          props: {
            class: "container"
          },
          children: [value]
        };

        content.body.children[index] = divElement;
      }
    });

    return content;
  }
});
