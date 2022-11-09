#stage 1
FROM codercom/enterprise-base:ubuntu

# Run everything as root
USER root

# Install whichever Node version is LTS
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
# RUN DEBIAN_FRONTEND="noninteractive" apt-get update -y && \
#     apt-get install -y nodej
RUN DEBIAN_FRONTEND="noninteractive" apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
# RUN DEBIAN_FRONTEND="noninteractive" apt-get update && apt-get install -y yarn
RUN DEBIAN_FRONTEND="noninteractive"  apt-get install -y yarn

# Set back to coder user
# Make ssh dir

RUN mkdir /app
RUN chown -R coder /app

# RUN cd app

# Clone the conf files into the docker container
RUN git clone https://github.com/mapurba/angular-dynamic-forms.git /home/coder/angular-dynamic-forms
RUN cd /home/coder/angular-dynamic-forms
RUN chown -R coder /home/coder/angular-dynamic-forms/*
RUN npm install --prefix /home/coder/angular-dynamic-forms/
RUN npm start --prefix /home/coder/angular-dynamic-forms/
USER coder
