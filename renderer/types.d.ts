declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "use-image-color";

interface Palette {
  id?: string;
  colours: Colour[];
}

interface Gradient {
  id?: string;
  colours: Colour[];
  css: string;
  direction: GradientDirection;
}

interface Contrast {
  status: boolean;
  level: "AA" | "AAA" | undefined;
  size: string;
}

interface Collection {
  type: "Pallete" | "Gradient" | "File Upload";
  id?: string;
  name?: string;

  data: any;
}

interface Upload {
  id?: string;
  fileName: string;
  src: string;
}

type Colour = string;
type Palettes = Palette[];
type Gradients = Gradient[];
type Palettes = Palette[];
type Collections = Collection[];
type Uploads = Upload[];

type GradientDirection =
  | "to right"
  | "to right top"
  | "to right bottom"
  | "to bottom"
  | "to left bottom"
  | "to left"
  | "to left top"
  | "to top";
