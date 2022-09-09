export const useFormProgress = (dataArray: any[], maxValue: number = 100) => {
	const fields = dataArray;

	const hasFields = fields && fields.length > 0;

	const filledFieldsCount: number = hasFields
		? fields.filter((field) => field.value).length
		: 0;

	return (filledFieldsCount / fields.length) * maxValue;
};
