FROM ruby:2.3
ENV HOME /root
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
WORKDIR /home/app/frontend
ADD ./frontend/package.json /home/app/frontend
ADD ./frontend/yarn.lock /home/app/frontend
RUN yarn install
COPY ./frontend /home/app/frontend
CMD ["yarn", "start"]
