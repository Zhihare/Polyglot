import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavorites} from '../../Redax/teacherSelector';
import { CardListInform, CardListNothing } from '../Teachers/TeachersPage.styled';
import Card from '../../Components/TeacerCard/Card';



const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);


  return (
  <>
  {favorites.length !== 0 ?
				<CardListInform>
					{favorites.map(e => (
						<Card key={e.avatar_url} teacher={e} />
					))}
				</CardListInform> :
        <CardListNothing>This criteria did not yield any results.</CardListNothing>
      }
  </>
  )
}

export default FavoritePage