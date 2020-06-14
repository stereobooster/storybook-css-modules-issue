import React from 'react';
import { Rating } from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const RatingStory = () => <Rating />;

RatingStory.story = {
  name: 'All',
};
