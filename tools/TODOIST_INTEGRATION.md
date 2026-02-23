# Todoist Integration (Jarvis_hub topic:176)

## Current setup

- Token file: `/root/.openclaw/credentials/todoist.token`
- Bridge script: `tools/todoist_bridge.py`
- Sync state: `.openclaw/todoist_state.json`
- Cron job: `todoist-sync-topic-176` (every 3 minutes)

## Chat → Todoist

Use these commands in the topic:

- `todo: <task text>` → create task
- `todo p<1-4>: <task text> / <due text>` → create task with priority and due text
- `todo done <task_id>` → complete task
- `todo list` → show current tasks

(Handled by assistant via `tools/todoist_bridge.py`.)

## Todoist → Chat

Every 3 minutes, cron triggers a check.
If there are changes, assistant posts update summary to the topic.
If there are no changes, assistant stays silent (`NO_REPLY`).

## Manual checks

```bash
# list tasks
./tools/todoist_bridge.py list

# create task
./tools/todoist_bridge.py add "Купить батарейки" --due-string "tomorrow 10:00" --priority 3

# complete task
./tools/todoist_bridge.py close <task_id>

# diff sync check
./tools/todoist_bridge.py sync
```
