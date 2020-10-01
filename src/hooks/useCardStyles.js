import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles({
  root: {
    marginBottom: '3px',
    boxShadow: 'none',
    '&$expanded': {
      margin: '0 0 3px 0',
    },
  },
  expanded: {},
  header: {
    backgroundColor: '#737373',
    color: '#F6F6F6',
    fontWeight: 700,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#005FB2',
  },
  warning: {
    backgroundColor: '#FFB75D',
    color: '#4f4f4f',
  },
  summaryRoot: {
    height: '3.5rem',
    '&$expanded': {
      minHeight: '3.5rem',
    },
  },
  arrow: {
    color: '#F6F6F6',
  },
  summaryContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
  detailsRoot: {
    padding: 16,
    fontSize: '.8rem',
  },
});

export default useCardStyles;
