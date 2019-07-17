import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import StarRate from '@material-ui/icons/StarRounded';
import Typography from '@material-ui/core/Typography';

const Cards = (props) => {
  const clickHendler = ({ id }) => {
    props.makeUserFavorite(id);
  };
  return (
    <>
      {props.match.path === '/favorite' && props.user && props.user.map((item) => {
        if (item.isFavorite === true) {
          return (
            <Card key={item.id}>
              <CardContent style={{ display: 'Flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography color="textSecondary" gutterBottom>
                  {item.name}
                </Typography>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.phone}
                  </Typography>
                </CardContent>
                <CardActions>
                  <StarRate style={{ color: item.isFavorite ? 'yellow' : 'grey' }} onClick={() => clickHendler(item)} />
                </CardActions>
              </CardContent>
            </Card>
          );
        }
        return null;
      })}
      {props.match.path === '/' && props.user && props.user.map(item => (
        <Card key={item.id}>
          <CardContent style={{ display: 'Flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              {item.name}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.phone}
              </Typography>
            </CardContent>
            <CardActions>
              <StarRate style={{ color: item.isFavorite ? 'yellow' : 'grey' }} onClick={() => clickHendler(item)} />
            </CardActions>
          </CardContent>
        </Card>
      )) }


    </>
  );
};


export default Cards;
