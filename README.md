# KIITBites

**KIITBites** is an innovative online food ordering platform designed to simplify and expedite the process of ordering food from KIIT's food court. Inspired by popular food delivery services like Swiggy and Zomato, KIITBites ensures that students and faculty can conveniently order their favorite meals without the hassle of waiting in long queues. This README provides an overview of the project, including its technologies, features, and team members.

## Introduction

KIITBites aims to provide a seamless and efficient food ordering experience for the KIIT community. By leveraging modern web technologies, we offer a user-friendly interface and robust backend to handle high volumes of orders and ensure timely delivery.

## Features

- **User Registration and Login:** Secure authentication system for users to register and log in.
- **Browse Menu:** View and search through a comprehensive menu of available food items.
- **Order Management:** Place, track, and manage food orders easily.
- **Payment Gateway Integration:** Secure online payments for hassle-free transactions.
- **Notifications:** Real-time updates on order status.
- **Admin Panel:** Manage menu items, view order statistics, and handle customer queries.

## Technologies

### Frontend
- **TypeScript**
- **React**
- **module.scss**

### Backend
- **Node.js**
- **Express**

### Database
- **PostgreSQL**
- **Prisma**

### Additional Tools
- **JWT** for authentication
- **Stripe API** for payment processing
- **Socket.io** for real-time notifications

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/kiitbites.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd kiitbites
    ```

3. **Install frontend dependencies:**
    ```sh
    cd client
    npm install
    ```

4. **Install backend dependencies:**
    ```sh
    cd ../server
    npm install
    ```

5. **Set up the PostgreSQL database:**
    - Ensure PostgreSQL is installed and running.
    - Create a new database for KIITBites.
    - Update the database URL in the Prisma schema.

6. **Run database migrations:**
    ```sh
    npx prisma migrate dev
    ```

7. **Start the development servers:**
    - **Frontend:**
        ```sh
        cd ../client
        npm start
        ```
    - **Backend:**
        ```sh
        cd ../server
        npm run dev
        ```

## Usage

- **Frontend:** Open your browser and navigate to `http://localhost:3000` to interact with the application.
- **Backend:** The backend server will be running at `http://localhost:5000`.

<!-- ## Screenshots

![Homepage](./screenshots/homepage.png)
*Homepage: Browse and select your favorite dishes.*

![Order Page](./screenshots/order-page.png)
*Order Page: Manage your orders easily.*

![Admin Panel](./screenshots/admin-panel.png)
*Admin Panel: Administrative functionalities to manage the system.* -->

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Create a pull request with a detailed description of your changes.

<!-- ## Contributors

- **Alice Johnson** - Project Lead
- **Bob Smith** - Frontend Developer
- **Carol Williams** - Backend Developer
- **Dave Brown** - Database Administrator
- **Eve Davis** - UX/UI Designer

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->
