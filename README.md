# Museum Central

Museum Central is a faithful recreation inspired by the renowned e-commerce site, [Boutiques de Musées](https://www.boutiquesdemusees.fr/en/) where users can explore their favorite museums and discover an array of exquisite products. Logged in users can seamlessly add captivating products to their cart, creating a wishlist of cultural gems, and become curators in their own right by allowing them to create and manage their virtual museums populated by unique products of their choice. Whether you're a history buff, art enthusiast, or science lover, Museum Central is your gateway to a curated collection of cultural wonders. [Click here to view the Museum Central Live Site](https://museum-central.onrender.com/)

## 🌐 Wiki Link

* [Database Schema](https://github.com/regdes721/Museum-Capstone/wiki/DB-Schema)
* [Feature List](https://github.com/regdes721/Museum-Capstone/wiki/Feature-list)
* [User Stories](https://github.com/regdes721/Museum-Capstone/wiki/User-Stories)

## 💻 Languages and Technologies

This is a concise list of what was utilized to develop this project.

<div>
   <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" title="Python" alt="Python" width="40" height="40">
   <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40">
   <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
   <img src="https://cdn.freebiesupply.com/logos/large/2x/flask-logo-png-transparent.png" title="Flask" alt="Flask " width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL " width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
</div>

## ⚙️ Getting started

1. Clone this repository (only the main branch).

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```

   to regenerate requirements.txt run `pipenv requirements > requirements.txt`

3. Create a __.env__ file based on the example with proper settings for your
   development environment.

4. Make sure the SQLite3 database connection URL is in the __.env__ file.

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention.**

6. Get into your pipenv, migrate your database, seed your database, and run your
   Flask app:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React frontend in development, `cd` into the __react-vite__
   directory and run `npm i` to install dependencies. Next, run `npm run build`
   to create the `dist` folder. The starter has modified the `npm run build`
   command to include the `--watch` flag. This flag will rebuild the __dist__
   folder whenever you change your code, keeping the production version up to
   date. Finally, run `npm run dev` to open the application on the local browser.

## 📷 Landing Page:

You will be able to test the features without sign up by clicking on one of the "Demo User" buttons in the Signup Page. You will then be directed to the landing page, where you can create a server, join a server, or open a server.

## ⚠️ Technical implementation details

## ⏩ Future Features
* Wishlist
* Google Maps
* Search
* Account Page
* Orders
