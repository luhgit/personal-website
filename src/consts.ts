import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Amit Tyagi",
  DESCRIPTION:  "Applied AI scientist (10+ yrs). I design datasets & evaluation pipelines and build multilingual clinical note systems — with hands-on distributed training and real-world safety/compliance.",
  AUTHOR: "Amit Tyagi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Where I've worked and what I delivered.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Curated posts. For the full archive and email updates, visit my Substack.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects with short write-ups and links.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Find posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/",
  },
  { 
    TEXT: "Work", 
    HREF: "/work",
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog",
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "amit-de",
    HREF: "https://www.linkedin.com/in/amit-de/",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "luhgit",
    HREF: "https://github.com/luhgit"
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "amit_tyagi",
    HREF: "https://twitter.com/amit_tyagi",
  },
]

