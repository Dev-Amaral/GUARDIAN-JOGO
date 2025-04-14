const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.gamepad,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Tween,
		C3.Behaviors.Timer,
		C3.Plugins.Timeline,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Fade,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Behaviors.Sin,
		C3.Behaviors.Rotate,
		C3.Behaviors.destroy,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.gamepad.Cnds.IsButtonDown,
		C3.Plugins.gamepad.Cnds.CompareAxis,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.ImageWidth,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.gamepad.Cnds.OnButtonDown,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Tween.Exps.Value,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Timeline.Acts.StopAllTimelines,
		C3.Behaviors.Timer.Acts.StopTimer,
		C3.Plugins.Timeline.Acts.PlayTimeline,
		C3.Plugins.Timeline.Exps.TotalTime,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.TiledBg.Acts.SetAngle,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.TiledBg.Acts.SetImageOffsetY,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.choose,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Rotate.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Timeline.Cnds.IsPlayingByTags,
		C3.Plugins.Timeline.Cnds.OnTimelineFinishedByTags,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.RemoveFromParent,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.Rotate.Acts.SetEnabled,
		C3.Behaviors.solid.Cnds.IsEnabled,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Gamepad: 0},
	{Keyboard: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Tween: 0},
	{Timer: 0},
	{GameManager: 0},
	{Timeline: 0},
	{Fade: 0},
	{TextFont: 0},
	{JumpingDust: 0},
	{LandingDust: 0},
	{Attack: 0},
	{Platform: 0},
	{PlayerCollision: 0},
	{PlayerGraphics: 0},
	{SmallExplosion: 0},
	{WalkingDust: 0},
	{SwordSlash: 0},
	{BackgroundColor: 0},
	{Solid: 0},
	{Ground: 0},
	{BackgroundDetails: 0},
	{IDName: 0},
	{BossBackArm: 0},
	{BossChest: 0},
	{Detonate: 0},
	{Trail: 0},
	{BossFrontArm: 0},
	{Blink: 0},
	{ShootFireBall: 0},
	{BossHead: 0},
	{BossHips: 0},
	{BigExplosion: 0},
	{Recharge: 0},
	{BreakableBlock: 0},
	{EnergyBeam: 0},
	{Explosion: 0},
	{Bullet: 0},
	{EyeFire: 0},
	{EyeFlash: 0},
	{Fan: 0},
	{Sine: 0},
	{FireBall: 0},
	{FireBallTrail: 0},
	{FrontArmTrail: 0},
	{Rotate: 0},
	{DestroyOutsideLayout: 0},
	{GroundDebri: 0},
	{RoomDoor: 0},
	{TriggerFlash: 0},
	{SineVertical: 0},
	{SineHorizontal: 0},
	{BossMovingParts: 0},
	{GAMEPADDEADZONE: 0},
	{TARGETFRAMERATE: 0},
	{DEFAULTLAYOUTSCALE: 0},
	{InputLeft: 0},
	{InputRight: 0},
	{InputUp: 0},
	{InputDown: 0},
	{HorizontalAxis: 0},
	{VerticalAxis: 0},
	{AxisAngle: 0},
	{CAMERASPEED: 0},
	{CAMERAOFFSETX: 0},
	{CAMERAOFFSETY: 0},
	{Intensity: 0},
	{Duration: 0},
	{AnimationName: 0},
	{EnergyBeamOffset: 0},
	{BossHeath: 0},
	{Strength: 0},
	{CenterX: 0},
	{CenterY: 0},
	{HorizontalRandom: 0},
	{VerticalRandom: 0}
];

self.InstanceType = {
	Gamepad: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Camera: class extends self.ISpriteInstance {},
	GameManager: class extends self.ISpriteInstance {},
	Timeline: class extends self.IInstance {},
	TextFont: class extends self.ISpriteFontInstance {},
	JumpingDust: class extends self.ISpriteInstance {},
	LandingDust: class extends self.ISpriteInstance {},
	PlayerCollision: class extends self.ISpriteInstance {},
	PlayerGraphics: class extends self.ISpriteInstance {},
	SmallExplosion: class extends self.ISpriteInstance {},
	WalkingDust: class extends self.ISpriteInstance {},
	SwordSlash: class extends self.ISpriteInstance {},
	BackgroundColor: class extends self.ITiledBackgroundInstance {},
	Ground: class extends self.ITilemapInstance {},
	BackgroundDetails: class extends self.ISpriteInstance {},
	BossBackArm: class extends self.ISpriteInstance {},
	BossChest: class extends self.ISpriteInstance {},
	BossFrontArm: class extends self.ISpriteInstance {},
	BossHead: class extends self.ISpriteInstance {},
	BossHips: class extends self.ISpriteInstance {},
	BigExplosion: class extends self.ISpriteInstance {},
	BreakableBlock: class extends self.ISpriteInstance {},
	EnergyBeam: class extends self.ITiledBackgroundInstance {},
	Explosion: class extends self.ISpriteInstance {},
	EyeFire: class extends self.ISpriteInstance {},
	EyeFlash: class extends self.ISpriteInstance {},
	Fan: class extends self.ISpriteInstance {},
	FireBall: class extends self.ISpriteInstance {},
	FireBallTrail: class extends self.ISpriteInstance {},
	FrontArmTrail: class extends self.ISpriteInstance {},
	GroundDebri: class extends self.ISpriteInstance {},
	RoomDoor: class extends self.ISpriteInstance {},
	TriggerFlash: class extends self.ISpriteInstance {},
	BossMovingParts: class extends self.ISpriteInstance {}
}