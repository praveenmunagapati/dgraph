import React from 'react';
import classnames from 'classnames';

import { getShareURL } from '../containers/Helpers';

const FrameHeader = ({
  frame, shareId, shareHidden, isFullscreen, onShare, onToggleFullscreen,
  onDiscardFrame, saveShareURLRef
}) => {
  const shareURLValue = shareId ? getShareURL(shareId) : '';

  return (
    <div className="header">
      <div className="actions">
        <a
          href="#share"
          className="action"
          onClick={onShare}
        >
          <i className="fa fa-share-alt" />
        </a>
        <input
          type="text"
          value={shareURLValue}
          className={classnames('share-url-holder', { shared: Boolean(shareId) && !shareHidden })}
          ref={saveShareURLRef}
          onClick={(e) => {
            e.target.select();
          }}
          onKeyUp={(e) => {
            e.target.select();
          }}
        />

        <a
          href="#fullscreen-toggle"
          className="action"
          onClick={(e) => {
            e.preventDefault();
            onToggleFullscreen();
          }}
        >
          {isFullscreen ?
            <i className="fa fa-compress" /> :
            <i className="fa fa-expand" />}

        </a>

        {!isFullscreen ?
          <a
            href="#discard"
            className="action"
            onClick={(e) => {
              e.preventDefault();
              onDiscardFrame(frame.id)
            }}
          >
            <i className="fa fa-close" />
          </a> : null}
      </div>
    </div>
  );
};
export default FrameHeader;