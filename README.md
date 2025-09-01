# Hospitālis
## Residential Property Management System: Web Application (Microservices)

## Overview

<p align='justify'>Scalable event-driven microservices architecture web application developed to support residential property management for landlords and property administrators who would seek to provide vanguard tenants with a secure, user-friendly platform for executing modern rental tasks, including Online Rent Payments, Contract Agreements Management, Maintenance Requests, Bulletin Push Notifications, Landlord-Tenant Log Notes, Amenities Reservation, AI Agent (Ada) Integration, VoIP Intercom and Real-Time Chat communications. Adopted a Domain Driven Design approach to promote component reusability & guarantee bounded context and low-latency communications between respective microservices. Integrated third-party APIs for VoIP (Twilio), Payments Processing (Stripe, Paystack, Square) and System notifications. Performance observability & monitoring are handled via Prometheus and Grafana.
</p>

#### System Requirements
```
⦿ NodeJS 20+
⦿ ≥ 16GB RAM
⦿ Hard Drive: ≥ 5GB of available storage
⦿ Docker Desktop (for local container deployment)
⦿ Amazon Web Services
```

## System Design & Architecture

### Microservice Architecture 
** Private Repositories (Access available upon request) 🔐
<ol>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-apigateway"target="_blank">API Gateway Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-notification" target="_blank">Notification Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-authentication"target="_blank">Authentication Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-users"target="_blank">Users Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-rentalservice"target="_blank">RentalService Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-rent-order-invoice"target="_blank">RentOrderInvoice Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-log-notes"target="_blank">Host-Guest Log Notes Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-chat"target="_blank">Chat Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-voip"target="_blank">VoIP Intercom Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-maintenance-request"target="_blank">Maintenance Request Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-amenities-reservation"target="_blank">Amenities Reservation Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-agentic-ai"target="_blank">Agentic AI Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/jupiter-hospitalis-client"target="_blank">ClientUI Microservice</a></li>
</ol>

### Services Synopsis
#### API Gateway
<ul>
<li>Object Oriented::Server, Route, Controller methods</li>
<li>JWT Authenticated Client<->API Gateway connection via HTTP</li>
<li>Secure API Gateway<->*Microservice(s) connection via HTTP & Socket.IO (WebSockets)</li>
<li>AMQP (RabbitMQ) Message Broker</li>
<li>Helmet.js - HTTP Header Security</li>
<li>HPP.js - Parameter Pollution Prevention</li>
<li>XSS(Cross Site Scripting) Sanitization</li>
<li>Elasticsearch & Kibana - Logs Monitoring</li>
<li>Redis Database for In-Memory Datastore</li>
</ul>

#### Notification Microservice
<ul>
<li>Nodemailer SMTP Transport</li>
<li>Extensible EJS Email Templates</li>
<li>AMQP (RabbitMQ) Message Broker</li>
<li>Email Notification Event Message Queue Consumers()</li>
<li>Elasticsearch & Kibana - Logs Monitoring</li>
</ul>

### Default Services Health Info Routes
```javascript
// API Gateway Health
fetch('http:localhost:2400/api-gateway-health');
```
```javascript
// API Gateway Info
fetch('http:localhost:2400/api-gateway-info');
```
```javascript
// Notifications Microservice Health
fetch('http:localhost:2401/notifications-health');
```

## Toolstack
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white)

### 🖥 Backend & APIs
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-FF6F61?style=for-the-badge&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-007ACC?style=for-the-badge&logoColor=white)
![Helmet.js](https://img.shields.io/badge/Helmet.js-4C9EEB?style=for-the-badge&logoColor=white)
![JSON Web Tokens](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-FF7A00?style=for-the-badge&logoColor=white)

### 🗄 Databases & Caching
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### 📡 Messaging & Real-time
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)

### 🛠 Logging, Monitoring & Analytics
![Winston Logger](https://img.shields.io/badge/Winston_Logger-222222?style=for-the-badge&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![Kibana](https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=kibana&logoColor=white)

### 🧪 Testing & QA
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![JMeter](https://img.shields.io/badge/Apache_JMeter-D22128?style=for-the-badge&logo=apachejmeter&logoColor=white)

### 🐳 DevOps & CI/CD
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Minikube](https://img.shields.io/badge/Minikube-0F0F0F?style=for-the-badge&logo=minikube&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2F3E55?style=for-the-badge&logoColor=white)

### 📞 Communication & APIs
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)
![Square API](https://img.shields.io/badge/Square_API-3E4348?style=for-the-badge&logo=square&logoColor=white)

### 💳 Payments & Cloud Services
![Flutterwave](https://img.shields.io/badge/Flutterwave-F5A623?style=for-the-badge&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

## References
📖 <a href="https://github.com/emeraldemperaur/treatise-on-distributed-microservices" target="_blank">Treatise on Distributed Microservices</a>