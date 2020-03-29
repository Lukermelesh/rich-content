import React from 'react';
import PropTypes from 'prop-types';

export const RCEHelpersPropTypes = {
  rce: PropTypes.shape({
    isViewMode: PropTypes.bool.isRequired,
    setInPluginEditingMode: PropTypes.func,
    helpers: PropTypes.shape({
      onFilesChange: PropTypes.func,
    }),
    theme: PropTypes.object.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
  layout: PropTypes.object.isRequired,
  design: PropTypes.object.isRequired,
};

export const RCEHelpersContext = React.createContext({});

export const withRCEHelpers = WrappedComponent => props => {
  return (
    <RCEHelpersContext.Consumer>
      {({ layout, design, t, ...rest }) => (
        <WrappedComponent {...props} rce={rest} t={t} layout={layout} design={design} />
      )}
    </RCEHelpersContext.Consumer>
  );
};