export const languages = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Arabic', label: 'Arabic' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Portuguese', label: 'Portuguese' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Dutch', label: 'Dutch' },
  { value: 'Korean', label: 'Korean' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Polish', label: 'Polish' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Vietnamese', label: 'Vietnamese' },
  { value: 'Greek', label: 'Greek' },
  { value: 'Czech', label: 'Czech' },
  { value: 'Thai', label: 'Thai' },
  { value: 'Indonesian', label: 'Indonesian' },
  { value: 'Finnish', label: 'Finnish' },
  { value: 'Danish', label: 'Danish' },
  { value: 'Norwegian', label: 'Norwegian' },
  { value: 'Hungarian', label: 'Hungarian' },
  { value: 'Romanian', label: 'Romanian' },
  { value: 'Hebrew', label: 'Hebrew' },
  { value: 'Ukrainian', label: 'Ukrainian' },
  { value: 'Malay', label: 'Malay' },
  { value: 'Slovak', label: 'Slovak' },
];


export const languageLevels = [
  { value: "A1", label: "A1 Beginner" },
  { value: "A2", label: "A2 Elementary" },
  { value: "B1", label: "B1 Intermediate" },
  { value: "B2", label: "B2 Upper-Intermediate" },
  { value: "C1", label: "C1 Advanced" },
  { value: "C2", label: "C2 Proficient" }
];

export const createArrayWithStep = () => {
	const result = [];
	for (let i = 10; i <= 1000; i += 10) {
		result.push({ value: i, label: i });
	}
	return result;
}