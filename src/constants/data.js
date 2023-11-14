import images from './images';

const wines = [
  {
    title: ' Hill Shiraz',
    price: '$86',
    tags: 'AU | Bottle',
  },
  {
    title: ' Malbee',
    price: '$69',
    tags: 'AU | Bottle',
  },
  {
    title: 'Vieillw Rose',
    price: '$34',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Pale Ale',
    price: '$41',
    tags: 'CP | 350 ml',
  },
  {
    title: 'Irish ',
    price: '$59',
    tags: 'IT | 450 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol ',
    price: '$20',
    tags: ' soda | 30 ml',
  },
  {
    title: "Dark Stormy",
    price: '$16',
    tags: ' Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: ' Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar ',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'The absolute best.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'We are the rising stars.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'High on hospitality.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Outstanding chef of the year.',
  },
];

export default { wines, cocktails, awards };