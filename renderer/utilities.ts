export function withProperties<A, B>(component: A, properties: B): A & B {
  Object.keys(properties).forEach((key) => {
    (component as any)[key] = (properties as any)[key];
  });
  return component as A & B;
}

export const group = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size)
  );
