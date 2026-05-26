# GitLab runner policy for NeuraForge Docs

## Current pipeline

The docs pipeline is npm-only and uses `package-lock.json` as the source of truth.

Jobs:

- `typecheck`, `build`: `node:22-alpine`, non-privileged runner tagged `bun-node`
- `playwright`: official Playwright image, non-privileged runner tagged `bun-node`
- `docker_build`: disabled/manual scaffold for a future dedicated `docker-build` runner
- `deploy`: disabled/manual scaffold for a protected `release` runner

## Docker-in-Docker decision

Docker-in-Docker is not required for the active docs pipeline. The optional `docker_build` job uses Kaniko and is disabled until a dedicated runner exists.

If Docker builds become mandatory:

1. Prefer Kaniko or BuildKit rootless.
2. If DinD is unavoidable, enable `privileged = true` only on a dedicated runner tagged `docker-build`.
3. Never run privileged Docker jobs on the general `bun-node` runner.

## Required runner tags

- `bun-node`: Node/npm/Playwright quality and build jobs, non-privileged Docker executor.
- `docker-build`: image builds only, preferably Kaniko/BuildKit rootless.
- `release`: protected deploy/release jobs only.
