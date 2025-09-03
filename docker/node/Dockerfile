ARG BUN_VERSION
FROM oven/bun:${BUN_VERSION}
RUN apt-get update \
  && apt-get upgrade -yq \
  && apt-get install -yq build-essential python3
# ARG UID
# ARG GID
# RUN groupmod -g ${GID} bun \
#     && usermod -u ${UID} -g ${GID} bun \
#     && chown -R ${UID}:${GID} /home/bun
