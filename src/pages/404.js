import React from 'react';

import Page from '../components/page';

import postImage from '../assets/img/404-background.jpeg';

const ErrorPage = () => (
  <Page pageTitle="Página não encontrada" title="Página não encontrada" image={postImage} />
);

export default ErrorPage;