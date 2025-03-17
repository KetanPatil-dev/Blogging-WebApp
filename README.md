# Blogging-WebApp
# Blog App

A full-stack blog application where users can create, read, update, and delete (CRUD) blog posts. Users can also comment on posts and manage their profiles.

Features

✅ User Authentication (Login/Signup)  
✅ Create, Read, Update, and Delete Blog Posts  
✅ Commenting System  
✅ Image Upload for Blog Posts  
✅ Protected Routes (Only logged-in users can access certain pages)  
✅ Responsive UI  

Tech Stack

 Frontend:
- React.js
- React Router
- Axios (for API requests)
- Bootstrap
  
Backend:
- Node.js & Express.js
- MongoDB (Mongoose for schema management)
- bcrypt (for password hashing)
- JWT (for authentication)
- Multer (for image upload)

## Installation

 1. Clone the repository
```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

 2. Install Dependencies
 Backend:
```bash
cd backend
npm install
```
 Frontend:
```bash
cd frontend
npm install
```

 3. Set Up Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=7989
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

 4. Run the App
 Start Backend Server:
```bash
cd backend
npm run dev
```
 Start Frontend:
```bash
cd frontend
npm run dev
```

## API Endpoints

### Authentication:
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Blog Posts:
- `POST /blog/create` - Create a new blog post
- `GET /blog/post/:id` - Get a single post
- `PATCH /blog/update/:id` - Update a post
- `DELETE /blog/delete/:id` - Delete a post

### Comments:
- `POST /comments/addcomment` - Add a comment


## Deployment
For deployment, use:
- Frontend: Vercel / Netlify
- Backend: Render / Railway
- Database: MongoDB Atlas

## Contribution
Feel free to fork this repo and submit a pull request with your improvements!

## License
This project is open-source and available under the [MIT License](LICENSE).

