# E-Commerce Frontend

This is the frontend part of a multi-product e-commerce application built using Angular.

## Project Structure

```
ecommerce-frontend
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── cart
│   │   │   ├── checkout
│   │   │   ├── login
│   │   │   ├── product-detail
│   │   │   └── product-list
│   │   ├── services
│   │   ├── guards
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   └── environments
└── angular.json
```

## Features
- User authentication (login/register)
- Product listing and detail views
- Shopping cart management
- Checkout process

## Running the Application

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the application

## Dependencies
- Angular 13
- Angular Material
- RxJS
- Zone.js

## Environment Configurations
- Development: `src/environments/environment.ts`
- Production: `src/environments/environment.prod.ts`

## License
This project is licensed under the MIT License.