import React, { useEffect, useState } from 'react'
import FilterTeachers from '../../Components/TeachersFilter/Filter'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectLoadPage, selectLoading, selectMaxPage, selectTeachers } from '../../Redax/teacherSelector';
import Card from '../../Components/TeacerCard/Card';
import { AppDispatch } from '../../Redax/store';
import { setIsLoading, setLoadpage, setTeachers } from '../../Redax/teacherSlice';
import { getFilterTeachers, getTeachersListPag } from '../../Redax/teachersThank';
import { LoadMoreButton, Margin } from '../../Components/TeacerCard/Card.styled';
import Loader from '../../Components/Loader/LoaderContent';
import { CardListInform, CardListNothing } from './TeachersPage.styled';
  import 'react-toastify/dist/ReactToastify.css';

type Props = {}

export type FilterData = {
    language: string;
    level: string;
    price: number;
    pageNumber: number;
};

const TeachersPage = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const filter = useSelector(selectFilter);
  const loadMorePage = useSelector(selectLoadPage);
  const isLoader = useSelector(selectLoading);
  const maxPage = useSelector(selectMaxPage);
  const [dataFilter, setDataFilter] = useState({ language: '', level: '', price: 10000, pageNumber: 1 });
  const [dataCard, setDataCard] = useState(true);

  useEffect(() => {
    if (dataCard) {
      dispatch(setTeachers([]));
    }
  }, [dispatch, dataCard]);

  useEffect(() => {
    if (teachers.length === 0 && dataCard) {
     	dispatch(setIsLoading(true));
      dispatch(getTeachersListPag(1));
		}
  }, [dispatch, teachers, dataCard]);
  
    useEffect(() => {
        setDataFilter((prevDataFilter) => ({ ...prevDataFilter, pageNumber: loadMorePage }));
    }, [loadMorePage]);
 
    const handleFilterData = (data: FilterData, dataCard: boolean) => {
      setDataFilter({ ...data, pageNumber: loadMorePage });
      setDataCard(dataCard);
    }
  


	const teachersArray = dataCard ? teachers : filter;


  const loadMore = () => {
    dispatch(setIsLoading(true));
    dispatch(setLoadpage(loadMorePage + 1));
    if (filter.length > 0) {
      dispatch(getFilterTeachers(dataFilter))
    } else {
      dispatch(getTeachersListPag(loadMorePage));
    };
  }



  return (
    <> 
      <FilterTeachers data={handleFilterData} />
    {teachersArray.length !== 0 ?
				<CardListInform>
					{teachersArray.map(e => (
						<Card key={e.avatar_url} teacher={e} />
					))}
				</CardListInform> :
        <CardListNothing>This criteria did not yield any results.</CardListNothing>
      }

      {isLoader? <Loader /> : null}
      {(loadMorePage-1 < maxPage && teachersArray.length !== 0)?
        <LoadMoreButton onClick={loadMore} >Load more</LoadMoreButton> :
        <Margin />}
      </>
  )
}

export default TeachersPage