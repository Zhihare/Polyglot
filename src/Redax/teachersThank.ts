import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase/conect';
import { ref, get } from 'firebase/database';



export const getTeachersListPag = createAsyncThunk(
	"teachers/fetchAll",
	 async (pageNumber: number) => {
        try {
            const pageSize = 4; 
            const start = (pageNumber - 1) * pageSize; 
            const end = start + pageSize; 
            const snapshot = await get(ref(db, 'teachers'));
            if (snapshot.exists()) {
                const snapshotVal = snapshot.val();
                if (snapshotVal !== null) {
                    const data = Object.values(snapshotVal);
					const itemsToLoad = data.slice(start, end); 
					return itemsToLoad;
                } else {
					return [];
                }
            } else {
				return [];
            }
        } catch (error) {
			return [];
        }
    }
);



export const getFilterTeachers = createAsyncThunk(
	"teachers/make",
	async ({ language, level, price }: { language: string, level: string, price: number }) => {
		try {
			const snapshot = await get(ref(db, 'teachers'));
			if (snapshot.exists()) {
				const snapshotVal = snapshot.val();
				if (snapshotVal !== null) {
					const data = Object.values(snapshotVal);
					const filteredData = data.filter((teacher: any) => {
						const languageMatch = !language || teacher.languages.includes(language);
						const levelMatch = !level || teacher.levels.includes(level);
						const priceMatch = !price || teacher.price_per_hour <= price;

						return languageMatch && levelMatch && priceMatch;
					});

					return filteredData;
				} else {
					console.log('Data is null');
					return [];
				}
			} else {
				console.log('No data available');
				return [];
			}
		} catch (error) {
			console.error('Error fetching data:', error);
			throw error;
		}
	}
);
	// async (make, thunkAPI) => {
	// 	try {
	// 		const response = await axios.get(`cars?make=${make}`);
	// 		return response.data;
	// 	} catch (e:any) {
	// 		return thunkAPI.rejectWithValue(e.message);
	// 	}
	// }
