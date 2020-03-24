export const POLL_TYPE = 'wix-draft-plugin-poll';

export const LAYOUT = {
  LIST: 'list',
  GRID: 'grid',
};

export const COLOR_PALETTE = ['#cba27d', '#D5D4D4', '#ebba4d', '#0091ff', '#134497', '#82cb7d'];

export const MEMBER_ROLES = {
  ALL: 'ALL',
  VOTERS: 'VOTERS',
  ME: 'ME',
  SITE_MEMBERS: 'SITE_MEMBERS',
};

export const DEFAULT_COMPONENT_DATA = {
  config: {
    alignment: 'center',
    size: 'large',
    width: 'full-width',
  },
  poll: {
    id: '',
    chosen: [],
    title: null,
    imageUrl: null,
    settings: {
      multipleChoice: false,
      secret: false,
      roleVote: MEMBER_ROLES.ALL,
      roleView: MEMBER_ROLES.VOTERS,
      type: 'CUSTOM',
    },
    options: [
      {
        title: null,
        imageUrl: null,
      },
      {
        title: null,
        imageUrl: null,
      },
    ],
  },
  layout: {
    type: LAYOUT.LIST,
    enableImage: false,
  },
  design: {
    backgroundColor: COLOR_PALETTE[2],
  },
};
