# Blogging-WebApp
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/966bebec0e5e77072af2ce7959cd2437a5323eae/Screenshot1.ipg.png)
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/3293a7926b5d3a8cfed8b3328ffeeb1d54b71ce7/SS2.jpg)
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/45b93acbd3a58f343122bf956d90a2699901f0e0/SS3.jpg)
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/2354df3e4acedffdea5261f25f642a4969081579/SS4.jpg)
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/2dcc926517481b9069822b0f7c935f121c9bbbd0/SS5.jpg)
![image alt](https://github.com/KetanPatil-dev/Blogging-WebApp/blob/dea2bc2577308e99bfcb7f4bd89dcf74acb012c6/SS6.jpg)

A full-stack blog application where users can create, read, update, and delete (CRUD) blog posts. Users can also comment on posts and manage their profiles.
NOTE- This is my First Full-Stack Project so the UI might not be that great, but I have tried my very best.
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
- `POST /auth/logout` - Logout user

### Blog Posts:
- `POST /blog/create` - Create a new blog post
- `GET /blog/post/:id` - Get a single post
- `PATCH /blog/update/:id` - Update a post
- `DELETE /blog/delete/:id` - Delete a post

### Comments:
- `POST /comments/addcomment` - Add a comment

### Dashboard:
- `GET /dashboard/getalldata`- Gets all Data (Users and Posts)
  




