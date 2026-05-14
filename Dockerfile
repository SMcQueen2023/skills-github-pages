FROM jekyll/jekyll:pages

USER root

RUN gem install webrick --no-document

WORKDIR /srv/jekyll

COPY --chown=jekyll:jekyll . /srv/jekyll

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--baseurl", "/skills-github-pages", "--force_polling"]