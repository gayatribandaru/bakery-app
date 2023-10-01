Overview

It is a basic Name Register App with all CRUD Operations included. It started as a monolithic application and was later transformed into a micro services - based architecture for better scalability and maintainability.

What was its initial state?
The application initially started as a "monolithic" application. In software development, a monolithic application is one where different components (like user authentication, inventory management, and payment processing) 
are interwoven and cannot be decoupled easily. They all run in a single service or application.

Why did it transform into a microservices-based architecture?
The application later transitioned into a "microservices-based architecture" for better "scalability" and "maintainability."

Technologies 

Docker
Kubernetes
HTML
CSS
JAVASCRIPT
FLASK

Architecture

Before: Monolithic Architecture
The initial version was a monolithic application handling:

Create, Read, Update, Delete a Name on register

After: Microservices Architecture
The application was broken down into the following microservices:
FrontEnd, Backend.

Installation

  Clone the repo

git clone https://github.com/your-username/bakery-application.git

  Navigate to each microservice directory and build the Docker image

docker build -t user-service .

create a kind cluster 

kind create cluster --name name-cluster

load image to kind cluster 

kind load docker-image backend-image:tag --name backend-cluster

  Deploy to Kubernetes
  
kubectl apply -f user-service-deployment.yaml

# Deliverables:

<details open>
  <summary>
    
# Architecture Diagrams
</summary>
  
## Monolith Architecture Diagram (Before)
<img width="593" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/6aea815b-3b62-4876-a01c-10307838aeec">


## Microservice Architecture Diagram (After)
<img width="560" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/1ffd8350-2a24-4f4c-9f20-070654fe5ecb">

</details>

<details open>

<summary>
  
# K8's Running State

</summary>

### Monolith App K8s status
<img width="447" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/f1cee45d-a6f8-43af-98e1-d2f2959ad1ad">



### Frontend k8 status
<img width="439" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/7eb0d88a-2145-4621-9230-537dd85ea52c">

### Backend k8 status
<img width="396" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/4120060b-8a6f-4a4d-8423-a4550a6c739c">

</details>

<details open>

  <summary>

  # Application
    
  </summary>

  <img width="944" alt="image" src="https://github.com/gayatribandaru/bakery-app/assets/51997864/2fe71136-e4aa-4a71-95e2-a5b762fa0098">

  
</details>

<details open>

<summary>

# Kubernetes yamls
  
</summary>

[backend_yaml](https://github.com/gayatribandaru/bakery-app/blob/main/microservice/backend/my-backend-deployment.yaml)

[frontend_yaml](https://github.com/gayatribandaru/bakery-app/blob/main/microservice/frontend/my-frontend-deployment.yaml)

[Monolith yaml1](https://github.com/gayatribandaru/bakery-app/blob/main/monolith/my-monolith-deployment.yaml)

[Monolith Service yaml](https://github.com/gayatribandaru/bakery-app/blob/main/monolith/monolith-service.yaml)

</details>
