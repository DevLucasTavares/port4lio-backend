-- Active: 1684415776028@@127.0.0.1@3306
CREATE TABLE projects (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT NOT NULL,
  deploy_link TEXT NOT NULL,
  image_link TEXT NOT NULL
);

INSERT INTO projects (id, title, description, technologies, deploy_link, image_link)
VALUES
  ('p001', 'Zeldiary', 'Primeiro projeto frontend', 'HTML, CSS, Javascript', 'https://zeldiary.vercel.app/index.html', 'https://picsum.photos/seed/picsum/300'),
  ('p002', 'Knowhere', 'Ecommerce de viagens espaciais', 'React, JSX, LocalStorage', 'https://knowhere-beta.vercel.app/', 'https://picsum.photos/seed/picsum/300'),
  ('p003', 'Pokédex', 'Todas as pokedexes dos jogos de Pokémon', 'React, Chakra, Consumo de API', 'https://pokedex-lucastavaresdev.vercel.app/', 'https://picsum.photos/seed/picsum/300');

SELECT * FROM projects;
DROP TABLE projects;