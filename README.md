# bakery-app

Table of Contents
Overview
Technologies Used
Architecture
Before: Monolithic Architecture
After: Microservices Architecture
Getting Started
Prerequisites
Installation
Deployment

Overview
The Bakery Application is designed to manage a virtual bakery store. It started as a monolithic application and was later transformed into a micro services - based architecture for better scalability and maintainability.

What was its initial state?
The application initially started as a "monolithic" application. In software development, a monolithic application is one where different components (like user authentication, inventory management, and payment processing) 
are interwoven and cannot be decoupled easily. They all run in a single service or application.

Why did it transform into a microservices-based architecture?
The application later transitioned into a "microservices-based architecture" for better "scalability" and "maintainability."

Technologies Used
Docker
Kubernetes
HTML
CSS
JAVASCRIPT

Architecture
Before: Monolithic Architecture
The initial version was a monolithic application handling:

User Management
Product Catalog
Inventory
Order Management
Payment Processing
After: Microservices Architecture
The application was broken down into the following microservices:

User Service: Manages user accounts and authentication.
Product Catalog Service: Manages the product catalog.
Inventory Service: Manages inventory.
Order Service: Manages customer orders.
Payment Service: Handles payment processing.
Notification Service: Sends out notifications.

Getting Started
Prerequisites
Docker
Kubernetes
Node.js
Installation
  Clone the repo

git clone https://github.com/your-username/bakery-application.git

  Navigate to each microservice directory and build the Docker image

docker build -t user-service .

  Deploy to Kubernetes

kubectl apply -f user-service-deployment.yaml

Conclusion
The Bakery Application has evolved from a monolithic architecture to a more scalable and maintainable microservices-based architecture. This transformation enables the application to efficiently 
manage different aspects of a virtual bakery store, from user authentication to order processing.
By embracing containerization and Kubernetes, the application is now well-positioned for future growth and can easily adapt to changing business requirements. 
Whether you're a developer interested in contributing or a business looking for a robust 
bakery management solution, this application offers a flexible and scalable approach to meet your needs.
