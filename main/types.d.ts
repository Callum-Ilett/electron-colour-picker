type GradientDirection =
  | "to right"
  | "to right top"
  | "to right bottom"
  | "to bottom"
  | "to left bottom"
  | "to left"
  | "to left top"
  | "to top";

type StoreName = "collections" | "gradients" | "uploads";

interface Gradient {
  id?: string;
  colours: Colour[];
  css: string;
  direction: GradientDirection;
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

interface Palette {
  id?: string;
  colours: Colour[];
}

type Gradients = Gradient[];
type Collections = Collection[];
type Uploads = Upload[];
type Palettes = Palette[];
