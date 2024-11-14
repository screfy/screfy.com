type FormatterDateValue = Date | number;

export const LOCALE = 'en-US';

const monthFormatter = new Intl.DateTimeFormat(LOCALE, {
	month: 'short',
	year: 'numeric',
});

export const formatMonth = (date: FormatterDateValue) =>
	monthFormatter.format(date);
