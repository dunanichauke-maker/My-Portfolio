#!/bin/sh
# Fix author/committer for specific commits
case "$GIT_COMMIT" in
833e938d3ae101b505004b177375846de41522d4)
  export GIT_AUTHOR_NAME="Dunani Ken Chauke"
  export GIT_AUTHOR_EMAIL="dunanichauke@gmail.com"
  export GIT_COMMITTER_NAME="Dunani Ken Chauke"
  export GIT_COMMITTER_EMAIL="dunanichauke@gmail.com"
  ;;
705c6658334c612032be494c643c0c450f941abd)
  export GIT_AUTHOR_NAME="Dunani Ken Chauke"
  export GIT_AUTHOR_EMAIL="dunanichauke@gmail.com"
  export GIT_COMMITTER_NAME="Dunani Ken Chauke"
  export GIT_COMMITTER_EMAIL="dunanichauke@gmail.com"
  ;;
bb9cc4fe2af2e9aae0808a051e585729fc14a364)
  export GIT_AUTHOR_NAME="Dunani Ken Chauke"
  export GIT_AUTHOR_EMAIL="dunanichauke@gmail.com"
  export GIT_COMMITTER_NAME="Dunani Ken Chauke"
  export GIT_COMMITTER_EMAIL="dunanichauke@gmail.com"
  ;;
esac
