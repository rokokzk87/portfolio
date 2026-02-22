#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <pdf_path> [out_txt]" >&2
  exit 1
fi

PDF="$1"
OUT="${2:-/tmp/pdf_text.txt}"
pdftotext -layout "$PDF" "$OUT"
echo "$OUT"
