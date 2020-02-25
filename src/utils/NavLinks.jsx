import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button } from '@material-ui/core';
import { character, episode, location } from '../redux-saga/request_types';
import { connect } from 'react-redux';
import { changeSearchType } from '../redux-saga/actions';

function NavLinks({ searchType, changeSearchType, history }) {

    const onNavClick = (type, to) => {
        history.push(to)
        changeSearchType(type)
    }

    const useStyles = makeStyles({
        root: {
            marginBottom: '3.5%',
            color: 'white'
        },
        button: {
            color: 'inherit',

        }
    });

    const links = () => {
        switch (searchType) {
            case character:
                return (
                    [{ title: 'Search Episodes', type: episode },
                    { title: 'Search Locations', type: location }]
                )
            case episode:
                return (
                    [{ title: 'Search Characters', type: character },
                    { title: 'Search Locations', type: location }]
                )
            case location:
                return (
                    [{ title: 'Search Characters', type: character },
                    { title: 'Search Episodes', type: episode }]
                )
            default:
                return (
                    []
                )
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                orientation="horizontal"
                color="primary"
                aria-label="horizontal contained primary button group"
                variant="text"
            >
                {links().map ?
                    links().map(link =>
                        <Button
                            className={classes.button}
                            onClick={()=>onNavClick(link.type, `/search/${link.type}`)}
                        >
                            {link.title}
                        </Button>)
                    : null}
            </ButtonGroup>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeSearchType: (type) => dispatch(changeSearchType(type))
    };
}


export default connect(null, mapDispatchToProps)(NavLinks)


/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 200,
    width: '10%'
  },
  image: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'theme.palette.common.white',
  },
  imageTitle: {
    position: 'relative',
    color: 'black',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

*/