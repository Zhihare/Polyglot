import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase/conect';
import { ref, get } from 'firebase/database';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



export const getTeachersListPag = createAsyncThunk(
    "teachers/fetchAll",
    async (pageNumber: number) => {
        try {
            const pageSize = 4;
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const snapshot = await get(ref(db, 'teachers'));
            const snapshotVal = snapshot.val();
            const data = snapshotVal ? Object.values(snapshotVal) : [];

            return [
                data.slice(start, end),
                Math.ceil(data.length / 4)
            ];
		} catch (error) {
			toast.error('Database not found');
            return [[], 0];
        }
    }
);



export const getFilterTeachers = createAsyncThunk(
    "teachers/make",
    async ({ language, level, price, pageNumber }: { language: string; level: string; price: number; pageNumber: number }) => {
        try {
            const pageSize = 4;
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;

           const snapshot = await get(ref(db, 'teachers'));
            if (!snapshot.exists()) {
                toast.error('Database not found');
                return [[], 0];
            }
            
            const snapshotVal = snapshot.val();
            if (snapshotVal === null) {
                toast.error('Database not found');
                return [[], 0];
            }
            
            const data = Object.values(snapshotVal);
            const filteredData = data.filter((teacher: any) => {
                const languageMatch = !language || teacher.languages.includes(language);
                const levelMatch = !level || teacher.levels.includes(level);
                const priceMatch = !price || teacher.price_per_hour <= price;

                return languageMatch && levelMatch && priceMatch;
            });
            
            if (filteredData.length === 0) {
                toast.error('Sorry, nothing was found for your request.');
                return [[], 0];
            }
            
            const itemsToLoad = filteredData.slice(start, end); 
            const totalPages = Math.ceil(filteredData.length / 4);
            
            return [itemsToLoad, totalPages];
        } catch (error) {
            throw error;
        }
    }
);