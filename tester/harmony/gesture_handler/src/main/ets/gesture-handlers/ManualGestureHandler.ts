import { GestureHandler, GestureHandlerDependencies, IncomingEvent } from '../core';

export class ManualGestureHandler extends GestureHandler {
  constructor(deps: GestureHandlerDependencies) {
    super({...deps, logger: deps.logger.cloneAndJoinPrefix("ManualGestureHandler")})
  }

  public override getName(): string {
    return "ManualGestureHandler"
  }

  public override isGestureContinuous(): boolean {
    return false
  }

  public getDefaultConfig() {
    return {}
  }

  public onPointerDown(event: IncomingEvent): void {
    this.tracker.addToTracker(event);
    super.onPointerDown(event);
    this.begin();
  }

  public onAdditionalPointerAdd(event: IncomingEvent): void {
    this.tracker.addToTracker(event);
    super.onAdditionalPointerAdd(event);
  }

  public onPointerMove(event: IncomingEvent): void {
    this.tracker.track(event);
    super.onPointerMove(event);
  }

  public onPointerOutOfBounds(event: IncomingEvent): void {
    this.tracker.track(event);
    super.onPointerOutOfBounds(event);
  }

  public onPointerUp(event: IncomingEvent): void {
    super.onPointerUp(event);
    this.tracker.removeFromTracker(event.pointerId);
  }

  public onAdditionalPointerRemove(event: IncomingEvent): void {
    super.onAdditionalPointerRemove(event);
    this.tracker.removeFromTracker(event.pointerId);
  }
}
