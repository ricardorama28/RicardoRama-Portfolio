#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Set git identity for this repo
git config user.name "Ricardo Rama"
git config user.email "ricardorama28@gmail.com"

# Install dependencies
cd "$CLAUDE_PROJECT_DIR"
npm install
