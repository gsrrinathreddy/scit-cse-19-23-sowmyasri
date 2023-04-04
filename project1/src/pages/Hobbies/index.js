import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://live.staticflickr.com/5496/11076668126_87d9f7cbaf_b.jpg',
    title: 'Singing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse1.mm.bing.net/th/id/OIP.ITOA4HWW6TzFnPkhbcEtIwHaGV?pid=ImgDet&rs=1',
    title: 'Cooking',
    
  },
  {
    img: 'https://wallpaperaccess.com/full/1382298.png',
    title: 'Photography',
    
  },
  {
    img: 'https://tse4.mm.bing.net/th/id/OIP.u8rh8F0BHOiwDNmBmYc6-gHaFj?pid=ImgDet&w=540&h=405&rs=1',
    title: 'Arts and Crafts',
    
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/originals/fb/8e/cb/fb8ecb390adcc645506735a8c73e86fd.jpg',
    title: 'Dancing',
    
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/originals/83/af/d6/83afd6dbf121b3a029df430e4da16d21.jpg',
    title: 'Fashion Designing',
    
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/R.56cb55c80a082fdd909998bb15fe9002?rik=ohGA%2fpidw0WIWw&riu=http%3a%2f%2fwww.coastaldigest.com%2fsites%2fdefault%2ffiles%2f2018%2f12%2f01%2fAgefraud.jpg&ehk=YOQLwjaVjsrH4tnmzExdx431aZXVNK9INtkDbuDzoug%3d&risl=&pid=ImgRaw&r=0',
    title: 'Badminton',
    
  },
  
];