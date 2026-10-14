(() => {
  "use strict";

  const content = window.SITE_CONTENT || {};
  const profile = content.profile || {};
  const page = document.body.dataset.page;
  const root = new URL(document.body.dataset.root || "./", window.location.href);
  const text = (value) => typeof value === "string" || typeof value === "number" ? String(value).trim() : "";
  const pages = [
    { id: "home", label: "Home", path: "./" },
    { id: "publications", label: "Publications", path: "publications/" },
    { id: "teaching", label: "Teaching", path: "teaching/" }
  ];

  const iconPaths = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    moon: '<path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z"/>',
    location: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    institution: '<path d="m3 8 9-5 9 5H3Zm2 3v8m5-8v8m4-8v8m5-8v8M3 21h18"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    github: '<path d="M9 20c-4 1-4-2-6-2m12 4v-4c0-1-.3-2-1-2 4-.5 7-2 7-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2 0-4 2a14 14 0 0 0-8 0C6 3 4 3 4 3a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 4 3 5.5 7 6-.7.5-1 1-1 2v4"/>',
    scholar: '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M8 10v7m4-7h2a3.5 3.5 0 0 1 0 7h-2v-7M8 7h.01"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6M8 13h8m-8 4h6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>'
  };

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = text(value);
    return node;
  }

  function icon(name) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    node.setAttribute("viewBox", "0 0 24 24");
    node.setAttribute("fill", "none");
    node.setAttribute("stroke", "currentColor");
    node.setAttribute("stroke-width", "1.7");
    node.setAttribute("stroke-linecap", "round");
    node.setAttribute("stroke-linejoin", "round");
    node.setAttribute("aria-hidden", "true");
    node.setAttribute("class", "icon");
    node.innerHTML = iconPaths[name] || iconPaths.file;
    return node;
  }

  function safeUrl(value, allowEmail = false) {
    if (!text(value)) return "";
    try {
      const url = new URL(text(value), root);
      const protocols = allowEmail ? ["https:", "http:", "mailto:"] : ["https:", "http:"];
      return protocols.includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  }

  function link(label, href) {
    const node = element("a", "", label);
    node.href = href;
    return node;
  }

  const header = element("div", "header-inner");
  const brand = link(text(profile.name) || "Home", root.href);
  brand.className = "brand";
  if (text(profile.name)) brand.title = text(profile.name);
  if (page === "home") brand.setAttribute("aria-current", "page");
  header.append(brand);
  const nav = element("nav", "primary-nav");
  nav.setAttribute("aria-label", "Main navigation");
  pages.slice(1).forEach((item) => {
    const node = link(item.label, new URL(item.path, root).href);
    if (item.id === page) node.setAttribute("aria-current", "page");
    nav.append(node);
  });
  header.append(nav);

  const themeButton = element("button", "theme-toggle");
  themeButton.type = "button";
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === "dark";
    themeButton.replaceChildren(icon(dark ? "moon" : "sun"));
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeButton.title = dark ? "Switch to light theme" : "Switch to dark theme";
    document.querySelector('meta[name="theme-color"]').content = dark ? "#25282b" : "#ffffff";
  }
  let savedTheme;
  try { savedTheme = localStorage.getItem("academic-site-theme"); } catch { /* Storage can be unavailable. */ }
  setTheme(savedTheme === "dark" ? "dark" : "light");
  themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    try { localStorage.setItem("academic-site-theme", theme); } catch { /* Theme still works without storage. */ }
  });
  header.append(themeButton);
  document.getElementById("site-header").append(header);

  const sidebar = document.getElementById("profile-sidebar");
  const portrait = element("div", "portrait-frame");
  function blankPortrait() {
    const blank = element("div", "portrait-blank");
    blank.setAttribute("role", "img");
    blank.setAttribute("aria-label", "Profile photo left blank");
    portrait.replaceChildren(blank);
  }
  blankPortrait();
  const avatarUrl = safeUrl(profile.avatar);
  if (avatarUrl) {
    const image = element("img", "portrait-image");
    image.alt = text(profile.name) ? `${text(profile.name)} — profile photo` : "Profile photo";
    image.width = 163;
    image.height = 163;
    image.addEventListener("error", blankPortrait, { once: true });
    image.src = avatarUrl;
    portrait.replaceChildren(image);
  }
  sidebar.append(portrait);
  const profileContent = element("div", "profile-content");
  if (text(profile.name)) profileContent.append(element("h2", "profile-name", profile.name));
  else {
    const nameBlank = element("div", "profile-empty");
    nameBlank.setAttribute("aria-hidden", "true");
    nameBlank.append(element("span", "blank-line name-blank"));
    profileContent.append(nameBlank);
  }
  if (text(profile.bio)) profileContent.append(element("p", "profile-bio", profile.bio));
  else {
    const bioBlank = element("div", "profile-empty");
    bioBlank.setAttribute("aria-hidden", "true");
    bioBlank.append(element("span", "blank-line bio-blank"));
    profileContent.append(bioBlank);
  }
  sidebar.append(profileContent);

  const details = element("ul", "profile-details");
  details.id = "profile-contacts";
  function detail(value, iconName, href) {
    if (!text(value)) return;
    const row = element("li");
    const target = href ? link("", href) : row;
    target.append(icon(iconName), element("span", "", value));
    if (href) row.append(target);
    details.append(row);
  }
  detail(profile.location, "location");
  detail(profile.affiliation, "institution");
  if (text(profile.email)) detail(profile.email, "email", safeUrl(`mailto:${text(profile.email)}`, true));
  [["orcid", "ORCID"], ["github", "GitHub"], ["scholar", "Google Scholar"], ["cv", "CV"]].forEach(([field, label]) => {
    const href = safeUrl(profile[field]);
    if (href) detail(label, field === "cv" ? "file" : field, href);
  });
  if (details.children.length) {
    const contacts = element("div", "contacts");
    const toggle = element("button", "contact-toggle", "Contact");
    toggle.type = "button";
    toggle.setAttribute("aria-controls", details.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.append(icon("chevron"));
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(expanded));
      contacts.classList.toggle("is-open", expanded);
    });
    contacts.append(toggle, details);
    sidebar.append(contacts);
  }

  function appendInlineLinks(node, value) {
    const source = text(value);
    const pattern = /\[([^\]\n]+)\]\(([^\s)]+)\)/g;
    let cursor = 0;
    for (const match of source.matchAll(pattern)) {
      node.append(document.createTextNode(source.slice(cursor, match.index)));
      const href = safeUrl(match[2], true);
      node.append(href ? link(match[1], href) : document.createTextNode(match[1]));
      cursor = match.index + match[0].length;
    }
    node.append(document.createTextNode(source.slice(cursor)));
  }

  function paragraphs(id, values, list = false) {
    const mount = document.getElementById(id);
    const entries = Array.isArray(values) ? values.filter((value) => text(value)) : [];
    if (!mount || !entries.length) return;
    const target = list ? element("ul") : mount;
    mount.replaceChildren();
    entries.forEach((value) => {
      const paragraph = element(list ? "li" : "p");
      appendInlineLinks(paragraph, value);
      target.append(paragraph);
    });
    if (list) mount.append(target);
  }
  paragraphs("about-content", content.about);
  paragraphs("research-content", content.research);
  paragraphs("service-content", content.service, true);

  function records(id, values, teaching = false) {
    const mount = document.getElementById(id);
    const entries = Array.isArray(values) ? values.filter((item) => item && text(item.title)) : [];
    if (!mount || !entries.length) return;
    mount.replaceChildren();
    entries.forEach((item) => {
      const article = element("article", "record");
      const heading = element("h2");
      const href = safeUrl(item.url);
      heading.append(href ? link(item.title, href) : document.createTextNode(text(item.title)));
      article.append(heading);
      if (teaching) {
        const metadata = element("p", "record-metadata");
        if (text(item.role)) metadata.append(document.createTextNode(text(item.role)));
        if (text(item.institution)) {
          if (metadata.childNodes.length) metadata.append(document.createTextNode(", "));
          metadata.append(element("em", "", item.institution));
        }
        if (text(item.year)) {
          if (metadata.childNodes.length) metadata.append(document.createTextNode(", "));
          metadata.append(document.createTextNode(text(item.year)));
        }
        if (metadata.childNodes.length) article.append(metadata);
      } else {
        if (text(item.authors)) {
          const authors = element("p", "record-authors");
          const highlightedAuthor = text(item.highlightAuthor);
          text(item.authors).split(/(,\s*|\s+and\s+)/).forEach((part) => {
            authors.append(highlightedAuthor && part.trim() === highlightedAuthor
              ? element("ins", "", part)
              : document.createTextNode(part));
          });
          article.append(authors);
        }
        const venue = [text(item.venue), text(item.year)].filter(Boolean).join(", ");
        if (venue) article.append(element("p", "record-metadata", venue));
      }
      const descriptions = Array.isArray(item.description) ? item.description : [item.description];
      descriptions.filter((value) => text(value)).forEach((value) => article.append(element("p", "", value)));
      if (Array.isArray(item.links)) {
        const links = element("div", "record-links");
        item.links.forEach((itemLink) => {
          if (!itemLink) return;
          const url = safeUrl(itemLink.url);
          if (url && text(itemLink.label)) links.append(link(itemLink.label, url));
        });
        if (links.children.length) article.append(links);
      }
      mount.append(article);
    });
  }
  records("publications-content", content.publications);
  records("teaching-content", content.teaching, true);

  const footer = element("div", "footer-inner");
  const footerNav = element("nav", "footer-nav");
  footerNav.setAttribute("aria-label", "Footer navigation");
  pages.forEach((item) => footerNav.append(link(item.label, new URL(item.path, root).href)));
  footer.append(footerNav);
  const githubUrl = safeUrl(profile.github);
  if (githubUrl) {
    const social = element("p", "footer-social");
    const githubLink = link("", githubUrl);
    githubLink.append(icon("github"), document.createTextNode(" GitHub"));
    social.append(document.createTextNode("Follow: "), githubLink);
    footer.append(social);
  }
  footer.append(element("p", "", `© ${new Date().getFullYear()}${text(profile.name) ? ` ${text(profile.name)}` : ""}.`));
  const credit = element("p", "");
  credit.append(document.createTextNode("Design inspired by "), link("AcademicPages", "https://academicpages.github.io/"), document.createTextNode("."));
  footer.append(credit);
  if (text(content.updated)) footer.append(element("p", "", `Site last updated ${text(content.updated)}`));
  document.getElementById("site-footer").append(footer);
  if (text(profile.name)) document.title += ` — ${text(profile.name)}`;
})();
