export type Tag = number

export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface View {
  getTag(): Tag

  isPositionInBounds({x, y}: {
    x: number;
    y: number
  }): boolean

  getBoundingRect(): BoundingBox

  hasButtonRole(): boolean
}
