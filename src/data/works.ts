export type WorkCategory =
  | "ALL"
  | "CAMERA"
  | "COLOR GRADING"
  | "DIRECTION"
  | "EDITING"
  | "PRODUCTION DESIGN"
  | "WRITING";

export type WorkCategorySlug =
  | "camera"
  | "color-grading"
  | "direction"
  | "editing"
  | "production-design"
  | "writing";

export interface Work {
  id: string;
  slug: string;
  title: string;
  categories: WorkCategory[];
  categorySlugs: WorkCategorySlug[];
  thumbnail: string;
  youtubeId: string;
}

export const CATEGORY_MAP: Record<WorkCategorySlug, WorkCategory> = {
  "camera": "CAMERA",
  "color-grading": "COLOR GRADING",
  "direction": "DIRECTION",
  "editing": "EDITING",
  "production-design": "PRODUCTION DESIGN",
  "writing": "WRITING",
};

export const CATEGORY_SLUG_MAP: Record<WorkCategory, WorkCategorySlug> = {
  "ALL": "direction",
  "CAMERA": "camera",
  "COLOR GRADING": "color-grading",
  "DIRECTION": "direction",
  "EDITING": "editing",
  "PRODUCTION DESIGN": "production-design",
  "WRITING": "writing",
};

export const worksData: Work[] = [
  {
    id: "glaani-short-film",
    slug: "glaani-short-film",
    title: "Glaani – Short Film",
    categories: ["DIRECTION", "EDITING"],
    categorySlugs: ["direction", "editing"],
    thumbnail: "/glaani-thumbnail.png",
    youtubeId: "uUa76ki7bVA",
  },
  {
    id: "binsar-mahadev-documentary",
    slug: "binsar-mahadev-documentary",
    title: "Binsar Mahadev – Documentary",
    categories: ["DIRECTION"],
    categorySlugs: ["direction"],
    thumbnail: "https://img.youtube.com/vi/PtnAPtaYSW0/hqdefault.jpg",
    youtubeId: "PtnAPtaYSW0",
  },
  {
    id: "judgementall-hai-kya-shorts",
    slug: "judgementall-hai-kya-shorts",
    title: "Judgementall Hai Kya | Shorts",
    categories: ["CAMERA", "COLOR GRADING"],
    categorySlugs: ["camera", "color-grading"],
    thumbnail: "https://img.youtube.com/vi/o1N4qSfbmZs/hqdefault.jpg",
    youtubeId: "o1N4qSfbmZs",
  },
  {
    id: "date-with-a-chudail-shorts",
    slug: "date-with-a-chudail-shorts",
    title: "Date With A Chudail – Shorts",
    categories: ["CAMERA", "COLOR GRADING"],
    categorySlugs: ["camera", "color-grading"],
    thumbnail: "https://img.youtube.com/vi/tZ0ZCmkYE0E/hqdefault.jpg",
    youtubeId: "tZ0ZCmkYE0E",
  },
  {
    id: "bhola-tero-naam-official-music-video",
    slug: "bhola-tero-naam-official-music-video",
    title: "Bhola Tero Naam – Official Music Video",
    categories: ["WRITING"],
    categorySlugs: ["writing"],
    thumbnail: "https://img.youtube.com/vi/DQtRUnNVTpA/hqdefault.jpg",
    youtubeId: "DQtRUnNVTpA",
  },
  {
    id: "mathched-short-film",
    slug: "mathched-short-film",
    title: "Mathched! – Short Film",
    categories: ["COLOR GRADING", "EDITING"],
    categorySlugs: ["color-grading", "editing"],
    thumbnail: "https://img.youtube.com/vi/U_J8PfNzcws/hqdefault.jpg",
    youtubeId: "U_J8PfNzcws",
  },
  {
    id: "mera-pahad-mera-himala-official-music-video",
    slug: "mera-pahad-mera-himala-official-music-video",
    title: "Mera Pahad Mera Himala – Official Music Video",
    categories: ["DIRECTION", "EDITING"],
    categorySlugs: ["direction", "editing"],
    thumbnail: "https://img.youtube.com/vi/j6muOiARqJY/hqdefault.jpg",
    youtubeId: "j6muOiARqJY",
  },
  {
    id: "andi-avonte5-technology-tv-commercial",
    slug: "andi-avonte5-technology-tv-commercial",
    title: "Andi Avonte5-Technology – TV Commercial",
    categories: ["EDITING"],
    categorySlugs: ["editing"],
    thumbnail: "https://img.youtube.com/vi/-gyQCzVC-B0/hqdefault.jpg",
    youtubeId: "-gyQCzVC-B0",
  },
  {
    id: "the-farm-life-with-shagun-mehra-trailer",
    slug: "the-farm-life-with-shagun-mehra-trailer",
    title: "The Farm Life With Shagun Mehra | Trailer",
    categories: ["EDITING"],
    categorySlugs: ["editing"],
    thumbnail: "https://img.youtube.com/vi/icgxlxEaQSA/hqdefault.jpg",
    youtubeId: "icgxlxEaQSA",
  },
  {
    id: "when-families-move-houses-sketch",
    slug: "when-families-move-houses-sketch",
    title: "When Families Move Houses – Sketch",
    categories: ["EDITING"],
    categorySlugs: ["editing"],
    thumbnail: "https://img.youtube.com/vi/m72Ue4m-20A/hqdefault.jpg",
    youtubeId: "m72Ue4m-20A",
  },
  {
    id: "tathaastu-official-trailer",
    slug: "tathaastu-official-trailer",
    title: "Tathaastu – Official Trailer",
    categories: ["EDITING"],
    categorySlugs: ["editing"],
    thumbnail: "https://img.youtube.com/vi/TNnLZDkLe0c/hqdefault.jpg",
    youtubeId: "TNnLZDkLe0c",
  },
  {
    id: "india-without-water-production-design",
    slug: "india-without-water-production-design",
    title: "India Without Water – Production Design",
    categories: ["COLOR GRADING", "PRODUCTION DESIGN"],
    categorySlugs: ["color-grading", "production-design"],
    thumbnail: "https://img.youtube.com/vi/VCtK0lqEig4/hqdefault.jpg",
    youtubeId: "VCtK0lqEig4",
  },
  {
    id: "teaser-glaani-short-film",
    slug: "teaser-glaani-short-film",
    title: "Teaser – Glaani ( Short Film)",
    categories: ["DIRECTION", "EDITING"],
    categorySlugs: ["direction", "editing"],
    thumbnail: "/glaani-thumbnail.png",
    youtubeId: "uUa76ki7bVA",
  },
];
