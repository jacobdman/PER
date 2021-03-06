import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import leadership_camp from '../../assets/pdfs/leadership_camp.pdf';
import debate_camp from '../../assets/pdfs/debate_camp.pdf';
import the_12_patterns from '../../assets/pdfs/the_12_patterns.pdf';

const styles = theme => ({
  root: {
    ...theme.root,
  },
  pdf: {
    marginBottom: 50,
  },
});

const PDFView = ({ classes, match }) => {
  const [src, setSrc] = useState(
    match.params.pdf === 'leadership_camp'
      ? leadership_camp
      : match.params.pdf === 'debate_camp'
      ? debate_camp
      : the_12_patterns
  );
  return (
    <div className={classes.root}>
      <embed className={classes.pdf} width="800" height="1500" src={src} />
    </div>
  );
};

PDFView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(PDFView));
