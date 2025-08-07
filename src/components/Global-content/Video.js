import React, { Component } from "react";

export class Video extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
      <div className="videoWrapper">
        <video
          className="body-overlay"
          muted
          autoPlay
          loop
          style={{ opacity: 0.1 }}
          ref={(ref) => (this.videoRef = ref)}
          playsInline
          preload="auto"
        >
          <source src={this.props.video} type="video/mp4" />
        </video>
        {/*<p>View my projects</p>*/}
      </div>
    );
  }
}

export default Video;
