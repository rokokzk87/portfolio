#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <input_pdf> [output_pdf]" >&2
  exit 1
fi

IN="$1"
OUT="${2:-/tmp/ocr.pdf}"
ocrmypdf -l rus+eng --skip-text "$IN" "$OUT"
echo "$OUT"
