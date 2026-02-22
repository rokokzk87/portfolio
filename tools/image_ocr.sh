#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <image_path> [lang]" >&2
  exit 1
fi

IMG="$1"
LANG="${2:-rus+eng}"
tesseract "$IMG" stdout -l "$LANG"
