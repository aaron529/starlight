---
title: Configuration
description: Complete guide to configuring LiarsLounge settings, database, and arena behavior
---

## Configuration Files Overview

LiarsLounge uses three main configuration files:

| File | Purpose |
|------|---------|
| `config.yml` | Database and core game settings |
| `values.yml` | GUI items, materials, and visual elements |
| `arenas/<arena_name>.yml` | Individual arena configurations |

:::note[File Location]
All files are in `plugins/LiarsLounge/` and auto-generate on first startup.
:::

## config.yml

### Database Settings

Choose between SQLite (simple) or MySQL (advanced):

#### SQLite (Recommended for Most Servers)
```yaml
database:
  type: 'SQLite'
```

#### MySQL (For Networks/Large Servers)
```yaml
database:
  type: 'MySQL'
  host: 'localhost'
  port: 3306
  database: 'liarslounge'
  user: 'root'
  pass: 'password'
  ssl: false
  verify-certificate: true
  pool-size: 10
  max-lifetime: 1800000
  idle-timeout: 600000
  keepalive-time: 0
  connection-timeout: 30000
```

### Game Settings

```yaml
game:
  send-pro-tip: true          # Show helpful tips to players
  allow-chat-arena: true      # Enable chat during games
  allowed-commands:           # Commands usable in arenas
    - 'leave'
    - 'll'
    - 'liarslounge'
```

| Setting | Description | Recommended |
|---------|-------------|-------------|
| `send-pro-tip` | Sends the player a message when they try to drop cards without selecting one | `true` for new servers |
| `allow-chat-arena` | Chat during games | `true` for social gameplay |
| `allowed-commands` | Whitelisted commands | Keep minimal for fairness |

## values.yml

Controls all visual elements, items, and GUI appearances.

### Lobby Settings

```yaml
lobby:
  location: null    # Set via /ll setup lobby
```

### Game Items Configuration

#### Player Inventory Items

```yaml
game:
  items:
    leave-arena:
      material: "BED"
      slot: 8               # Hotbar slot 9
    guide:
      material: "WRITTEN_BOOK"
      slot: 0               # Hotbar slot 1
    call-liar:
      material: "BLAZE_ROD"
      # No slot = given when needed
```

#### Card Items

Each card type has custom skull textures:

```yaml
    cards:
      king:
        material: "CUSTOM_SKULL"
        texture: "ewogICJ0aW1lc3RhbXAiIDog..."  # Base64 texture
        data: 1
      queen:
        material: "CUSTOM_SKULL"
        texture: "ewogICJ0aW1lc3RhbXAiIDog..."
        data: 1
```

:::tip[Custom Textures]
All cards use custom skull textures for authentic Liar's Lounge appearance. Don't modify texture values unless you have replacement designs.
:::

#### Verdict Cards (Post-Accusation)

```yaml
    verdict-cards:
      right:        # When accusation is correct
        king:
          material: "CUSTOM_SKULL"
          texture: "..."
      wrong:        # When accusation is wrong
        king:
          material: "CUSTOM_SKULL"
          texture: "..."
```

### GUI Configuration

#### Arena Selector Interface

```yaml
gui:
  arena-selector:
    size: 45                # GUI size (must be multiple of 9)
    join-item:
      waiting:
        material: "PAPER"   # Arena in waiting state
      starting:
        material: "EMPTY_MAP"  # Arena starting countdown
      playing:
        material: "MAP"     # Arena in active game
      slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25 # slots where the map items will be displayed
    join-random:
      material: "FIREWORK"
      slot: 40
    next-page:
      material: "CUSTOM_SKULL"
      slot: 41
    previous-page:
      material: "CUSTOM_SKULL" 
      slot: 39
```

### Title Animations

```yaml
  titles:
    waiting:
      fade-in: 10     # Ticks to fade in
      stay: 20        # Ticks to stay visible
      fade-out: 10    # Ticks to fade out
    start-timer:
      fade-in: 10
      stay: 20
      fade-out: 10
```

:::note[Timing Values]
Title timings are in Minecraft ticks (20 ticks = 1 second). Adjust carefully to avoid overwhelming players.
:::

## arenas/<arena_name>.yml

Each arena has its own configuration file created during setup.

### Basic Arena Settings

```yaml
enabled: true                    # Arena is enabled
world: "world"                   # World name
group: "default"                 # Arena group for organization
```

### Waiting Configuration

```yaml
waiting:
  min-players: 2                 # Minimum players to auto start
  auto-start-delay: 20           # Seconds before auto-start when min player count reached
  start-delay-on-full: 5         # Auto-Start seconds when arena is full
  card-throw-timeout: 60         # Seconds player has for their turn
  location:
    x: 0
    y: 0
    z: 5
    yaw: 0
    pitch: 0
```

### Table Configuration

```yaml
table:
  location:
    x: 0                     
    y: 0
    z: 0
```

### Chair Locations

```yaml
chairs:
  0:                            # Chair index
    x: 0
    y: 0
    z: 0
    yaw: 0                   # Direction chair faces
    pitch: 0
  1:
    x: 0
    y: 0
    z: 0
    yaw: 0
    pitch: 0
```

### Action Item Locations

```yaml
action-items:
  0:                            # Must match chair 0
    x: 0                    # Slightly in front of chair 0
    y: 0
    z: 0
  1:                            # Must match chair 1
    x: 0                    # Slightly in front of chair 1
    y: 0
    z: 0
```

:::danger[Critical Pairing]
Action item indices MUST match chair indices exactly. Action item 0 corresponds to chair 0, etc.
:::

## Arena Settings Explained

| Setting | Description | Typical Value |
|---------|-------------|---------------|
| `min-players` | Players needed to start | 2-4 |
| `auto-start-delay` | Countdown when min players reached | 10-30 seconds |
| `start-delay-on-full` | Countdown when arena full | 3-10 seconds |
| `card-throw-timeout` | Time limit for player turns | 30-120 seconds |