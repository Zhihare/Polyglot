import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Modal, StyledPopup } from '../Forms/LoginForm.styled';
import { ButtonBook, InformContainer, RadiobuttonContainer } from './BookTrialLessons.styled';
import { ReviewsContainer } from '../TeacerCard/Card.styled';
import { toast } from 'react-toastify';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  personName: string;
  personPhoto: string;
}

const ModalForm: React.FC<ModalProps> = ({ showModal, closeModal, personName, personPhoto }) => {
 const initialValues = {
    interest: '',
    fullName: '',
    email: '',
    phone: ''
  };

  const validationSchema = Yup.object({
    interest: Yup.string().required('Interest is required'),
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required')
  });

  const handleSubmit = (values: any) => {
      console.log(values);
      closeModal();
      toast.success('You will be contacted shortly!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            };

 useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (showModal) {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }
}, [showModal, closeModal]);

  return (
    <StyledPopup open={showModal} onClose={closeModal} closeOnDocumentClick>
      <Modal>
        <button className="close" onClick={closeModal}>&times;</button>
              <h2 className='bookTrial'>Book trial lesson</h2>
              <p className='bookTrialDesc'>Our experienced tutor will assess your current language level, discuss your learning goals,
                  and tailor the lesson to your specific needs.</p>
              
                                <ReviewsContainer>
                                <img src={personPhoto} alt={personName} />
                                    <div>
                                    <p className='reviewsName' style={{marginBottom: '0'}}>You Teacher</p>
                                    <p style={{ marginBottom: '0' }}>{personName}</p>
                                    </div>
              </ReviewsContainer>
              
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  <Form>
                      <h3>
                          What is your main reason for learning languages?
                      </h3>
                      <RadiobuttonContainer>
                          <li>
                               <Field type="radio" name="interest" value="Career and business" />
                               <label htmlFor="career">Career and business</label>
                          </li>
                          <li>
                               <Field type="radio" name="interest" value="Lesson for kids" />
                               <label htmlFor="kids">Lesson for kids</label>
                          </li>
                          <li>            
                                <Field type="radio" name="interest" value="Living abroad" />
                                <label htmlFor="abroad">Living abroad</label>
                          </li>
                          <li>
                               <Field type="radio" name="interest" value="Exams and coursework" />
                               <label htmlFor="exams">Exams and coursework</label>
                          </li>
                          <li>
                               <Field type="radio" name="interest" value="Culture, travel or hobby" />
                                <label htmlFor="culture">Culture, travel or hobby</label>
                          </li>
              <ErrorMessage name="interest" component="div" className="error" />
            </RadiobuttonContainer>
            <InformContainer>
            <div>
              <Field type="text" name="fullName" placeholder="Full name" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field type="text" name="phone" placeholder="Phone"/>
              <ErrorMessage name="phone" component="div" className="error" />
                          </div>
            </InformContainer>
            <ButtonBook type="submit">Book</ButtonBook>
          </Form>
        </Formik>
      </Modal>
    </StyledPopup>
  );
};

export default ModalForm;