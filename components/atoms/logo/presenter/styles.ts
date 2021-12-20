import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  logoBox: {
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    height: '30px',
    lineHeight: '20px',
    padding: '10px',

    img: {
      transition: '200ms ease'
    },

    '&:hover img': {
      transform: 'rotate(20deg)'
    }
  }
})