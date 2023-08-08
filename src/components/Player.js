import React from "react";

export default function Player() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="player">
              <div className="player__meta">
                <div className="player__song text-white">Queenie Eye</div>
                <div className="player__artist text-white">Paul McCartney — New</div>
              </div>
              <div
                className="player__bg"
                style={{
                  backgroundImage:
                    "url(https://c.saavncdn.com/222/Bhediya-Hindi-2022-20230616085155-500x500.jpg)",
                }}
              />
              <div className="player__controls">
                <div className="player__controls-bg" />
                <div className="player__repeat">
                  <div className=" fa-solid fa-repeat" />
                </div>
                <div className="player__prev">
                  <div className="player__icon fa-solid fa-backward" />
                </div>
                <div className="player__play">
                  <div className="player__icon fa-solid fa-play" />
                </div>
                <div className="player__next">
                  <div className="player__icon fa-solid fa-forward" />
                </div>
                <div className="player__shuffle">
                  <div className=" fa-solid fa-shuffle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
