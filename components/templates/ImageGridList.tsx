import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }),
);

type Props = {
    children?: React.ReactNode
    className?: string,
    imageData:any
  }

export const ImageGridList = function ImageGridList(props:Props) {
  const classes = useStyles();

  const imageData = props.imageData;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {imageData.map((tile:any) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <Image src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}