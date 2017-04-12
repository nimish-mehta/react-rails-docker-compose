FROM ruby:2.3
RUN apt-get update && apt-get install -y -o Dpkg::Options::="--force-confold" netcat libpq-dev imagemagick
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/
WORKDIR /tmp
RUN bundle install
COPY . /home/app/backend
WORKDIR /home/app/backend
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN mkdir -p /tmp/pids
