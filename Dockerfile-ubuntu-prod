FROM --platform=linux ubuntu:22.04
ARG BUILDARCH

ENV LOCAL=/usr/local

COPY build/lotteryd-linux-${BUILDARCH} ${LOCAL}/bin/lotteryd

ENTRYPOINT [ "lotteryd" ]
