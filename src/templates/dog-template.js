import React from 'react';

const DogTemplate = ({ pageContext: { dog } }) => <section>{dog.name}</section>;

export default DogTemplate;
