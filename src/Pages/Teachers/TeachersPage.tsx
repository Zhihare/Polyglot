import React, { useEffect } from 'react'
import FilterTeachers from '../../Components/TeachersFilter/Filter'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectLoadPage, selectLoading, selectTeachers } from '../../Redax/teacherSelector';
import Card from '../../Components/TeacerCard/Card';
import { AppDispatch } from '../../Redax/store';
import { setIsLoading, setLoadpage, setTeachers } from '../../Redax/teacherSlice';
import { getTeachersListPag } from '../../Redax/teachersThank';
import { LoadMoreButton, Margin } from '../../Components/TeacerCard/Card.styled';
import Loader from '../../Components/Loader/LoaderContent';
import { CardListInform, CardListNothing } from './TeachersPage.styled';
  import 'react-toastify/dist/ReactToastify.css';

type Props = {}


const TeachersPage = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const filter = useSelector(selectFilter);
  const loadMorePage = useSelector(selectLoadPage);
  const isLoader = useSelector(selectLoading);

  useEffect(() => {
  dispatch(setTeachers([]));
  }, [dispatch]);

  useEffect(() => {
      if (teachers.length === 0) {
     	dispatch(setIsLoading(true));
			dispatch(getTeachersListPag(1));
		}
	}, [dispatch, teachers]);


	const teachersArray = filter.length === 0 ? teachers : filter;

  const loadMore = () => {
		dispatch(setIsLoading(true));
		dispatch(setLoadpage(loadMorePage + 1));
    dispatch(getTeachersListPag(loadMorePage));
	};



  return (
    <>
      
    <FilterTeachers />
    {teachersArray.length !== 0 ?
				<CardListInform>
					{teachersArray.map(e => (
						<Card key={e.avatar_url} teacher={e} />
					))}
				</CardListInform> :
        <CardListNothing>This criteria did not yield any results.</CardListNothing>
      }

      {isLoader? <Loader /> : null}
      {(filter.length !== 0) || (teachers.length !==0) ?
        <LoadMoreButton onClick={loadMore} >Load more</LoadMoreButton> :
        <Margin />}
      </>
  )
}

export default TeachersPage