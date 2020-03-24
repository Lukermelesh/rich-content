import React, { PureComponent } from 'react';

import { TextField } from '../text-field';
import { withPoll, PollContextPropTypes } from '../poll-context';
import { withRCEHelpers, RCEHelpersPropTypes } from '../rce-helpers-context';
import { ImageUpload } from '../image-upload';

import styles from './poll-header.scss';

class PollHeaderComponent extends PureComponent {
  render() {
    const { poll, changePollTitle, changePollImage, layout } = this.props;

    return (
      <div className={styles.header}>
        <TextField
          textAutoResize
          className={styles.title}
          value={poll.title}
          onChange={changePollTitle}
          placeholder="Type your question here..."
        />
        {layout.enableImage && (
          <ImageUpload className={styles.image} value={poll.imageUrl} onChange={changePollImage} />
        )}
      </div>
    );
  }
}

export const PollHeader = withRCEHelpers(withPoll(PollHeaderComponent));

PollHeaderComponent.propTypes = {
  ...PollContextPropTypes,
  ...RCEHelpersPropTypes,
};
