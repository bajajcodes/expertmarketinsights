export function templating(description: string, type: "mailto" | "tel") {
  return description
    .split(/\s/g)
    .map((e) => {
      if (!e.startsWith("<>")) return e;
      const str = e.replaceAll("<>", "");
      return `<a class="template-text" href="${type}:${str}">${str}</a>`;
    })
    .join(" ");
}
