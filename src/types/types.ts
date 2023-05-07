export type techTypes = { id: number; name: string; src: string }[];
export type projectTypes = {
  id: number | string;
  name: string;
  bg_src: string;
  type: string;
  description: string;
  Tools?: { name: string; tool_img: string }[];
  live_url: string;
  git_url: string;
  noTry?: boolean;
};

export type themeing = {
  bg: string;
  color: string;
  white: string;
  black: string;
};
