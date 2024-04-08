import React, { useEffect, useState } from 'react'
import { CardButton, CardInfo, CardPhoto, CardWrapper, FavoriteButton, HeadSection, ImgWrapper, InformSections, LevelWrapper, Rating, ReviewsContainer, ReviewsList } from './Card.styled';
import { IoBookOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import icons from '../Img/icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../Redax/teacherSelector';
import { AppDispatch } from '../../Redax/store';
import { addFavorites, removeFavorites } from '../../Redax/teacherSlice';
import defoultImage from '../Img/1681895305_kartinki-pibig-info-p-kartinki-dlya-profilya-arti-instagram-4.jpg'
import ModalForm from '../BookTrial/BookTrialLessons';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

type Props = {
    teacher: any;
}

const Card = ({ teacher }: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const { isAuth } = useAuth();
    const [activ, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const favorites = useSelector(selectFavorites);
	const [actionFavorite, setActionFavorite] = useState(false);

    const { avatar_url, conditions, experience, languages, lessons_done, lesson_info,
        name, price_per_hour, rating, levels, surname, reviews } = teacher;
    
    const Togle = () => {
        setActive(o => !o);
    }


    const handleOpenModal = () => {
    if (isAuth) {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    } else {
        toast.error('Please register first');
    }
};
    
    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'unset';
    };


    useEffect(() => {
		if (favorites.length !== 0) {
			const teachersFavorite = favorites.some(e => e.lesson_info === lesson_info);

			setActionFavorite(teachersFavorite);
		}
    }, [favorites, lesson_info]);
    

   const togleFavorite = () => {
    isAuth ? (
        !actionFavorite ?
            dispatch(addFavorites(teacher)) && setActionFavorite(true) :
            dispatch(removeFavorites(lesson_info)) && setActionFavorite(false)
    ) :
    toast.error('Please register first');
};

    return (
      
      <CardWrapper>
          <ImgWrapper>
              <CardPhoto src={avatar_url} alt="name" />
          </ImgWrapper>
            <InformSections>
                <FavoriteButton
					type="button"
					onClick={togleFavorite}
				>
					<svg
						className={actionFavorite ? 'active' : 'defould'}
					>
						<use href={icons + '#icon-favorite'}></use>
					</svg>
                </FavoriteButton>
                <HeadSection>
                    <div>
                        <p className='head'>Languages</p>
                        <h3 key={name + surname}>{name} {surname}</h3>
                    </div>

                    <Rating>
                    <li><IoBookOutline /><p> Lessons online</p></li>
                    <li><p>Lesons done: {lessons_done}</p></li>
                    <li className='star'><FaStar /><p>Rating: {rating}</p></li>
                    <li><p>Price / 1 hour: <span>{price_per_hour}$</span></p></li>
                    </Rating>
                </HeadSection>
              <CardInfo>
              <li className='description'>Speaks: {languages.map((e: string) => <span key={e}>{e}, </span>)}</li>
              <li className='description'>Lesson Info: <span>{lesson_info}</span></li>
              <li className='description'>Conditions: {conditions.map((e: string) => <span key={e}>{e}</span>)}</li>
                </CardInfo>
                
                {!activ ? <p onClick={Togle} className='readMore'>Read More</p> :
                    <div>
                    <p>Experience: {experience}</p>
                    <ReviewsList>
                            {reviews.map((r: any[string]) => (
                                <li key={r.reviewer_name}>
                                <ReviewsContainer>
                                <img src={defoultImage} alt={r.reviewer_name} />
                                    <div>
                                    <p className='reviewsName'>{r.reviewer_name}</p>
                                    <p ><FaStar /> {r.reviewer_rating}</p>
                                    </div>
                                </ReviewsContainer>
                                    <p>{r.comment}</p>
                                </li>
                            )
                         )}   
                    </ReviewsList>
                    </div>
                }
                
                <LevelWrapper>
                    {levels.map((e: string) => <li key={e}>#{e}</li> )}
                </LevelWrapper>
                <CardButton className={!activ ? 'hidden' : ''} onClick={handleOpenModal}>Book trial lesson</CardButton>
                <ModalForm showModal={showModal} closeModal={handleCloseModal} personPhoto={avatar_url} personName={name +' '+ surname} />
            </InformSections>
            
    </CardWrapper>
  )
}

export default Card