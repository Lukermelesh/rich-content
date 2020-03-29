import React, { PureComponent } from 'react';

import { withRCEHelpers } from '../rce-helpers-context';

import { VotedUsersProps } from './types';

import styles from './voted-users.scss';

class VotedUsersComponent extends PureComponent {
  static propTypes = {
    ...VotedUsersProps,
  };

  getSiteMember(id) {
    return this.props.siteMembers.find(siteMember => siteMember.siteMemberId === id);
  }

  getSiteMembers() {
    if (!this.props.showVoters || !this.props.siteMembers) {
      return [];
    }

    return this.props.option.latest.map(this.getSiteMember.bind(this));
  }

  render() {
    const { option, t, showResults } = this.props;

    if (!showResults || !option.latest?.length) {
      return null;
    }

    return (
      <div className={styles.container}>
        <ul className={styles.avatar_list}>
          {this.getSiteMembers().map(member => (
            <li
              key={member.siteMemberId}
              className={styles.avatar}
              style={{ backgroundImage: `url('${member.imageUrl}')` }}
            />
          ))}
        </ul>
        <span>{t('Poll_Viewer_VoteCount', { number: option.count })}</span>
      </div>
    );
  }
}

export const VotedUsers = withRCEHelpers(VotedUsersComponent);
