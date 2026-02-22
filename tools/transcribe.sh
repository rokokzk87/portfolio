#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <audio_path> [model]" >&2
  exit 1
fi

AUDIO="$1"
MODEL="${2:-small}"

source /root/.openclaw/venvs/media/bin/activate
python3 - <<PY
from faster_whisper import WhisperModel

audio = r'''${AUDIO}'''
model_name = "${MODEL}"
model = WhisperModel(model_name, device="cpu", compute_type="int8")
segments, info = model.transcribe(audio, vad_filter=True)
print(f"[lang={info.language} prob={info.language_probability:.2f}]")
for s in segments:
    print(f"{s.start:8.2f}-{s.end:8.2f}  {s.text}")
PY
