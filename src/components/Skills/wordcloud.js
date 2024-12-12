import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);

  const container = '.content';
  const texts = [
    'Python',
    'Typescript',
    'Golang',
    'C++',
    'SQL',
    'Bash',
    'React',
    'NextJS',
    'Firebase',
    'Django',
    'Flask',
    'NodeJS',
    'Express',
    'GraphQL',
    'FastAPI',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Scikit-learn',
    'OpenCV',
    'Docker',
    'Kubernetes',
    'GCP',
    'AWS',
    'Terraform',
    'Git',
    'GitHub',
    'Linux',
    'Java',
    'Flutter',
    'Dart',
    'HTML5',
    'CSS3',
    'JS',
    'C',
    'Solidity',
  ];

  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  };

  useEffect(() => {
    // Проверяем, существует ли уже облако тегов
    const existingCloud = document.querySelector('.tagcloud');
    if (isLoading && !existingCloud) {
      TagCloud(container, texts, options);
      setLoad(false);
    }

    // Очистка при размонтировании компонента
    return () => {
      const cloudElement = document.querySelector('.tagcloud');
      if (cloudElement) {
        cloudElement.remove();
      }
    };
  }, []); // Пустой массив зависимостей, чтобы эффект выполнился только при монтировании

  return (
      <div className="main">
        <span className="content"></span>
      </div>
  );
};

export default WordCloud;