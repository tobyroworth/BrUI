export const formatTemp = new Intl.NumberFormat(undefined, {
  style: 'unit',
  unit: 'celsius',
  maximumFractionDigits: 1,
  minimumFractionDigits: 1
}).format;

export const formatPressure = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  maximumFractionDigits: 1,
  minimumFractionDigits: 1
}).format;

export const formatFlow = new Intl.NumberFormat(undefined, {
  style: 'unit',
  unit: 'milliliter-per-second',
  maximumFractionDigits: 1,
  minimumFractionDigits: 1
}).format;