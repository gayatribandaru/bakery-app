# Use an official web server image as a parent image
FROM nginx:alpine

# Copy the contents of your web app directory to the default web server directory
COPY ./ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]